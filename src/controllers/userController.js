const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Register a new user
const registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        user = new User({ email, password, name });
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the account is disabled
        if (user.isDisabled) { // Check the isDisabled field
            return res.status(403).json({ message: 'Your account has been disabled. Please contact admin.' });
        }

        console.log("Stored hashed password:", user.password);
        console.log("Password entered by user:", password); 

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match status:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



const changeUserPassword = async (req, res) => {
    const { newPassword } = req.body; // Get new password from request body
    const userId = req.user.id; // Get user ID from the request (from the token)

    try {
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("Old hashed password:", user.password);

        // Hash the new password before saving
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        console.log("New hashed password:", hashedPassword);

        user.password = hashedPassword;
        console.log('User after password change:', user);
        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports ={registerUser,loginUser,changeUserPassword}