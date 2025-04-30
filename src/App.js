import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? <Dashboard user={user} /> : <Login />}
    </div>
  );
}

export default App;