import React from "react";
import { Grid, Box, useTheme } from "@mui/material";
import TextSlideUp from "@/utils/TextSlideUp";

const words = ["Accountablity", "Dedication", "Creativity"];
const animationDuration = 0.5;
export default function Whyme() {
  const theme = useTheme();
  return (
    <div id="services">
      <Grid
        container
        justifyContent="space-between"
        marginY={10}
        sx={{
          background: `linear-gradient(30deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          paddingY: 10,
          paddingX: 2,
        }}
      >
        <Grid item xs={11} sm={11} md={11} lg={9} xl={9}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={7}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} md={6}>
                  <p class="text-2xl text-dark pt-4">
                    I approach my job with total
                  </p>
                </Grid>
                <Grid item xs={12} md={2}>
                  <TextSlideUp
                    words={words}
                    animationDuration={animationDuration}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
