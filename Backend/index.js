import dotenv from "dotenv";
dotenv.config();

console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("PORT:", process.env.PORT);

// Database Connection
import dbConnection from "./database/dbConnection.js";
dbConnection();

// Start Server
import express from "express";
import userRoutes from "./router/userRoutes.js";  // Import user routes

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Define a root route
app.get("/", (req, res) => {
    res.send("Welcome to the AMPS School Management System Backend!");
});

// Use userRoutes for any routes that start with /users
app.use("/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

