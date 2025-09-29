export default function Footer({ isDarkTheme }: { isDarkTheme: boolean }) {
  return (
    <footer className={`py-8 ${isDarkTheme ? "bg-black" : "bg-gray-800"}`}>
      <div className="container mx-auto text-center text-sm text-gray-400">
        © 2025 Sales Pro. All rights reserved.
      </div>
    </footer>
  );
}
