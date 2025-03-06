import {Roboto, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="nav">
          <Link href="/ships">Ships</Link>
          <Link href="/add-ship">add Ship</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
