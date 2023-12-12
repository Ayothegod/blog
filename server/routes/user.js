const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");


// UPDATE 
router.put("/:id", async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
})