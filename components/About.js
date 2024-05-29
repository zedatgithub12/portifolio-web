import React from "react";
import { Grid, Box, useTheme } from "@mui/material";
import AboutTabs from "@/utils/AboutTabs";

export default function About() {
  const theme = useTheme();
  return (
    <div id="about">
      <Grid container justifyContent="center" marginY={20}>
        <Grid xs={9}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 6,
            }}
          >
            <Grid xs={12} sm={12} md={6} lg={4.6} xl={4.6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <p class="text-3xl">About </p>
                <p class="text-4xl font-bold ml-2 text-green-500">me</p>
              </Box>
              <img
                src="https://source.unsplash.com/random"
                alt="my photo"
                width={"100%"}
                height="62%"
              />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={7}
              xl={7}
              sx={{
                backgroundColor: theme.palette.primary.contrastText,
                backdropFilter: blur(12),
                padding: 4,
                borderRadius: 4,
              }}
            >
              <AboutTabs />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
