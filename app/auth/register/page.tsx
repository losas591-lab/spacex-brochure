"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: integrate with backend or NextAuth
    alert(`Registering ${email}`);
  };

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <form onSubmit={handleRegister} className="bg-gray-900 p-8 rounded-lg w-96">
        <h1 className="text-2xl mb-6 text-center">🚀 SpaceX Brokerage Register</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <button type="submit" className="w-full bg-green-600 p-2 rounded">
          Register
        </button>
      </form>
    </main>
  );
}
