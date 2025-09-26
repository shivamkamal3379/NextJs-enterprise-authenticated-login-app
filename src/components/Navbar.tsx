"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, LogIn, LogOut, Sun, Moon } from "lucide-react";
import { navItems } from "@/data/navItems";

export default function Navbar({
  isDarkTheme,
  toggleTheme,
  isLoggedIn,
  onLogin,
  onLogout,
  handleNavigation,
}: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <nav
      className={`sticky top-0 z-40 shadow-sm transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900/90" : "bg-white/90"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          <a href="#" onClick={() => handleNavigation("dashboard")}>
            Sales Pro
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.children ? (
                <>
                  <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors">
                    {item.name} <ChevronDown size={18} className="ml-1 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-max bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                    <ul className="py-2">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a
                            href="#"
                            onClick={() => handleNavigation(child.page)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a
                  href="#"
                  onClick={() => handleNavigation(item.page)}
                  className="hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <button onClick={toggleTheme}>{isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}</button>
          {isLoggedIn ? (
            <button onClick={onLogout} className="text-red-500 flex items-center">
              <LogOut size={20} className="mr-1" /> Logout
            </button>
          ) : (
            <button onClick={onLogin} className="text-green-500 flex items-center">
              <LogIn size={20} className="mr-1" /> Login
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleTheme}>{isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}</button>
          {isLoggedIn ? (
            <button onClick={onLogout}>
              <LogOut size={24} />
            </button>
          ) : (
            <button onClick={onLogin}>
              <LogIn size={24} />
            </button>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md py-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-6 py-2 text-left"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <ul className="bg-gray-50 dark:bg-gray-900 py-2">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a
                            href="#"
                            onClick={() => handleNavigation(child.page)}
                            className="block px-10 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href="#" onClick={() => handleNavigation(item.page)} className="block px-6 py-2">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
