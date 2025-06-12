# Lingostream – Full-Stack Real-Time Chat Application

**Lingostream** is a full-stack web application designed for people who want to connect and practice languages with others through messaging and video calls. It supports real-time one-on-one and group conversations, video calling, friend requests, screen sharing, typing indicators, message reactions, image uploads, thread replies, and session recording.

This README explains how to set up the project locally, how it works, what technologies were used, and why they were chosen. It also outlines key features and highlights the structure of the codebase for both frontend and backend.

---

## 1. Project Overview

Lingostream is built as a modern, scalable application with separate frontend and backend codebases. It uses popular technologies and tools that are used in the industry. The main idea was to create a chat application that is real-time, responsive, secure, and user-friendly.

The project is especially focused on language learners who benefit from live conversations and interactive messaging. The chat system includes features found in commercial apps like Discord or Slack, making it a strong showcase of full-stack development skills.

---

## 2. Tech Stack

### Backend

* **Node.js + Express** – Server and API logic
* **MongoDB + Mongoose** – Database for storing users, messages, friendships, etc.
* **JWT (JSON Web Tokens)** – For secure login sessions
* **Stream API** – For handling real-time messaging and video calls
* **bcrypt** – For password hashing
* **dotenv** – For managing environment variables

### Frontend

* **React + Vite** – Modern UI library with fast build tool
* **React Router DOM** – For page routing and navigation
* **React Query (TanStack Query)** – For managing API calls and caching
* **Tailwind CSS + DaisyUI** – For styling with reusable UI components
* **Zustand** – For global state management (themes, auth, etc.)
* **React Hot Toast** – For toast notifications
* **Axios** – For API requests

---

## 3. Environment Variables

This app uses private credentials like API keys and database connection strings. These are stored securely in `.env` files and never pushed to GitHub.

Create `.env` files in both the backend and frontend directories.

### Backend (`backend/.env`)

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`frontend/.env`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 4. Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/lingostream.git
cd lingostream
```

### Step 2: Set Up the Backend

```bash
cd backend
npm install
```

Start the backend server in development mode:

```bash
npm run dev
```

The backend will run on `http://localhost:5001`

### Step 3: Set Up the Frontend

```bash
cd ../frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 5. Features Summary

* **Real-time messaging** with live updates, typing indicators, message threads, and reactions
* **Video calling** with group support, screen sharing, and call recording
* **User authentication** with secure login/signup using JWT tokens and encrypted passwords
* **Friend request system** to send, receive, and accept friend requests
* **Profile management** with onboarding flow and theme selection
* **32 unique themes** saved in browser storage for personalized experience
* **Error handling and loading states** using toasts and spinners
* **Responsive design** for mobile and desktop

---

## 6. How It Works (In Simple Terms)

### Authentication

Users sign up and log in. JWT tokens are used to keep them logged in securely. Passwords are hashed before saving to the database.

### Real-Time Chat

Stream API handles real-time messaging and video calls. Each conversation is stored in a unique channel based on user IDs.

### Friend Requests

Users can search for others, send friend requests, and accept or reject them. Backend logic ensures users can't send duplicate or invalid requests.

### Video Calls

Stream API enables users to start a call from any chat. Features like screen sharing and recording are supported.

### Themes and Preferences

The frontend uses Zustand to manage themes. The selected theme is saved locally, so it stays even if the page is refreshed.

---

## 7. Backend Architecture

* `routes/`: Defines API routes like `/auth`, `/friends`, and `/users`
* `controllers/`: Contains logic for each route
* `models/`: Mongoose schemas for user, messages, etc.
* `middleware/`: Includes auth middleware to check JWTs
* `index.js`: Entry point that connects MongoDB and starts the server

---

## 8. Frontend Architecture

* `components/`: Reusable UI parts like buttons, chat bubbles, modals
* `pages/`: Different screens like Home, Login, Chat, Profile
* `hooks/`: Custom hooks like `useLogin`, `useAuthUser`
* `contexts/`: Contexts for auth, theme
* `utils/`: Utility functions (like formatting dates, filtering messages)

---

## 9. Design Decisions and Rationale

* **React Query** was used to simplify API handling. It automatically caches responses, handles loading states, and refetches data when needed.
* **Zustand** was used instead of Redux because it's simpler and more lightweight.
* **Stream API** was chosen to handle messaging and calls in real time without building the whole socket infrastructure manually.
* **MongoDB** is a good fit for this project because of its flexible schema, especially for chat and messaging data.
* **Tailwind + DaisyUI** helped in building responsive and attractive UI components quickly.

---

## 10. Deployment Strategy

In production, both the backend and frontend are served together.

* The frontend is built using Vite, which generates static files.
* These static files are served by the Express backend.
* API routes and frontend files are served from the same domain.

This reduces deployment complexity and helps avoid issues like CORS.

---

## 11. Future Improvements

* Add notifications using WebSockets
* Implement chat search and filters
* Use Redis for storing sessions and improving performance 
* Add email verification and password reset

---

## 12. Conclusion

This project demonstrates how to build a real-time full-stack web application using modern technologies. It combines backend logic (authentication, database, REST APIs) with a responsive and interactive frontend. The use of real-time APIs, modern libraries, clean code structure, and reusable components makes the project maintainable and scalable.

This project helped develop a deeper understanding of:

* RESTful API development and JWT-based auth
* Working with third-party real-time APIs
* State management in React
* Designing responsive and dynamic user interfaces
* Structuring scalable frontend and backend codebases

---

Once both servers are running, navigate to `http://localhost:5173` to open the application.


