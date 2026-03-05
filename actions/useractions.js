"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment.js";
import connectDb from "@/db/connectDb.js";
import User from "@/models/User.js";
import { FormSerializerOptions } from "./../node_modules/axios/index.d";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  // fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: to_username });
  const secret = user.razorpaysecret;

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
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

  await Payment.create({
    amount: amount / 100,
    to_user: to_username,
    oid: x.id,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async (username) => {
  await connectDb();
  let u = await User.findOne({ username: username }).lean();
  return JSON.parse(JSON.stringify(u));
};

export const fetchpayments = async (username) => {
  await connectDb();

  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .lean();

  return JSON.parse(JSON.stringify(p));
};

export const updateProfile = async (data, oldUsername) => {
  await connectDb();
  let ndata = Object.fromEntries(data);

  if (oldUsername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username }).lean();
    if (u) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: ndata.username },
    );
  } else {
    await User.updateOne({ email: ndata.email }, ndata);
  }
};
