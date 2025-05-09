import os
from dotenv import load_dotenv
import openai
load_dotenv()

from openai import OpenAI

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_ai_response(user_question:str) -> str:
    try:
        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=[
                {
                    "role":"system",
                    "content": (
                        "You are a firendly and insightful AI Career Advisor"
                        "Your goal is to help users discover career paths based on interests, skills and goals."
                        "Always ask clarifying question when needed, and keep answers encouraging and practical."

                    )

                },
                {"role":"user","content":user_question}
            ],
            temperature=0.7,
            max_tokens=500
        )
        return response["choices"][0]["message"]["content"].strip()
    except Exception as e:
        raise RuntimeError(f"OpenAI API Error:){str(e)}")