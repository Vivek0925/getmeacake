"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment.js";
import connectDb from "@/db/connectDb.js";
import User from "@/models/User.js";
import { FormSerializerOptions } from "./../node_modules/axios/index.d";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  instance.orders.create({
    amount: 50000,
    currency: "<currency>",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR", // amount in the smallest currency unit
  };

  let x = await instance.orders.create(options);
  return x;

  await Payment.create({
    amount: amount,
    to_username: to_username,
    oid: x.id,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};
