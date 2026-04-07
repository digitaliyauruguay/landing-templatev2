import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Clínica Odontológica en Montevideo",
  description: "Atención dental profesional con tecnología moderna.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}