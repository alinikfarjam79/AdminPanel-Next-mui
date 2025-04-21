"use client";
import useAuth from "@/hooks/Auth";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { green, red, orange } from "@mui/material/colors";

function page() {
  const theme = useTheme();
  useAuth();
  return (
    <Box
      p={3}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3}>
        {/* Profile Card */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 4, height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={3}
              >
                <Avatar
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h6">Sami Rahman</Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 - 856-569-909-1236
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Samirahman002@gmail.com
                </Typography>
                <Typography variant="caption" color="text.secondary" mt={2}>
                  Last login: 07 Aug 2018 14:54
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Windows 10 Pro, New York (US)
                </Typography>
                <Button sx={{ mt: 2, color: orange[500] }}>
                  SMS alerts activation
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                  }}
                >
                  Save
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid container size={{ xs: 12, md: 6 }}>
          {/* xPay Accounts */}
          <Grid item size={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">My xPay accounts</Typography>
                  <Button variant="outlined" size="small">
                    Edit
                  </Button>
                </Box>
                <Box mt={2}>
                  <Typography variant="body2">Active account</Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    8040 5080 8808 4525
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: red[400], mt: 1 }}
                  >
                    Block Account
                  </Button>
                </Box>
                <Box mt={2}>
                  <Typography variant="body2">Blocked account</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    7142 5888 2124 2124
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: green[400], mt: 1 }}
                  >
                    Unblock account
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* My Bills */}
          <Grid item size={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">My bills</Typography>
                  <Button size="small">Filter by</Button>
                </Box>
                <Stack spacing={2} mt={2}>
                  {[
                    {
                      label: "Phone bill",
                      status: "Bill paid",
                      color: green[500],
                    },
                    {
                      label: "Internet bill",
                      status: "Not paid",
                      color: red[500],
                    },
                    {
                      label: "House rent",
                      status: "Not paid",
                      color: red[500],
                    },
                    {
                      label: "Income tax",
                      status: "Bill paid",
                      color: green[500],
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>{item.label}</Typography>
                      <Chip
                        label={item.status}
                        sx={{ backgroundColor: item.color, color: "#fff" }}
                      />
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default page;
