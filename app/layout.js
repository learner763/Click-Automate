import "./globals.css";

export const metadata = {
  title: "ClickAutomate — Digital Solutions for Founders",
  description: "Providing digital solutions to business owners, content creators and founders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}