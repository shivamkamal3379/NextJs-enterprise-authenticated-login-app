"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import PageContent from "@/components/PageContent";
export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginModal(true);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}

      <Navbar
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        onLogin={() => setShowLoginModal(true)}
        onLogout={handleLogout}
        handleNavigation={handleNavigation}
      />

      <main className="container mx-auto px-4 py-12">
        <div
          className={`rounded-3xl shadow-xl p-8 sm:p-12 md:p-16 transition-colors duration-300 ${
            isDarkTheme ? "bg-gray-800" : "bg-white"
          }`}
        >
          <PageContent currentPage={currentPage} />
        </div>
      </main>

      <Footer isDarkTheme={isDarkTheme} />  
    </div>
  );
}
