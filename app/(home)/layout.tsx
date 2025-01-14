import MobileNav from "@/components/Navbar/MobileNav";
import Navbar from "@/components/Navbar/Navbar";import { Questrial } from "next/font/google";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${questrial.className}  antialiased`}>
      <MobileNav/>
      <Navbar />
      {children}
    </div>
  );
}
