import Payment from '@/models/Payment';
import React from 'react'
import PaymentPage from '@/components/PaymentPage';

export async function Username({ params }) {
  const { username } = await params;  

  return (
    <>
      <PaymentPage username={username}/>
    </>
  );
}

export default Username
