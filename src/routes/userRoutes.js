const express = require('express');
const router = express.Router();

const{registerUser,loginUser,changeUserPassword} =require('../controllers/userController')
const {protect} = require('../middileware/authMiddleware')
const {calculateTdeeForUser,profileGet,profileUpdate,getUserTDEEHistory} = require('../controllers/tdeeController')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/dashboard',protect, (req, res) => {
    res.json({ message: `Welcome to your dashboard` });
});
router.put('/change-password', protect, changeUserPassword);
router.post('/tdee',protect,calculateTdeeForUser)
router.get('/tdee/history', protect, getUserTDEEHistory);
router.get('/users/profile',protect,profileGet)
router.put('/users/profile',protect,profileUpdate)
module.exports = router;
