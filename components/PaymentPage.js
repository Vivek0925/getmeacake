"use client";
import Script from "next/script";
import React from "react";
import { initiate } from "@/actions/useractions";
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments } from "@/actions/useractions";
import { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const { data: session ,status } = useSession();
  const router = useRouter();

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  // redirect if logged out
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbPayments = await fetchpayments(username);
    setPayments(dbPayments);
    console.log(dbPayments);
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderID = a.id;

    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
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
          src={currentUser?.coverpic}
          alt="img loading"
        />

        <div className=" absolute bottom-[40%] right-[46%] ">
          <img
            width={120}
            height={120}
            className="rounded-full"
            src={currentUser.profilepic}
            alt=""
          />
        </div>
        <div className="info flex justify-center items-center my-13 flex-col">
          <div className="font-bold">@{username}</div>

          <div className="text-slate-500">
            help {username} to get funded by buying them a cake!
          </div>

          <div className="text-slate-500">
            {payments.length} payments . raised $
            {payments.reduce((total, p) => total + p.amount, 0)}
          </div>
        </div>

        <div className="payment flex p-4 gap-3 w-full">
          <div className="supporters w-1/2 bg-amber-200/20 rounded-lg p-8">
            <h2 className="text-lg font-bold my-3">Supporters</h2>
            <ul className="mx-5">
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.map((p, i) => {
                return (
                  <li key={i} className="flex gap-3 my-3 items-center">
                    <img width={37} src="avatar.gif" alt="" />
                    <span>
                      {p.name} donated{" "}
                      <span className="font-bold">{p.amount}$ </span> with a
                      message {p.message}
                    </span>
                  </li>
                );
              })}
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
              <button
                onClick={() => {
                  pay(Number.parseInt(paymentform.amount) * 100);
                }}
                className=" rounded-lg bg-blue-300 p-3 disabled:bg-slate-500 disabled:from-purple-800"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
              >
                Pay
              </button>
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
};;

export default PaymentPage;
