# 🎴 Card Game 60K  
### Distributed Service Architectures

---

## 📌 Project Purpose
The purpose of this project is to design and implement a web-based card game that demonstrates key concepts of **Distributed Service Architectures**.  
This project is based on an open-source card game and has been **extended, refactored, and re-architected** to meet academic and technical requirements.

The focus areas include:
- Low Coupling & High Cohesion
- Event-Driven Architecture
- Interoperability with external services
- Virtual Identity and authentication
- Clean, modular frontend architecture

---

## 🎮 Game Overview
**Card Game 60K** is a time-based card matching game designed for both entertainment and architectural demonstration.

**Key Features**
- User authentication (Login / Register)
- Time-based gameplay
- Score calculation and persistence
- Global leaderboard
- Restart and logout functionality
- Sound effects and background audio

---

## 🖼️ User Interface Screens

### 🔐 Login Screen  
![Login UI](loging%20UI.png)

- Users log in using email and password
- Authentication handled via Supabase
- Session maintained using Supabase Auth

---

### 📝 Registration Screen  
![Register UI](REGISTER%20UI.png)

- New users can register with:
  - Email
  - Display Name
  - Password
- Display Name is later shown in the Leaderboard
- User identity is managed virtually (no local password storage)

---

### 🃏 Game Play Screen  
![Game UI](GAME%20UI.png)

- Card grid rendered dynamically
- Timer-driven gameplay
- Score updates based on card matching
- Leaderboard visible alongside the game

---

## 🧠 Architecture Overview

### 1️⃣ Low Coupling & High Cohesion
- UI components are separated by responsibility (Auth, Game, Leaderboard)
- Business logic is isolated from presentation
- Redux actions handle state changes independently
- Supabase logic is centralized in a single client file

This ensures:
- Easier maintenance
- Better scalability
- Clear responsibility per module

---

### 2️⃣ Event-Driven Architecture (EDA)
The application follows an **event-driven flow**:

Examples:
- Card click → dispatch action → update Redux store
- Login button click → authentication event → session update
- Game end → score submission event → leaderboard refresh

UI-triggered events drive the entire system without tight dependencies.

---

### 3️⃣ Interoperability
The system interoperates with **external services**:

- **Supabase Authentication API**
- **Supabase Database API**
- REST-based communication using HTTPS
- JSON-based data exchange

This demonstrates real-world distributed system interaction.

---

### 4️⃣ Virtual Identity
User identity is managed virtually using Supabase:

- No passwords stored locally
- Secure JWT-based authentication
- Each user is identified by a unique Supabase user ID
- Display Name stored separately for leaderboard visibility

---

## 🔐 Why Supabase Authentication
Supabase Authentication was selected because it provides a **secure, modern, and fully managed identity system** suitable for distributed applications.

Benefits:
- Built-in session management
- Secure password handling
- Token-based authentication
- Easy frontend integration
- No need to build custom auth logic

This allows the application to focus on **game logic**, not security implementation.

---

## 🗂️ Code Structure Overview

src/\
├── actions/     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Redux actions (game logic)\
├── components/  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Reusable UI components (cards, modals, score)\
├── pages/       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Main pages (AuthPage, Game)\
├── reducers/    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     # Redux reducers\
├── utils/    &nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Card generation and helper logic\
├── styles/      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Global and component-level CSS\
├── supabaseClient.js &nbsp; # Supabase configuration\
└── App.js            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Application entry logic


**Architecture Style:**  
👉 *Component-Based, Event-Driven Frontend Architecture with Centralized State Management (Redux)*

---

## 🔊 Sound Features
The game includes:
- Background music (MP3)
- Button click sound
- Card flip sound

All sounds are triggered by UI events to enhance user experience.
---
##🧹 Open-Source Modification Notice

###This project is based on an open-source card game.
###The following changes were made:

-Removed unused backend API logic
-Replaced authentication with Supabase
-Refactored Redux actions and reducers
-Redesigned UI and user flow
-Added leaderboard and identity support

##All unused and irrelevant code was removed to ensure clarity, originality, and academic compliance.

##✅ Learning Outcomes Achieved

-Practical use of distributed services
-Real-world authentication integration
-Event-driven frontend design
-Clean modular architecture
-Secure virtual identity handling

#🏁 Conclusion

##This project demonstrates how a simple game can be transformed into a distributed, scalable, and user-focused system by applying modern architectural principles.
---

## ▶️ How to Run the Project

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

---
## The application will run at:

http://localhost:3000

### Steps

```bash
git clone https://github.com/your-username/Card_Game_60K.git
cd Card_Game_60K
npm install
npm start


