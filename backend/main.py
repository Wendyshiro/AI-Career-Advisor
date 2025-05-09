import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from services import get_ai_response
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
origins = [
    "http://localhost:3000"
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuestionRequest(BaseModel):
    question:str

class AnswerResponse(BaseModel):
    answer:str

class PredictionRequest(BaseModel):
    text:str

@app.post("/predict")
def predict(payload: PredictionRequest):
    input_text = payload.text
    result = f"You entered: {input_text}"
    return{"result": result}

@app.post("/ask-question", response_model=AnswerResponse)
def ask_question(payload: QuestionRequest):
    try:
        # Simulate a response as if from OpenAI
        question = payload.question.lower()
        
        if "cv" in question or "resume" in question:
            response = "Sure! Here's how you can improve your CV: Start with a strong summary, highlight achievements, and tailor it to the role."
        elif "interview" in question:
            response = "Interview tips: Be concise, research the company, and ask thoughtful questions at the end."
        elif "career" in question:
            response = "Think about your interests and strengths. Tech, design, and data roles are in demand right now."
        else:
            response = f"Interesting question! Here's a general tip: Always stay curious and keep learning."

        return {"answer": response}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    