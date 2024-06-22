# Zoho Books Sales Order Clone

This project is a team effort to clone the sales order manipulation operations of Zoho Books. It's a full-stack application using React for the frontend and Node.js with Express for the backend.

## Project Structure
project-root/
│
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── server/                 # Backend Node.js/Express application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md               # This file

## Features

- User authentication
- Sales order creation, reading, updating, and deletion
- Sales order status tracking
- (Add more features as implemented)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:
git clone https://github.com/your-repo/zoho-books-clone.git
cd zoho-books-clone

2. Install backend dependencies:
cd server
npm install

3. Install frontend dependencies:
cd ../client
npm install

## Required Packages

### Backend (server)
- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv

Install these packages using:
npm install express mongoose bcryptjs jsonwebtoken cors dotenv

### Frontend (client)
- react
- react-dom
- react-router-dom
- axios
- @reduxjs/toolkit (if using Redux)

These packages are typically included when you create a React app using create-react-app. If you need to install them manually:
npm install react react-dom react-router-dom axios @reduxjs/toolkit

## Running the Application

1. Start the backend server:
cd server
npm start
The server will run on `http://localhost:5000` by default.

2. In a new terminal, start the frontend development server:
cd client
npm start
The React app will run on `http://localhost:3000` by default.

## Environment Variables

Create a `.env` file in the server directory with the following variables:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zoho_books_clone
JWT_SECRET=your_jwt_secret_here

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.