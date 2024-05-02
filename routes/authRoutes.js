/**
 * Routes för auth
 */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();

// ansluta till mongodb
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("connected to mongodb");
}).catch((error) => {
    console.error("Error connecting to database");
});

// användare modell
const user = require("../models/user")

// Lägg till ny användare
router.post("/register", async (req, res) => {
    try {
        const {username, password} = req.body;


        // VALIDERA INPUT
        if (!username || !password) {
            return res.status(400).json({error: "Invalid input, send username and password"});
        }

        // Korrekt, spara användare
        res.status(201).json({message: "User created"});
    } catch (error){
        res.status(500).json({error: "server error"});
    }
});

// Logga in användare
router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;


        // VALIDERA INPUT
        if (!username || !password) {
            return res.status(400).json({error: "Invalid input, send username and password"});
        }
        
        // kolla creadentials
        if (username === "Melvin" && password === "Bubben") {
            res.status(200).json({message: "Login succesful"});
        }
        else {
            res.status(401).json({error: "Invalid username or password"});
        }
    }
    catch (error) {
        res.status(500).json({error: "server error"});
    }
});

module.exports = router;