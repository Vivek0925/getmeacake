"use client";
import Script from "next/script";
import React from "react";
import { initiate } from "@/actions/useractions";
import { useState } from "react";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderID = a.id;

    console.log("RAZOR KEY:", process.env.NEXT_PUBLIC_KEY_ID);

    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get Me a Cake", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderID, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: "Test User",
        email: "test@test.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full text-black">
        <img
          className="w-full h-[380]"
          src="https://i.pinimg.com/originals/d0/bf/c7/d0bfc76da6de38f91bcec23efe85082a.gif"
          alt="img loading"
        />

        <div className=" absolute bottom-[40%] right-[46%] ">
          <img
            width={120}
            height={120}
            className="rounded-full"
            src="pfp.jpg"
            alt=""
          />
        </div>
        <div className="info flex justify-center items-center my-13 flex-col">
          <div className="font-bold">@{username}</div>

          <div className="text-slate-500">
            Creating a podcast with ben avery, devan costa and jace avery
          </div>

          <div className="text-slate-500">
            12,348 members . 459 posts . $43,690/month
          </div>
        </div>

        <div className="payment flex p-4 gap-3 w-full">
          <div className="supporters w-1/2 bg-amber-200/20 rounded-lg p-8">
            <h2 className="text-lg font-bold my-3">Supporters</h2>
            <ul className="mx-5">
              <li className="flex gap-3 my-3 items-center">
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className="font-bold">50$</span> with a
                  message ""
                </span>
              </li>
              <li className="flex gap-3 my-3 items-center">
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className="font-bold">50$</span> with a
                  message ""
                </span>
              </li>
              <li className="flex gap-3 my-3 items-center">
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className="font-bold">50$</span> with a
                  message ""
                </span>
              </li>
              <li className="flex gap-3 my-3 items-center">
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className="font-bold">50$</span> with a
                  message ""
                </span>
              </li>
            </ul>
          </div>

          <div className="makepayment w-1/2 bg-blue-300/20 rounded-lg p-8">
            <h2 className="text-lg font-bold my-3">
              Buy a cake for this creator
            </h2>
            <div className="flex flex-col gap-2">
              {/* input for name and message optional */}
              <input
                name="name" // ✅ ADD
                onChange={handleChange}
                value={paymentform.name}
                type="text"
                placeholder="Enter your name"
                className="p-3 w-full rounded-lg bg-slate-300"
              />

              <input
                name="message" // ✅ ADD
                onChange={handleChange}
                value={paymentform.message}
                type="text"
                placeholder="Enter a message"
                className="p-3 w-full rounded-lg bg-slate-300"
              />

              <input
                name="amount" // ✅ ADD
                onChange={handleChange}
                value={paymentform.amount}
                type="number"
                placeholder="Enter Amount in USD"
                className="p-3 w-full rounded-lg bg-slate-300"
              />
              <button className=" rounded-lg bg-blue-300 p-3 ">Pay</button>
            </div>
            {/* or choose an amount */}
            <div className="flex gap-3 mt-3">
              <button
                className=" rounded-lg bg-blue-300 p-3 hover:cursor-cell "
                onClick={() => pay(1000)}
              >
                10inr
              </button>
              <button
                className=" rounded-lg bg-blue-300 p-3 hover:cursor-cell "
                onClick={() => pay(2000)}
              >
                20inr
              </button>
              <button
                className=" rounded-lg bg-blue-300 p-3 hover:cursor-cell "
                onClick={() => pay(3000)}
              >
                30inr   
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
