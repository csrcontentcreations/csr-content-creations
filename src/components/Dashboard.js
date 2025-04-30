import React from "react";
import { auth } from "../firebase";

function Dashboard({ user }) {
  const handleLogout = () => auth.signOut();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Welcome to CSRContentCreations.com, {user.displayName}</h2>
      <p className="text-sm">Free trial active</p>
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Thumbnail Generator</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">SEO Title/Hashtag Generator</button>
      </div>
      <div className="mt-6">
        <button onClick={handleLogout} className="text-red-500 underline">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;