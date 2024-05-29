import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zerihun Tegenu website",
  description: "Zerihun Tegenu personal website, that incorporate all of my activity and credential, milestones and a developer in ethiopia with great reputation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
