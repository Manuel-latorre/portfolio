import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";



const questrial = Questrial({
  subsets: ["latin"],
  weight:["400"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
