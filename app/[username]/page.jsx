import Payment from '@/models/Payment';
import React from 'react'
import PaymentPage from '@/components/PaymentPage';
import connectDb from '@/db/connectDb';
import User from '@/models/User';
import { notFound } from 'next/navigation';

export async function Username({ params }) {
  const { username } = await params;

  const checkuser = async () => {
    await connectDb();
    let u = await User.findOne({ username: username });
    if (!u) {
      return notFound() // User not found
    }
  };

  await checkuser();

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}

export default Username

// dynamic metadata
export async function generateMetadata({ params }) {
  const { username } = await params;

  return {
    title: `${username} - Get Me A Cake`,
    description: `Support ${username} by sending them a cake!`,
  };
} 
