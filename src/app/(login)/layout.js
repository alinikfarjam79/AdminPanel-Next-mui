'use client'
import { UserProvider } from "@/context/userContext";
import '../globals.css'


export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}
