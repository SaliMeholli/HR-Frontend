"use client";

import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long, and contain at least one letter and one number.');
    } else {
      setPasswordError('');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError('Password and Confirm Password do not match.');
    } else {
      setPasswordError('');
    }

    // If no errors, proceed with form submission
    if (!emailError && !passwordError) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-200`}
              placeholder="Enter your email"
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${passwordError ? 'border-red-500' : 'border-gray-300'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-200`}
              placeholder="Enter your password"
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition duration-200"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
