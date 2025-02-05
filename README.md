# 📰 Newspaper FullStack Website

Welcome to the **Newspaper FullStack Website**! This platform serves as a comprehensive news aggregation website with trending articles, premium features, and a seamless user experience. Here's an overview of the project.

---

## 📌 Project Overview
The **Newspaper FullStack Website** is designed to provide a dynamic and engaging news platform where users can browse articles, subscribe to premium content, and interact with an intuitive dashboard. The website features authentication, role-based access control, and article management for both users and administrators.

---


## 🌐 Live Demo
🔗 [Live Website](https://news-paper-91c56.web.app)

---

## 🌟 Key Features

1. **📱 Responsive Design**: Fully responsive for mobile, tablet, and desktop views.
2. **🔒 Authentication**: Email/password-based authentication with error handling and social login (e.g., Google).
3. **🛡️ JWT Security**: Implemented JWT for secure access to private routes, preventing unauthorized access.
4. **🏠 Dynamic Home Page**:
   - 📰 Trending Articles Slider (based on view count).
   - 📜 Publisher List.
   - 📊 User and Premium User Statistics with `react-countup`.
   - 💳 Subscription Plans Section.
   - 🌟 Additional unique sections for enhanced user engagement.
5. **💎 Subscription System**:
   - 🔽 Dropdown for subscription periods (1 minute, 5 days, 10 days).
   - 🌟 Premium users enjoy exclusive content and features.
   - 🔄 Automatic reversion to normal user after subscription expiry.
6. **✍️ Article Management**:
   - Add articles with rich features (title, image, tags, description).
   - Admin approval required for publishing.
   - ⭐ Premium articles with exclusive design and access.
7. **📊 Dashboard (Admin Only)**:
   - Manage users and articles in tabular format.
   - Approve, decline, or make articles premium.
   - Add publishers dynamically.
   - 📈 Interactive charts using `react-google-charts`.
8. **🔄 Pagination**: Implemented for admin dashboard pages (e.g., users, articles).
9. **🔔 Modal Triggers**:
   - Homepage modal for subscriptions after 10 seconds.
   - Modal for declined articles with reasons.
10. **🚫 404 Page**: Custom not-found page for undefined routes.

---

## 🛠️ Technologies Used

### 🖼️ Frontend
- **⚛️ React.js**: Component-based library for building the UI.
- **🧭 React Router**: For navigation and route handling.
- **🔄 TanStack Query**: For efficient data fetching.
- **🎨 Tailwind CSS**: For styling.
- **🔽 React Select**: For multi-select dropdowns.
- **💡 SweetAlert2**: For enhanced notifications.

### 🖥️ Backend
- **🌐 Node.js**: Server runtime.
- **🚀 Express.js**: Backend framework.
- **🛢️ MongoDB**: Database for storing articles, users, and publishers.
- **🔐 JWT**: For secure authentication.
- **🌍 CORS**: For managing cross-origin requests.

---

## 📦 Dependencies Used
- `react`
- `react-router-dom`
- `jsonwebtoken`
- `mongoose`
- `cors`
- `express`
- `react-google-charts`
- `react-countup`
- `sweetalert2`
- `tanstack/react-query`

---

## 📋 How to Run the Project Locally

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/news-paper.git
```

### 2️⃣ Navigate to the Project Directory  
```bash
cd news-paper
```

### 3️⃣ Install Dependencies  
```bash
npm install
```

### 4️⃣ Start the Development Server  
```bash
npm run dev
```

### 5️⃣ Open in Browser  
Visit `http://localhost:5173` to see the project running.

---

## 📚 Additional Resources  
- 🔥 [React.js Documentation](https://reactjs.org/docs/getting-started.html)  
- 🌎 [Vite Documentation](https://vitejs.dev/)  
- 🚀 [Surge Hosting Guide](https://surge.sh/help/getting-started-with-surge)  

---

## 🔐 Admin Credentials

- **👤 Username**: `aktermeem220@gmail.com`
- **🔑 Password**: `12345Aa@`

