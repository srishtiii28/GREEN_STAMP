"""Document processing module for OCR and text extraction"""

import os
from typing import Dict, List, Optional
from PIL import Image
import pytesseract
from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import torch
import fitz  # PyMuPDF

class DocumentProcessor:
    def __init__(self):
        """Initialize the document processor with necessary models"""
        self.processor = TrOCRProcessor.from_pretrained('microsoft/trocr-base-handwritten')
        self.model = VisionEncoderDecoderModel.from_pretrained('microsoft/trocr-base-handwritten')
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model.to(self.device)

    def process_pdf(self, file_path: str) -> Dict[int, str]:
        """Extract text from PDF using OCR when needed"""
        try:
            doc = fitz.open(file_path)
            results = {}
            
            for page_num in range(len(doc)):
                page = doc[page_num]
                text = page.get_text()
                
                # If no text is extracted, perform OCR
                if not text.strip():
                    pix = page.get_pixmap()
                    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                    text = self._perform_ocr(img)
                
                results[page_num] = text
            
            return results
        except Exception as e:
            print(f"Error processing PDF: {str(e)}")
            raise ValueError(f"Failed to process PDF file: {str(e)}")

    def _perform_ocr(self, image: Image.Image) -> str:
        """Perform OCR on an image using TrOCR for better accuracy"""
        pixel_values = self.processor(image, return_tensors="pt").pixel_values.to(self.device)
        generated_ids = self.model.generate(pixel_values)
        generated_text = self.processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return generated_text

    def extract_text(self, file_path: str) -> Dict[int, str]:
        """Main method to extract text from a document"""
        try:
            file_ext = os.path.splitext(file_path)[1].lower()
            
            if file_ext == '.pdf':
                return self.process_pdf(file_path)
            elif file_ext in ['.png', '.jpg', '.jpeg']:
                img = Image.open(file_path)
                text = self._perform_ocr(img)
                return {0: text}
            elif file_ext in ['.txt', '.doc', '.docx']:
                # Read text file directly
                with open(file_path, 'r', encoding='utf-8') as f:
                    text = f.read()
                    # Clean up the text by removing extra whitespace and newlines
                    text = ' '.join(text.split())
                return {0: text}
            else:
                raise ValueError(f"Unsupported file format: {file_ext}")
        except Exception as e:
            print(f"Error extracting text: {str(e)}")
            raise ValueError(f"Failed to extract text from file: {str(e)}")