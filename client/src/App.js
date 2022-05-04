import React from "react";

// import { Route, Routes, useNavigate } from "react-router-dom";
// import { useState, useEffect, createContext } from "react";

export function App() {
  const handleAuth = async () => {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: "data to be here" }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleAuth}>Sign in with Google</button>
    </div>
  );
}
