# GreenStamp - AI + Blockchain ESG Analysis Platform

GreenStamp is an innovative platform that combines artificial intelligence and blockchain technology to provide comprehensive ESG (Environmental, Social, and Governance) analysis for organizations. The platform offers automated ESG scoring, greenwashing detection, and secure document verification using blockchain technology.

## Features

### AI-Powered ESG Analysis
- OCR + NLP for content extraction and analysis
- Comprehensive ESG scoring with subcategory analysis
- Advanced greenwashing detection using DeBERTa
- BART-based intelligent report summarization
- Detailed evidence extraction and scoring
- Category-specific analysis for 18+ ESG factors

### Blockchain Integration
- Tamper-proof report hash storage on Polygon
- IPFS-based decentralized document storage
- Instant verification of report authenticity

### Smart Contract
- **Contract Name**: `ESGRegistry`
- **Network**: EduChain Testnet
- **Functionality**:
  - `storeReportHash(address user, string memory reportHash)`: Records the report hash associated with a user.
  - `getReportsByUser(address user)`: Retrieves all stored report hashes for a given user.
- **Security**:
  - Immutable on-chain record of ESG report fingerprints
  - User-linked history for auditability and trust
- **Deployment**:
  - Deployed and verified on EduChain Testnet
  - Contract source located in `backend/blockchain/contracts/ESGRegistry.sol`

### User Interface
- Modern, responsive dashboard
- File upload portal
- Interactive ESG score visualization
- Blockchain verification status display
- Searchable and sortable report database

## Tech Stack

### Frontend
- Next.js 13+ with TypeScript
- Tailwind CSS for styling
- React Query for data fetching
- Chart.js for visualizations

### Backend
- Python 3.8+
- FastAPI for RESTful API
- SQLAlchemy for database
- Celery for background tasks

### AI/ML
- Transformers library
- PyTesseract for OCR
- DeBERTa for greenwashing detection
- BART for report summarization
- FinBERT-ESG for scoring

### Blockchain & Storage
- Polygon for smart contracts
- Web3.py for blockchain interaction
- IPFS (web3.storage) for document storage
- Redis for caching

## Architecture

![Alt text](Architecture.png)

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Node.js 16.x or higher
- Git
- Docker (optional, for containerized deployment)
- Polygon Network access
- IPFS node access

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd GREEN_STAMP
```

2. Install backend dependencies:

```bash
cd backend
pip install -r requirements.txt
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Start the services:

```bash
# Start backend server
cd backend
uvicorn api.main:app --reload

# In a new terminal, start frontend
cd frontend
npm run dev
```