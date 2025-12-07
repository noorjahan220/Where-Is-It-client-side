# WhereIsIt - Lost and Found Website

<!-- This HTML tag fixes the image size issue -->
<div align="center">
  <img src="https://i.ibb.co.com/VY1g37CR/Screenshot-474.png" alt="WhereIsIt Banner" width="100%" style="border-radius: 10px;">
</div>

<br/>

## 🔗 Live Links
- **Live Site:** [Visit WhereIsIt](https://lost-found-32de4.web.app)

## 📖 Project Overview
**WhereIsIt** is a community-driven platform designed to connect individuals who have lost personal belongings with those who may have found them. 

The goal of this project is to create a digital hub where users can report lost items, browse found items, and interact securely to recover their possessions. This full-stack application utilizes the MERN stack to handle complex database relationships, secure authentication, and a responsive user interface.

## ✨ Core Features
- **Lost & Found Management:** Users can add items with detailed descriptions, dates, locations, and images.
- **Advanced Search:** Browse and search through lost and found items to find matches.
- **Secure Authentication:** 
    - Email/Password login.
    - Social Login (Google & GitHub) via Firebase.
- **JWT Authorization:** Secure access to private routes using JSON Web Tokens.
- **Item Recovery:** A specialized workflow for recovering items to prevent duplicate claims.
- **Dashboard:** Users can manage (update/delete) their own posts.
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop using Tailwind CSS.
- **UX Enhancements:** Includes loading spinners, dynamic page titles, and toast notifications.

## 🛠️ Main Technologies Used
- **Frontend:** React.js, React Router
- **Styling:** Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** Firebase Auth
- **Security:** JWT (JSON Web Token)

## 📦 Dependencies Used
Here is a list of the specific packages and libraries used in this project:

### Client-side Dependencies
- `axios`: For making HTTP requests to the backend.
- `firebase`: For handling user authentication.
- `framer-motion`: For animation and transitions.
- `react-datepicker`: For easy date selection in forms.
- `react-hook-form`: For handling form inputs and validation.
- `react-toastify` / `sweetalert2`: For user feedback notifications.

### Server-side Dependencies
- `express`: Web framework for Node.js.
- `cors`: To allow cross-origin resource sharing.
- `dotenv`: To manage environment variables.
- `jsonwebtoken`: To sign and verify secure tokens.
- `mongodb` & `mongoose`: For database connection and object modeling.
- `cookie-parser`: To handle authentication cookies.

## 💻 How to Run Locally (Step-by-Step Guide)

Follow these instructions to set up the project on your local machine.

### Prerequisites
- **Node.js** installed.
- **MongoDB** account (or local instance).
- **Firebase** project set up.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/whereisit.git
cd whereisit
2. Backend Setup
Navigate to the server folder and install dependencies:

Bash

cd server
npm install
Create a .env file in the server directory:

env

PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
JWT_TOKEN_SECRET=your_secret_token
Start the server:

Bash

npm start
3. Frontend Setup
Open a new terminal, navigate to the client folder, and install dependencies:

Bash

cd client
npm install
Create a .env.local file in the client directory:

env

VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
Start the client:

Bash

npm run dev
