import React, { useRef } from "react";
import { Grid, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AboutTabs from "@/utils/AboutTabs";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";
import Image from "next/image";

export default function About() {
  const theme = useTheme();

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);
  return (
    <div id="about" ref={ref}>
      <Grid container justifyContent="center" marginY={6}>
        <Grid item xs={12} sm={11} md={11} lg={9} xl={9}>
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
              <Grid
                xs={12}
                sm={12}
                md={6}
                lg={4.6}
                xl={4.6}
                justifyContent={"center"}
              >
                <Image
                  src="/assets/myphoto.jpg"
                  alt="my photo"
                  width={330}
                  height={340}
                  style={{
                    aspectRation: 1,
                    objectFit: "contain",
                    borderBottomLeftRadius: 180,
                    borderBottomRightRadius: 180,
                    marginLeft: 16,
                  }}
                />
                {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p class="text-3xl ml-4">About </p>
                  <p class="text-4xl font-bold ml-2 text-green-500">me</p>
                </Box> */}
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
