import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://minimals-site.vercel.app"), // 배포 후 실제 도메인으로 교체
  title: "MINIMALS | 160~170cm 전용핏",
  description: "수선 없이 입는 완벽 비율, 미니멀즈핏.",
  openGraph: {
    title: "MINIMALS",
    description: "160~170cm 전용핏",
    images: ["/og.jpg"],
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
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
