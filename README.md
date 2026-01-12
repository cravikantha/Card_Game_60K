🃏 Card Game 60K
📌 Project Purpose

The purpose of this project is to design and implement an interactive web-based card game using modern web technologies while applying software engineering principles such as low coupling, high cohesion, event-driven architecture, interoperability, and virtual identity management.

This project was developed as part of my academic coursework to demonstrate:

Practical use of React and Redux

Integration with cloud-based backend services

Secure user authentication

Real-time leaderboard and score tracking

Clean and maintainable code structure

🎮 Project Overview

Card Game 60K is a browser-based card matching game where:

Users log in using a secure authentication system

Players interact with cards using mouse clicks

Scores are calculated dynamically

Final scores are saved to a cloud database

A global leaderboard displays top players

The game is designed to be simple, responsive, and engaging, while maintaining a strong technical foundation.

🛠️ Technologies Used
Frontend

React.js – UI development

Redux – State management

React Bootstrap – UI components & layout

JavaScript (ES6+)

CSS

Backend & Cloud Services

Supabase

Authentication

Database (PostgreSQL)

API access

Development Tools

Node.js & npm

Git & GitHub

🧠 System Architecture

This project follows a Component-Based, Event-Driven Architecture:

UI Components handle rendering

Redux manages global game state

Actions & Reducers handle game logic

Supabase provides backend services

Events trigger state updates (card click, game over, login)

🔐 Virtual Identity (User Authentication)

User identity is managed using Supabase Authentication.

Features:

Secure email & password login

Automatic session management

Unique user IDs

Optional display name support

This allows:

Personalized gameplay

Accurate score ownership

Secure leaderboard entries

🏆 Leaderboard & Score Management

Scores are saved to Supabase after each game

Each score is linked to a user account

The leaderboard fetches top scores dynamically

Data is sorted in descending order

This demonstrates real-time data interoperability between frontend and backend services.

🧩 Key Software Engineering Concepts Applied
🔹 Low Coupling

UI components do not directly manipulate game logic

Supabase logic is separated into service calls

Redux actions are isolated from UI components

🔹 High Cohesion

Each file has a single responsibility:

Components → UI

Actions → Events

Reducers → State logic

Pages → Screen-level logic

🔹 Event-Driven Architecture

Examples:

Card click → Redux action dispatched

Timer end → Game over event

Login success → User state updated

Game end → Score saved automatically

🔹 Interoperability

React frontend communicates with Supabase via APIs

JSON data exchanged securely

Cloud services work independently but seamlessly

🔹 Virtual Identity

Supabase assigns unique identities

User sessions persist securely

Scores and profiles are linked to authenticated users

📁 Project Structure
src/
│── actions/          # Redux action definitions
│── components/       # Reusable UI components
│── pages/            # Main screens (Game, Auth)
│── reducers/         # Redux reducers
│── utils/            # Helper logic (card logic)
│── styles/           # CSS styles
│── supabaseClient.js # Supabase configuration
│── App.js            # App entry
│── index.js          # React bootstrap

▶️ How to Run the Project

Install Node.js

Clone the repository

Run npm install

Create .env.local with Supabase keys

Run npm start

Open http://localhost:3000

(Full steps provided in the Instructions section)

🎥 Demonstration Video

The submitted video demonstrates:

Login & authentication

Gameplay mechanics

Score calculation

Leaderboard updates

Code walkthrough and explanation

📚 Learning Outcomes

Through this project, I gained hands-on experience with:

React & Redux architecture

Cloud authentication systems

Real-time databases

Event-driven UI development

Clean code organization

Secure web application design

✅ Conclusion

This project successfully combines game design with modern web application architecture.
It demonstrates both technical competency and software engineering best practices, resulting in a scalable, maintainable, and user-focused application.
