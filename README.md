Here’s a more professional and comprehensive `README.md` tailored for your LingoStream platform. This version includes a structured outline with clear sections on purpose, system design, features, tech stack, and setup instructions:

---

# LingoStream – Language Exchange Platform with Chat & Video Calling

LingoStream is a modern, fullstack web application designed to connect native speakers around the world for real-time language exchange through messaging and video communication. It supports 1-on-1 and group interactions, offering tools for immersive, culturally authentic language learning experiences.

---

## 📘 Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [System Architecture](#system-architecture)
4. [Technology Stack](#technology-stack)
5. [Installation & Setup](#installation--setup)
6. [Environment Variables](#environment-variables)
7. [Development Scripts](#development-scripts)
8. [License](#license)

---

## Project Overview

LingoStream facilitates language learning by pairing users with native speakers through a sleek and intuitive interface. It emphasizes real-time, human-to-human interaction to promote cultural immersion and conversational fluency. Users can message, call, and screen share with language partners, track learning progress, and personalize their experience with a wide range of UI themes.

---

## Key Features

* **Real-Time Messaging** with typing indicators, message reactions, and conversation history.
* **Video Calling** (1-on-1 & group) with support for screen sharing and session recording.
* **Secure Authentication** via JWT and route protection.
* **Personalized Interface** with 32 unique UI themes.
* **Language Exchange Tools** that match users by language interest and proficiency.
* **Scalable Architecture** utilizing hosted services for chat infrastructure.
* **Global State Management** powered by Zustand.
* **Full Error Handling** across client and server.

---

## System Architecture

```
Client (React + Tailwind) ←→ API Server (Express) ←→ MongoDB (Database)
        ↓                              ↓
     Stream SDK               Authentication (JWT)
        ↓                              ↓
Real-Time Messaging          Call Signaling & Session Mgmt
```

* **Frontend**: A performant single-page application built with React and styled using TailwindCSS.
* **Backend**: RESTful API built with Node.js and Express, managing user data, session tokens, and database communication.
* **Real-time & Video**: Stream SDK handles messaging, video calls, screen sharing, and reactions with robust scalability.

---

## Technology Stack

| Layer            | Technology                                        |
| ---------------- | ------------------------------------------------- |
| Frontend         | React, Vite, TailwindCSS                          |
| Backend          | Node.js, Express, MongoDB                         |
| Real-Time Engine | [Stream](https://getstream.io) SDK (Chat & Video) |
| Auth             | JSON Web Tokens (JWT)                             |
| State Mgmt       | Zustand                                           |
| Query Layer      | TanStack Query                                    |
| Deployment       | Vercel (Frontend), Render (Backend)               |

---

## Installation & Setup

### Prerequisites

Ensure the following are installed:

* Node.js (v18+)
* npm or yarn
* MongoDB (local or cloud instance)

---

## Environment Variables

Create a `.env` file in both `/backend` and `/frontend` directories with the following values:

### Backend (`/backend/.env`)

```env
PORT=5001
MONGO_URI=your_mongo_connection_string
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend/.env`)

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## Development Scripts

### Running the Backend

```bash
cd backend
npm install
npm run dev
```

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

Once both servers are running, navigate to `http://localhost:5173` to open the application.

