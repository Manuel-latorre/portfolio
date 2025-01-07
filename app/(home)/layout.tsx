import Navbar from "@/components/Navbar/Navbar";

export default function LayoutHome({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
          {children}
        </body>
      </html>
    );
  }