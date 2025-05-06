# AI Career Advisor App

A full-stack AI-powered career advisor built with React (frontend) and FastAPI (backend). Connects to OpenAI's API for real-time, actionable guidance.

## 📁 Project Structure

- `/frontend` — React + TypeScript UI
- `/backend` — FastAPI server calling OpenAI API

## 🚀 Getting Started

### Backend
1. `cd backend`
2. Create `.env` with your OpenAI key:
3. `pip install -r requirements.txt`
4. `uvicorn main:app --reload`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## 🌐 API Endpoints

- `POST /predict`
- `POST /ask-question`

## 📦 Tech Stack
- FastAPI
- React + TypeScript
- OpenAI GPT-3.5

