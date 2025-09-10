// app/layout.tsx
import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: "MINIMALS",
  description: "Small Frame, Big Style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Server Component여도 OK: 내부에 Client Provider를 렌더링합니다.
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
