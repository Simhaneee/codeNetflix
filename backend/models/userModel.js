import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    phone_number: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, default: false, required: true },
    gender: { type: String, required: true },
    is_admin: { type: Boolean, required: true,default:false },


}, {
    timestamps: true,
});
const User = mongoose.model('User', userSchema);
export default User;