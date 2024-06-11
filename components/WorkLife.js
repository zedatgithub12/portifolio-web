import React from "react";
import { Grid, Box, useTheme } from "@mui/material";
import EmojiSlide from "@/utils/EmojiSlide";

const Emojis = ["👨‍💻", "🍀", "⛅️", "🙏", "😊"];
const animationDuration = 0.8;

export default function WorkLife() {
  const theme = useTheme();
  return (
    <div id="balance">
      <Grid container justifyContent="space-between" marginY={10}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={7}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  background: `linear-gradient(30deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  padding: { xs: 3, sm: 6, md: 10 },
                  borderBottomLeftRadius: 1,
                  borderRadius: { xs: 0, md: 40 },
                }}
              >
                <Grid
                  item
                  xs={4}
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
                    src="/assets/balance.png"
                    alt="flower"
                    style={{
                      position: "absolute",
                      top: -9,
                      right: 1,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                  <p class="text-2xl text-dark mr-4 pt-2">
                    I don't do work life balance
                  </p>

                  <Box sx={{ display: "flex" }}>
                    <p class="text-4xl font-bold text-white pt-4">
                      I create fulfillment in what i do{" "}
                      <EmojiSlide
                        emoji={Emojis}
                        animationDuration={animationDuration}
                      />
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
