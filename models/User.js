import mongoose, { model } from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
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

export default mongoose.models.user || model("user", userSchema);


