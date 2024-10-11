"use client";
import { Footer } from "../components/Footer";
import LoginForm from "../components/login";
import { Menu } from "../components/Menu";
import { useAuth } from "../context/AuthProvider";

export default function Home() {
  const { currentUser, authToken, handleLogin, handleLogout } = useAuth();

  return (
    <div>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <Menu />
      <LoginForm />
      <Footer />
    </div>
  );
}
