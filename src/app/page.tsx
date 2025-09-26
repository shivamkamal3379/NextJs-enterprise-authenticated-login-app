"use client";
import { useState } from "react";
// Assuming these components handle their own theming based on props or context
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

  // --- Theme Class Improvements ---
  // 1. Used pure white (bg-white) for a cleaner light theme background.
  // 2. Used a deeper gray (bg-gray-950) for a richer dark theme background.
  const themeClasses = isDarkTheme 
    ? "bg-gray-950 text-gray-100" 
    : "bg-white text-gray-900";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${themeClasses}`}
    >
      {/* Pass isDarkTheme down to the modal for consistent styling */}
      {showLoginModal && 
        <LoginModal 
          onClose={() => setShowLoginModal(false)} 
          onLogin={handleLogin} 
          // isDarkTheme={isDarkTheme} // Prop added
        />
      }

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
          {/* Pass isDarkTheme down to PageContent
          <PageContent currentPage={currentPage} isDarkTheme={isDarkTheme} />  */}
        </div>
      </main>

      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}