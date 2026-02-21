Full Stack Restaurant Web Application

A complete full-stack web application designed to manage restaurant content, menu data, and customer interactions through a modern frontend and a RESTful backend API.

📌 Project Overview

Task 3 is a production-oriented web system that demonstrates end-to-end full-stack development using a client-server architecture. The application enables users to browse menu items, interact with the interface, and submit contact information, while the backend handles data persistence and business logic.

The system emphasizes scalability, modularity, and efficient communication between frontend and backend components.

✨ Features

Dynamic menu display from database

Contact form with data storage

RESTful API architecture

Structured backend with models and routes

Persistent data management

Responsive user interface

Clean separation of frontend and backend

🏗️ System Architecture

The application follows a three-tier architecture:
``` bash
Client (Frontend UI)
      ↓ HTTP Requests
Server (Node.js + Express API)
      ↓
Database (MongoDB)
```
Backend Structure
```bash
backend/
 ├── models/
 │    ├── Menu.js
 │    └── Contact.js
 ├── routes/
 ├── config/
 ├── .env
 └── server.js
```

Each model represents a database schema for structured data storage.

⚡ Workflow

User accesses the web interface

Menu data is fetched from backend APIs

Contact form submissions are sent to the server

Server validates and stores data in the database

Response is returned to the client

🛠️ Technology Stack

Frontend

HTML, CSS, JavaScript (or React-based UI)

Backend

Node.js

Express.js

Database

MongoDB with Mongoose ODM

Tools

npm

Git & GitHub

Environment configuration via .env

⚙️ Installation
Prerequisites

Node.js installed

MongoDB running locally or via cloud

Setup Steps
```bash
git clone https://github.com/your-username/your-repo.git
cd task-3
cd backend
npm install
npm start
```
📊 Key Implementation Aspects

RESTful API design

Schema-based data modeling using Mongoose

Modular backend structure

Secure environment configuration

Persistent storage for menu and user data

🔮 Future Enhancements

User authentication system

Admin dashboard for menu management

Online ordering functionality

Payment gateway integration

Cloud deployment

Real-time notifications

🎯 Purpose

Developed as Task 3, this project demonstrates practical skills in full-stack development, backend API construction, database integration, and scalable system design.

👩‍💻 Author

Rakshita Bilki
Aspiring Software Engineer | ML & Data Enthusiast

📜 License

For educational and portfolio purposes.
