// src/components/UserProfileBar.js
import { useState } from "react";

export default function UserProfileBar() {
  const [user] = useState({
    name: "Akito Chaurasia",
    credits: 120,
    picture: "https://via.placeholder.com/40",
  });

  return (
    <header className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">📦 Resource Exchange</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium">Credits: {user.credits}</span>
        <span>{user.name}</span>
        <img src={user.picture} alt="profile" className="w-10 h-10 rounded-full border" />
      </div>
    </header>
  );
}
