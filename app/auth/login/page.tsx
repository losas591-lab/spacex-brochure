"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend or NextAuth
    alert(`Logging in with ${email}`);
  };

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-lg w-96">
        <h1 className="text-2xl mb-6 text-center">🚀 SpaceX Brokerage Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 p-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
