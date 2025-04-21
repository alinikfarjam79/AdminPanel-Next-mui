'use client'
import { UserProvider } from "@/context/userContext";



export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
