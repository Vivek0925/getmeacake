import mongoose, { model } from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },  
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    profilepic: {
        type: String,
    },
    coverpic: {
        type: String,
    },
 
});
const user = model("user", userSchema);
export default mongoose.models.user || user;


