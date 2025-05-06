import os
from dotenv import load_dotenv
load_dotenv()

from openai import OpenAI



client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_ai_response(question: str) -> str:
    prompt = f"""
    You are a helpful and concise career advisor. Respond to the following user question with actionable and structured advice:

    Question: {question}
    """
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful and concise career advisor."},
            {"role": "user", "content": question}

        ],
        timeout=15
    )

    return response.choices[0].message.content.strip()

