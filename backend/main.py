import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from services import get_ai_response
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],
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
        response = get_ai_response(payload.question)
        return {"answer": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    