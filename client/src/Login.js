import React from "react";

export default function Login() {
  const handleAuth = async () => {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
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
