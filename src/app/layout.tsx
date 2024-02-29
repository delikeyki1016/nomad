import { Inter } from "next/font/google";
import "./styles/globals.css";
import Link from "next/link";
import Navigation from "./components/navigation";
import { Metadata } from "next";


// const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: {
    template: "%s | Movie info List",
    default: "Movie info List",
  },
  description: "Movie info List by nomad NextJS lecture",
};

export default function RootLayout({ children }) {
  return (
      <html lang="ko">
        <body>
          <Navigation />
          {children} 
          {/* children : page.js 들어가는 부분 */}
        </body>
      </html>
  );
}
