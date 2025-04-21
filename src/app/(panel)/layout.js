'use client'
import DashboardLayout from "@/components/DashboardLayout";
import { Typography, useTheme } from "@mui/material";



export default function RootLayout({ children }) {
  const theme = useTheme();

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        <div className="w-full h-full" style={{ backgroundColor: `${theme.palette.background.default}` }}>
          {children}
        </div>
      </Typography>
    </DashboardLayout>
  )
}
