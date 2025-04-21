"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMini, setIsMini] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleMini = () => {
    setIsMini((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(true);
    }
  });

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {sidebarOpen && (
        <SideBar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMini={isMini}
          toggleMini={toggleMini}
        />
      )}
      <Box sx={{ flexGrow: 1, width: "100%", minHeight: "100vh" }}>
        <TopBar onMenuClick={handleMenuToggle} />
        <Box sx={{ width: "100%", height: "100vh" }}>{children}</Box>
      </Box>
    </Box>
  );
}
