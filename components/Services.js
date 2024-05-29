import React from "react";
import { MyServices } from "@/data/service";
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function Services() {
  const theme = useTheme();
  return (
    <div id="services">
      <Grid container justifyContent="center" marginY={14}>
        <Grid item xs={9}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
            }}
          >
            {MyServices?.map((service, index) => (
              <Grid xs={12} sm={11} md={5.6} lg={3.6} xl={3.6}>
                {index === 0 ? (
                  <Box sx={{ marginTop: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <p class="text-3xl">{service.titleBlack} </p>
                      <p class="text-4xl font-bold ml-2 text-green-500">
                        {service.titlePrimary}
                      </p>
                    </Box>
                    <p class="text-1xl">{service.description} </p>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      marginTop: 2,
                      padding: 3,
                      backgroundColor: theme.palette.primary.contrastText,
                      borderRadius: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      {service.icon}
                      <p class="text-2xl ml-4">{service.title} </p>
                    </Box>
                    <p class="text-1xl">{service.description} </p>
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
