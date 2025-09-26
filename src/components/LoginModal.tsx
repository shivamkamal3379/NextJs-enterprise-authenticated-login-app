"use client";
import { X } from "lucide-react";

export default function LoginModal({
  onClose,
  onLogin,
}: {
  onClose: () => void;
  onLogin: (e: React.FormEvent) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in transition-colors duration-300">
        <div
          className="absolute inset-0 z-0 opacity-70"
          style={{ backgroundImage: "linear-gradient(to bottom right, #333, #555)" }}
        ></div>

        <div className="relative z-10 p-8 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Welcome Back</h2>
          <p className="text-sm text-white/90 mb-6 drop-shadow">Please log in to continue.</p>

          <form onSubmit={onLogin} className="w-full">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
