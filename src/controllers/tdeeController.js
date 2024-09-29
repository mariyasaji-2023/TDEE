const express = require('express');
const User = require('../models/userModel');

const calculateTDEE =  (weight, height, age, gender, activityLevel) => {
    let bmr;
    // Basic formula to calculate BMR (Basal Metabolic Rate)
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    const activityFactors = {
        'sedentary': 1.2,
        'lightly active': 1.375,
        'moderately active': 1.55,
        'very active': 1.725,
        'super active': 1.9
    };

    return bmr * activityFactors[activityLevel];
};

const calculateTdeeForUser = async (req, res) => {
    const { weight, height, age, gender, activityLevel } = req.body;
    const userId = req.user.id; // Assuming req.user contains the authenticated user's info

    try {
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Calculate the TDEE
        const tdee = calculateTDEE(weight, height, age, gender, activityLevel);
         console.log(user,"uuuuuuuuuuuuuuuuuuu");
         
        // Store the TDEE calculation in the user's history
        if (!user.calculations) {
            user.calculations = [];
        }
        user.calculations.push({
            tdee,
            weight,
            height,
            age,
            gender,
            activityLevel
        });
        console.log(user,"uuuuuuuuuuuuuuuuuuu");
        // Save the updated user document
        await user.save();

        res.status(200).json({
            message: 'TDEE calculated and saved successfully',
            tdee
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUserTDEEHistory = async (req, res) => {
    const userId = req.user.id;

    try {
        // Find the user by ID
        const user = await User.findById(userId).select('calculations');
        console.log(user,"/////////////");
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'TDEE history retrieved successfully',
            calculations: user.calculations
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Get user profile
const profileGet =  async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Update user profile
const profileUpdate= async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        user.name = name || user.name;
        user.email = email || user.email;

        await user.save();
        res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = {calculateTdeeForUser,profileGet,profileUpdate,getUserTDEEHistory}
