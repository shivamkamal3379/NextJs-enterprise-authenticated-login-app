import "./globals.css";

export const metadata = {
  title: "Sales Pro",
  description: "Enterprise Management App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
