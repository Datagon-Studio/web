// import type { Metadata } from "next";
"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import App from "next/app";
import { ThemeToggle } from "@/themeConfig/themeProvider";
import { Provider } from "react-redux";
import { store } from "@/core/store";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E-notebook",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Provider store={store}>
            <ThemeToggle>
              {children}
            </ThemeToggle>
          </Provider>
        </body>
      </html>
    </>
  );
}
