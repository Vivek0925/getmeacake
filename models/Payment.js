import mongoose from "mongoose";
const { Schema, model } = mongoose;
const paymentSchema = new Schema({
    name: {
        type: String,
    },
    to_user: {
        type: String,
        required: true,
    },
    oid: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.payment || model("payment", paymentSchema);