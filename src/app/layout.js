'use client'
import { UserProvider } from "@/context/userContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { CustomThemeProvider } from "@/context/themeContext";
import { useTheme } from "@emotion/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={`max-w-screen-2xl mx-auto  ${geistSans.variable} ${geistMono.variable} antialiased`} >
                <ToastContainer position="top-right" autoClose={3000} />
                <CustomThemeProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </CustomThemeProvider>
            </body>
        </html>
    )
}
