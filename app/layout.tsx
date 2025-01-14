import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Questrial } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";



const questrial = Questrial({
  subsets: ["latin"],
  weight:["400"]
});
export const metadata: Metadata = {
  title: "Manuel Latorre",
  description: "Frontend Developer",
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
        <LanguageProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
