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
        marginY={14}
        sx={{
          background: `linear-gradient(30deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          padding: 8,
        }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={7}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Grid item xs={12} md={5} sx={{ marginTop: 2 }}>
                  <p class="text-2xl text-dark mr-4 pt-2">
                    I approach my job with total
                  </p>
                </Grid>
                <Grid item xs={12} md={3} sx={{ marginTop: 2 }}>
                  <TextSlideUp
                    words={words}
                    animationDuration={animationDuration}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={2.4}
              sx={{
                position: "relative",
                right: 1,
                display: {
                  xs: "none",
                  sx: "none",
                  lg: "flex",
                },
              }}
            >
              <img
                src="/assets/flower.png"
                alt="flower"
                style={{
                  position: "absolute",
                  top: -170,
                  right: 1,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
