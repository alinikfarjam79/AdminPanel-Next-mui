"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useCustomTheme } from "@/context/themeContext";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function TopBar({ onMenuClick, toggleMini, sidebarOpen }) {
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMobile && (
          <IconButton
            onClick={onMenuClick}
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <IconButton onClick={toggleTheme}>
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
