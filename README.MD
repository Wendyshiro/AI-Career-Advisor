
# 🎓 AI Career Advisor App

An AI-powered career guidance tool that helps users explore potential career paths based on their interests. Built with a React frontend, FastAPI backend, and integrated with OpenAI’s GPT-3.5 for intelligent, real-time recommendations.

---

## 🧠 Features

- Personalized career recommendations based on user input
- Real-time Q&A functionality using OpenAI's GPT-3.5 API
- Clean, responsive UI with React + TypeScript
- Modular full-stack architecture for easy scaling

---

## 🗂️ Project Structure

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

