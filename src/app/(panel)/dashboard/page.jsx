"use client";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Grid, Paper, Typography, styled, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import * as React from "react";
import SimpleBarChart from "@/components/BarChart";
import Card from "@/components/Card";
import { useEffect } from "react";
import { useUser } from "@/context/userContext";
import useAuth from "@/hooks/Auth";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#cecefe",
  ...theme.typography.body2,
  padding: "12px",
  textAlign: "center",
  borderRadius: "16px",
  color: (theme.vars ?? theme).palette.text.primary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fae27c",
  ...theme.typography.body2,
  padding: "12px",
  textAlign: "center",
  borderRadius: "16px",
  color: (theme.vars ?? theme).palette.text.primary,
}));

const HeadItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "1rem",
  height: "80%",
  overflow: "hidden",
  boxShadow: "5px 5px 10px 0.1px #a0a0a08c",
}));

const data = [
  { value: 15, label: "Boys" },
  { value: 10, label: "Girls" },
];

const size = {
  width: 200,
  height: 200,
};
function page(props) {
  const theme = useTheme();
  // const router = useRouter();
  // const { user } = useUser();
  // useEffect(() => {
  //   if (user == null) {
  //     router.push("/");
  //   }
  // }, []);
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
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <Box marginBottom={4}>
          <HeadItem
            sx={{
              boxShadow: "2px_2px_10px_10px_rgba(black,1)",
              borderRadius: "12px",
            }}
          >
            <Card />
          </HeadItem>
        </Box>

        <Grid container spacing={2}>
          <Grid size={3} spacing={2}>
            <Item>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "min-content",
                    backgroundColor: "white",
                    fontSize: "12px",
                    color: "blue",
                    paddingX: "5px",
                    paddingY: "3px",
                    borderRadius: "12px",
                  }}
                >
                  2025/02
                </Box>
                <Box sx={{ fontSize: "16px" }}>...</Box>
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  width: "min-content",
                  marginTop: "13px",
                  color: "black",
                }}
              >
                1.299
              </Box>
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  Student
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={3}>
            <Item2>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "min-content",
                    backgroundColor: "white",
                    fontSize: "12px",
                    color: "blue",
                    paddingX: "5px",
                    paddingY: "3px",
                    borderRadius: "12px",
                  }}
                >
                  2025/02
                </Box>
                <Box sx={{ fontSize: "16px" }}>...</Box>
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  width: "min-content",
                  marginTop: "13px",
                  color: "black",
                }}
              >
                124
              </Box>
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  Teacher
                </Typography>
              </Box>
            </Item2>
          </Grid>
          <Grid size={3}>
            <Item>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "min-content",
                    backgroundColor: "white",
                    fontSize: "12px",
                    color: "blue",
                    paddingX: "5px",
                    paddingY: "3px",
                    borderRadius: "12px",
                  }}
                >
                  2025/02
                </Box>
                <Box sx={{ fontSize: "16px" }}>...</Box>
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  width: "min-content",
                  marginTop: "13px",
                  color: "black",
                }}
              >
                960
              </Box>
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  Parents
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={3}>
            <Item2>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "min-content",
                    backgroundColor: "white",
                    fontSize: "12px",
                    color: "blue",
                    paddingX: "5px",
                    paddingY: "3px",
                    borderRadius: "12px",
                  }}
                >
                  2025/02
                </Box>
                <Box sx={{ fontSize: "16px" }}>...</Box>
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  width: "min-content",
                  marginTop: "13px",
                  color: "black",
                }}
              >
                30
              </Box>
              <Box sx={{ display: "flex", marginTop: "10px" }}>
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  Stuffs
                </Typography>
              </Box>
            </Item2>
          </Grid>
          <Grid
            container
            justifyContent={"space-evenly"}
            size={12}
            marginTop={10}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  boxShadow: `0px 5px 15px  ${theme.palette.boxShadowColor}`,
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                }}
                borderRadius={3}
                padding={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    color: theme.palette.text.primary,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Students</Typography>
                  <Typography>...</Typography>
                </Box>
                <PieChart
                  series={[{ data, innerRadius: 80 }]}
                  {...size}
                ></PieChart>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                boxShadow: `0px 5px 15px  ${theme.palette.boxShadowColor}`,
              }}
              borderRadius={3}
            >
              <SimpleBarChart />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  // <Box
  //   sx={{
  //     minHeight: "100vh",
  //     bgcolor: "background.default",
  //     color: "text.primary",
  //     p: 4,
  //     textAlign: "center",
  //   }}
  // >
  //   <Button
  //     onClick={toggleTheme}
  //     variant="contained"
  //     startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
  //   >
  //     Switch to {mode === "light" ? "Dark" : "Light"} Mode
  //   </Button>
  // </Box>
}

export default page;
