# Language Learning Quiz Platform
A simple MERN (MongoDB, Express, React, Node.js) stack project that provides small quizzes to help users learn new languages like Hindi and Spanish. The platform allows users to log in, choose a language, track their progress and score, and complete three quiz levels per language to demonstrate their learning. Upon completing all levels, the user is assumed to have achieved a basic proficiency in the language.
Table of Contents
- Features
- Project Structure
- Setup and Installation
- Technologies Used
- Current Limitations and Future Goals

Features
- User Authentication: Log in to access language learning resources and track progress.
- Language Selection: Choose from available languages (e.g., Hindi, Spanish).
- Progress Tracking: Track learning progress and scores for each selected language.
- Quizzes by Level: Complete quizzes across three levels per language to advance.

Project Structure
  language-learning-quiz
  ├── Fromtend                 # Frontend React application
  │   ├── src
  │   │   ├── components      # Reusable components (e.g., Login, Quiz, Progress)
  │   │   ├── pages           # Pages (e.g., LoginPage, LanguageSelection, QuizPage)
  │   │   ├── App.js          # Main application entry
  │   │   └── index.js        # React DOM rendering
  ├── Backend                  # Backend Node.js application
  │   ├── models              # MongoDB models (User, Quiz)
  │   ├── routes              # API routes (auth, quizzes)
  │   ├── controllers         # Request handlers (e.g., user authentication, quiz retrieval)
  │   ├── server.js           # Express server setup
  └── README.md

Setup and Installation
To set up and run the project locally, follow these steps:

Prerequisites
Node.js and npm installed on your machine.
MongoDB (either installed locally or a cloud-based instance like MongoDB Atlas).

Installation
1. Clone the repository:
   git clone https://github.com/KhSudhir2345/LanguageLearning
   cd language-learning-quiz
2. Install dependencies:
  For Backend:
   cd Backend
   npm install
  For Frontend:
    cd ../Frontend
    npm install
3. Set up environment variables:
   Create a .env file in the server directory and define your MongoDB connection string and any other environment variables.
   MONGODB_URI=your_mongodb_connection_string
   PORT=8000
4. Start the backend server:
  cd ../Backend
  npm start
5. Start the frontend React app:
   cd ../Frontend
   npm start
6. Access the application: Open your browser and go to http://localhost:3000.

Technologies Used
- Frontend: React, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)

Current Limitations and Future Goals
  While the platform is non-functional, several improvements are planned to enhance the user experience and learning effectiveness:
  
  User Interface Improvements:
  Develop a more visually engaging, pixel-art-themed UI for better user experience.
  
  Dashboards and Enhanced Progress Tracking:
  Add a user dashboard for a more detailed progress overview, such as detailed score history and level completion stats.
  
  Learning Support:
  Instead of just testing knowledge with quizzes, introduce interactive resources or hints to support users in learning the language effectively.
  
  Enhanced User Authentication:
  Strengthen user authentication, potentially integrating social login options for easier access.
   



  
