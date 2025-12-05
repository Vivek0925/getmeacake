import React from 'react'

export async function Username({ params }) {
  const { username } = await params;   // 👈 this is the important part

  return (
    <div className="text-black pt-24 px-4">
      {username}
    </div>
  );
}

export default Username
