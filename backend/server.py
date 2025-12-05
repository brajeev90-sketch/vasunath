
from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# --- Models ---

class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: EmailStr
    requirement_type: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactInquiryCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    requirement_type: str
    message: str

class NewsletterSub(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Optional[str] = None
    email: EmailStr
    created_at: datetime = Field(default_factory=datetime.utcnow)

class NewsletterSubCreate(BaseModel):
    name: Optional[str] = None
    email: EmailStr


# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Vasu Nath Enterprises API"}

@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    inquiry_dict = input.dict()
    inquiry_obj = ContactInquiry(**inquiry_dict)
    await db.contact_inquiries.insert_one(inquiry_obj.dict())
    return inquiry_obj

@api_router.post("/newsletter", response_model=NewsletterSub)
async def subscribe_newsletter(input: NewsletterSubCreate):
    # Check if already exists
    existing = await db.newsletter_subs.find_one({"email": input.email})
    if existing:
        return NewsletterSub(**existing)
        
    sub_dict = input.dict()
    sub_obj = NewsletterSub(**sub_dict)
    await db.newsletter_subs.insert_one(sub_obj.dict())
    return sub_obj

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
