const express = require('express')
const mongoose = require ('mongoose')
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes')
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);


// bcrypt.hash('abcdefg', 10, (err, hash) => {
//     if (err) throw err;
//     console.log('Hashed Password:', hash);
// });
// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));