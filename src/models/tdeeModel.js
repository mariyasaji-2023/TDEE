const mongoose = require('mongoose');

const tdeeCalculationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    activityLevel: { type: String, required: true }, // e.g., sedentary, lightly active, etc.
    tdee: { type: Number, required: true }
}, { timestamps: true });

const TDEECalculation = mongoose.model('TDEECalculation', tdeeCalculationSchema);
module.exports = TDEECalculation;
