import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "../themeConfig/themeProvider";

// import { Provider } from "react-redux";
// import { store } from "@/core/store";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-notebook",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeToggle>
            {children}
          </ThemeToggle>

          <script src="./node_modules/preline/dist/preline.js"></script>
        </body>
      </html>

    </>
  );
}
