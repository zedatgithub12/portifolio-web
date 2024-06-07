import React, { useRef } from "react";
import { Grid, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AboutTabs from "@/utils/AboutTabs";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";

export default function About() {
  const theme = useTheme();

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);
  return (
    <div id="about" ref={ref}>
      <Grid container justifyContent="center" marginY={20}>
        <Grid xs={9}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              stiffness: 110,
              damping: 30,
            }}
          >
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
                  backdropFilter: "blur(12px)",
                  padding: 4,
                  borderRadius: 4,
                }}
              >
                <AboutTabs />
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}
