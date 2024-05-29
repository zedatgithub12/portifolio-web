import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div id="skills">
      <Grid container justifyContent="center" marginY={20}>
        <Grid xs={9}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: 6,
            }}
          >
            <Grid item xs={12} sm={12} md={8} lg={6} xl={7}>
              <Box sx={{ display: "flex" }}>
                <p class="text-3xl">Skilled </p>
                <p class="text-4xl font-bold ml-2 text-green-500">with</p>
              </Box>
              <Typography variant="subtitle1">
                Yes i did craft beautiful things with the following tools
              </Typography>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              {skills?.map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  alt="tech stack"
                  style={{
                    width: 60,
                    height: 60,
                    aspectRatio: 1,
                    objectFit: "contain",
                    margin: 26,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
