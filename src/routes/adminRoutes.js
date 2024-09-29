// routes/adminRoutes.js
const express = require('express');
const { protect } = require('../middileware/authMiddleware'); // Middleware to verify admin
const {
    adminLogin,
    listUsers,
    enableUser,
    disableUser,
} = require('../controllers/adminController');

const router = express.Router();

// Admin login
router.post('/login', adminLogin);

// List all users
router.get('/users', protect, listUsers);

// Enable/disable user accounts
router.put('/users/:userId/enable', protect, enableUser);
router.put('/users/:userId/disable',protect, disableUser);

module.exports = router;
