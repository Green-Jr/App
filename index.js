const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');
const noteRoutes = require('./routes/note.routes');
const connectDB = require('./config/db.config');

/* 
para conectar a la DB y crear la variable de JWT crear un archivo .env
y agregar las siguientes lienas 
PORT=3000
MONGODB_URI=mongodb+srv://junikoescobar11:rYIpQQ4SY4WEfHlx@app.rbppeip.mongodb.net/?retryWrites=true&w=majority&appName=App
JWT_SECRET=your_jwt_secret
*/
dotenv.config();

// Database connection
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



