import os
import unittest
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from dotenv import load_dotenv
import json
import logging

load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('logs/model_tests.log')
    ]
)
logger = logging.getLogger(__name__)

class ModelPerformanceTest(unittest.TestCase):
    def setUp(self):
        self.models = {
            'esg': {
                'scorer': AutoModelForSequenceClassification.from_pretrained(
                    'models/esg/esg-scorer'
                ),
                'classifier': AutoModelForSequenceClassification.from_pretrained(
                    'models/esg/esg-classifier'
                )
            },
            'greenwashing': {
                'detector': AutoModelForSequenceClassification.from_pretrained(
                    'models/greenwashing/detector'
                ),
                'classifier': AutoModelForSequenceClassification.from_pretrained(
                    'models/greenwashing/classifier'
                )
            }
        }
        
        self.tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
        
        # Load test data
        with open('tests/test_data.json', 'r') as f:
            self.test_data = json.load(f)

    def test_esg_scorer_performance(self):
        """Test ESG scoring model performance"""
        test_cases = self.test_data['esg']['scorer']
        
        for case in test_cases:
            inputs = self.tokenizer(case['text'], return_tensors="pt")
            outputs = self.models['esg']['scorer'](**inputs)
            score = outputs.logits.softmax(dim=1)[0][1].item()
            
            self.assertTrue(
                abs(score - case['expected_score']) <= 0.1,
                f"ESG score mismatch for case {case['id']}: expected {case['expected_score']}, got {score}"
            )

    def test_esg_classifier_performance(self):
        """Test ESG classification model performance"""
        test_cases = self.test_data['esg']['classifier']
        
        for case in test_cases:
            inputs = self.tokenizer(case['text'], return_tensors="pt")
            outputs = self.models['esg']['classifier'](**inputs)
            prediction = outputs.logits.argmax(dim=1).item()
            
            self.assertEqual(
                prediction,
                case['expected_class'],
                f"ESG classification mismatch for case {case['id']}: expected {case['expected_class']}, got {prediction}"
            )

    def test_greenwashing_detector_performance(self):
        """Test greenwashing detection model performance"""
        test_cases = self.test_data['greenwashing']['detector']
        
        for case in test_cases:
            inputs = self.tokenizer(case['text'], return_tensors="pt")
            outputs = self.models['greenwashing']['detector'](**inputs)
            prediction = outputs.logits.argmax(dim=1).item()
            
            self.assertEqual(
                prediction,
                case['expected_class'],
                f"Greenwashing detection mismatch for case {case['id']}: expected {case['expected_class']}, got {prediction}"
            )

    def test_greenwashing_classifier_performance(self):
        """Test greenwashing classification model performance"""
        test_cases = self.test_data['greenwashing']['classifier']
        
        for case in test_cases:
            inputs = self.tokenizer(case['text'], return_tensors="pt")
            outputs = self.models['greenwashing']['classifier'](**inputs)
            prediction = outputs.logits.argmax(dim=1).item()
            
            self.assertEqual(
                prediction,
                case['expected_class'],
                f"Greenwashing classification mismatch for case {case['id']}: expected {case['expected_class']}, got {prediction}"
            )

if __name__ == '__main__':
    unittest.main()
