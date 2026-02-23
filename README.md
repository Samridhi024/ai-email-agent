# AI Email Action Agent

An AI-powered fullstack web application that analyzes raw email content and generates structured insights including summary, action items, priority classification, and a suggested professional reply.

Built using Flask (backend), React (frontend), and Groq LLM API.

---
## Features

- Automatically summarizes long emails
- Extracts actionable tasks
- Classifies priority (High / Medium / Low)
- Generates professional suggested reply
- Returns structured JSON output
- Fullstack architecture (React + Flask)
- Deployed on Render and Vercel
- Secure API key handling using environment variables

---

## Tech Stack

### Frontend
- React.js
- Fetch API
- CSS

### Backend
- Flask
- Flask-CORS
- Gunicorn
- Groq LLM API

### Deployment
- Render (Backend)
- Vercel (Frontend)

---

## Project Structure

```
AI_Email_Agent/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```
---

## How It Works

1. User pastes email into frontend.
2. React sends POST request to `/analyze`.
3. Flask backend:
   - Constructs structured prompt
   - Sends it to Groq LLM
   - Receives structured JSON response
4. Frontend parses and displays:
   - Summary
   - Action Items
   - Priority
   - Suggested Reply

---

## Environment Variables

Backend requires:

GROQ_API_KEY=your_api_key_here

Set this in the Render dashboard under Environment Variables.

---

## Local Setup

### Backend

cd backend  
pip install -r requirements.txt  
python main.py  

### Frontend

cd frontend  
npm install  
npm start  

---

## Why This Project?

This project demonstrates:

- Prompt engineering
- Structured LLM outputs
- API integration
- Fullstack development
- Secure credential management
- Production deployment workflow

---

## Future Improvements

- Email file upload (.eml support)
- User authentication
- Database integration for history
- Dark mode UI
- Multi-model selection
- Role-based email analysis

---

## Author

Samridhi Sinha  
B.Tech CSE | AI & Fullstack Enthusiast


