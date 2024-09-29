const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel'); // Assuming you have an Admin model
const User = require('../models/userModel'); // Assuming you have a User model


// Admin Login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the admin by email
        const admin = await Admin.findOne({ email });
        //    console.log(admin,'///////////////');
           
        // If admin doesn't exist or password is incorrect, return an error
        if (!admin) {
            return res.status(401).json({ message: 'Invalid admin credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        console.log(isMatch,"/////////");
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid admin credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ message: 'Admin login successful', token });
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in', error });
    }
};

// List all users
const listUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};


// Enable a user account
const enableUser = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user by ID and update their status to not disabled
        const user = await User.findByIdAndUpdate(userId, { isDisabled: false }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User account enabled successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Disable a user account
const disableUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.isDisabled = true; // Assuming there's a field called isDisabled
        await user.save();

        res.json({ message: 'User account disabled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error disabling user', error });
    }
};


module.exports={adminLogin,listUsers,disableUser,enableUser}