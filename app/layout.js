import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zerihun Tegenu",
  description:
    "Zerihun Tegenu personal portifolio, that incorporate all of my activity, credentials, milestones and a senior frontend developer in ethiopia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
