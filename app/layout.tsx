   import type { Metadata } from "next";
import { Sora} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Sora ({
  weight:['100','200','300','400','500','600','700','800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "JEAN DESIRE Portfolio",
  description: "JEAN DESIRE KATIHABWA  Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      > 
      <ResponsiveNav  />
        {children}
        
      </body>
    </html>
  );
}
