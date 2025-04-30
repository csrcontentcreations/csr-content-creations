import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in to CSR Content Creations</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;