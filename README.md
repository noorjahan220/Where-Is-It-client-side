
# **WhereIsIt - Lost and Found Items Website** 🧳

Welcome to **WhereIsIt**, a platform designed to help people find and recover their lost belongings. Whether you've misplaced something valuable or found an item, this website connects people to ensure lost items are reunited with their rightful owners.

## **Purpose** 🎯

**WhereIsIt** is a **Lost and Found website** that allows users to:
- Report lost items
- Browse found items
- Interact with others to recover belongings

This project provides hands-on experience in building a full-stack application, integrating user authentication, file uploads, and database management, with a focus on clean design and responsive layouts.

## **Live Demo** 🌐

[**WhereIsIt Live Website**](https://lost-found-32de4.web.app/myItems)

## **Key Features** 💡

- **Responsive Design** 📱: Fully mobile, tablet, and desktop-friendly.
- **User Authentication** 🔑: Login and Register with email/password or third-party login (Google/GitHub).
- **Lost & Found Items** 📋: Users can report lost items, browse found items, and interact to recover them.
- **Private Routes** 🚪: Protected pages for submitting, managing, and updating items.
- **CRUD Operations** 🔄: Create, Read, Update, and Delete posts for lost and found items.
- **Search Functionality** 🔍: Filter posts by title or location on the Lost & Found Items page.
- **Toast Notifications** 🎉: Success and error messages after every action.
- **404 Page** 📄: A custom error page for unknown routes.
- **Loading Spinner** ⏳: A spinner shows while fetching data.

## **Technologies Used** 🛠️

- **Frontend**:
  - React.js ⚛️
  - React Router 🚦
  - Tailwind CSS 🌈
  - Framer Motion 🎬
  - React DatePicker 📅
  - Firebase Authentication 🔐

- **Backend**:
  - Node.js 💻
  - Express.js 🖥️
  - MongoDB 🗃️
  - Multer for File Uploads 📸
  - Firebase Admin SDK 🔑

## **Struggles & Lessons Learned** 🤯

### 1. **Handling Authentication & Authorization** 🔐
One of the most challenging parts of this project was implementing the authentication system. I had to learn how to securely handle Firebase authentication and protect private routes for users. Ensuring the user's data remained safe while they interacted with the platform took a lot of research, especially when dealing with session persistence and login states.

### 2. **Responsive Design** 📱
Designing the website to look great across all devices (mobile, tablet, and desktop) was a constant challenge. I spent a lot of time adjusting the grid layouts and components to ensure they would adapt seamlessly to any screen size. Thankfully, Tailwind CSS made this easier, but getting the spacing, padding, and positioning just right was a meticulous process.

### 3. **File Uploads** 📸
Handling image uploads was a tricky task. I initially struggled with how to store images properly. After some trials and errors, I finally used **Multer** for file uploads and securely stored the files in cloud storage, integrating them with MongoDB for retrieval.

### 4. **React Router and Protected Routes** 🚦
Setting up protected routes for pages like **Add Lost & Found Items** and **Manage My Items** took some time. I had to ensure that only logged-in users could access those routes, and I faced challenges with redirecting users back to the login page if they weren't authenticated. This helped me improve my skills with **React Router**.

### 5. **Toast Notifications & Sweet Alerts** 🎉
Implementing Toast notifications for successful actions (like item submission) was a lot of fun. I used **SweetAlert** for beautiful pop-up notifications to confirm user actions and error handling. It made the user experience smoother and more interactive.

---

## **Pages and Features Breakdown** 📋

### 1. **Home Page** 🏠
- **Banner/Slider**: Dynamic banner showcasing meaningful content.
- **Latest Find & Lost Items**: Displays 6 most recent posts.
- **Extra Sections**: Two meaningful sections for added context.
- **Framer Motion**: Animated transitions to make the homepage lively.

### 2. **Authentication** 🔑
- **Login & Register Pages**: Users can register and log in using email/password or Google/GitHub.
- **Password Validation**: Strong password rules enforced (at least 6 characters, one uppercase, and one lowercase letter).
- **Toast/SweetAlert**: Notifications for successful or failed login/registration.

### 3. **Lost & Found Item Pages** 📦
- **Add Lost & Found Item**: A form for users to submit details of lost or found items.
- **Post Details Page**: Shows full item information and allows users to mark items as found/recovered.
- **Manage My Items**: Users can view and manage their posted items in table format, with options to update or delete them.
- **All Recovered Items**: Displays recovered items in a tabular format.

### 4. **Dynamic Page Titles** 🌟
The title of the website changes dynamically based on the route (e.g., "Home - WhereIsIt" or "Lost & Found Items - WhereIsIt").

### 5. **404 Page** 🚫
A custom 404 error page for users who visit a non-existent route.

---

## **Challenges & Solutions** ⚡

- **Handling CORS Issues**: Ensuring the server worked seamlessly with the frontend without throwing CORS errors. Used **CORS middleware** to fix it.
- **Handling Multiple Post Types**: Items can be marked as "Lost" or "Found," and this required conditional rendering based on the post type.
- **Securing User Data**: All sensitive data such as Firebase and MongoDB credentials were secured using environment variables.

---

## **Conclusion** 🌈

Building **WhereIsIt** was a rewarding experience. It pushed me to improve my skills with React, Node.js, Firebase, and MongoDB. This project taught me a lot about authentication, state management, form handling, and making sure an app is scalable and responsive. I’m proud of the result and excited to continue improving it.
















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
