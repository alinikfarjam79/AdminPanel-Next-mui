"use client";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Divider,
  Toolbar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;
const miniDrawerWidth = 60;

const navItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    href: "/dashboard",
    fakeHref: "/dashboard",
  },
  {
    text: "Teachers",
    icon: <SchoolIcon />,
    href: "/dashboard/teachers",
    fakeHref: "/teachers",
  },
  {
    text: "Analytics",
    icon: <AnalyticsIcon />,
    href: "/dashboard/analytics",
    fakeHref: "/analytics",
  },
  {
    text: "Profile",
    icon: <AccountCircleIcon />,
    href: "/dashboard/profile",
    fakeHref: "/profile",
  },
];

export default function SideBar({ open, onClose, isMini, toggleMini }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const drawerContent = (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          gap: "30px",
          overflowX: "hidden",
          width: "100%",
        }}
      >
        {!isMobile && !isMini && (
          <Box component="span" fontWeight="bold">
            Menu
          </Box>
        )}
        {isMobile && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
        {!isMobile && (
          <IconButton
            onClick={toggleMini}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {isMini ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        )}
      </Toolbar>
      <Divider sx={{ overflowX: "hidden" }} />
      <List>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link href={item.href} passHref>
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: isMini ? "center" : "initial",
                    px: 2.5,
                    backgroundColor: isActive
                      ? theme.palette.action.selected
                      : "transparent",
                    "&.Mui-selected": {
                      backgroundColor: isActive
                        ? theme.palette.action.selected
                        : "transparent",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isMini ? "auto" : 2,
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!isMini && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      {!isMini && (
        <Box className="flex items-center justify-center mt-96">
          <Typography>
            developed by{" "}
            <a
              href="https://github.com/alinikfarjam79/AdminPanel-Next-mui"
              target="_blank"
              className="text-blue-700"
            >
              Alinikfarjam
            </a>
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: isMini ? miniDrawerWidth : drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isMini ? miniDrawerWidth : drawerWidth,
          boxSizing: "border-box",
          transition: "all 0.3s ease",
        },
        overflowX: "hidden",
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
