import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "MINIMALS — Small Frame, Big Style",
  description: "160~170cm 남성을 위한 전용 핏, 미니멀즈핏",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${poppins.className} min-h-screen bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
