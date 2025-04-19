from fastapi import FastAPI, UploadFile, File
import os
import requests
from dotenv import load_dotenv
import textract

load_dotenv()


app = FastAPI()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
print("Loaded API KEY:", GROQ_API_KEY[:10], "***")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODEL = "llama3-8b-8192"  # or "llama3-8b-8192"

# Prompt templates
GREENWASHING_PROMPT = r"""
You are an ESG compliance auditor. Analyze the following ESG report for signs of greenwashing.
Respond with:
- Greenwashing risk level (High / Moderate / Low)
- Examples of vague or exaggerated claims
- Brief justification

Text:
{content}
"""

COMPLIANCE_SCORING_PROMPT = r"""
Based on the following ESG report, evaluate compliance according to:
- GRI (Global Reporting Initiative)
- SASB (Sustainability Accounting Standards Board)
- TCFD (Task Force on Climate-related Financial Disclosures)

Assign a score from 0-100 and a risk category ("High Risk", "Moderate Risk", "Compliant") for each framework.

Text:
{content}
"""

SUMMARY_PROMPT = r"""
Create a 1-page plain-language executive summary of the following ESG report for stakeholders. Highlight key environmental, social, and governance factors:

Text:
{content}
"""

def extract_text_from_file(upload_file: UploadFile):
    temp_path = f"temp_{upload_file.filename}"
    with open(temp_path, "wb") as f:
        f.write(upload_file.file.read())
    text = textract.process(temp_path).decode("utf-8")
    os.remove(temp_path)
    return text

def call_groq(prompt: str):
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }
    response = requests.post(GROQ_API_URL, json=data, headers=headers)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]

@app.post("/analyze/")
async def analyze_esg(file: UploadFile = File(...)):
    try:
        text = extract_text_from_file(file)[:8000]  # llama3-70b context

        # Run all analyses
        greenwashing = call_groq(GREENWASHING_PROMPT.format(content=text))
        compliance = call_groq(COMPLIANCE_SCORING_PROMPT.format(content=text))
        summary = call_groq(SUMMARY_PROMPT.format(content=text))

        return {
            "Greenwashing Analysis": greenwashing,
            "Compliance Scoring": compliance,
            "Executive Summary": summary
        }
    except Exception as e:
        return {"error": str(e)}
