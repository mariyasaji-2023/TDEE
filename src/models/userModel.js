const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isDisabled: { type: Boolean, default: false },
    resetPasswordToken: { type: String }, // Reset token
    resetPasswordExpires: { type: Date },
    calculations: [
        {
            tdee: Number,
            weight: Number,
            height: Number,
            age: Number,
            gender: String,
            activityLevel: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true });

// Hash password before saving the user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


module.exports = mongoose.model('User', userSchema);
