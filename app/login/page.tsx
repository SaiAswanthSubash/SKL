"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleLogin() {
    // TEMP: no real auth yet
    router.push("/dashboard");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login / Signup</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Continue</button>
    </div>
  );
}
