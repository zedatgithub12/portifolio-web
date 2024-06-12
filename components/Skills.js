import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";
import Image from "next/image";

export default function Skills() {
  const ref = useRef();
  const inView = UseIntersectionObserver(ref);
  return (
    <div id="skills" ref={ref}>
      <Grid container justifyContent="center" marginY={10}>
        <Grid item xs={11} sm={11} md={11} lg={9} xl={9}>
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
                Yes, i did craft beautiful things with the following tools
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
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 110,
                    damping: 30,
                    delay: index * 0.1,
                  }}
                  key={index}
                >
                  <Image
                    src={skill}
                    alt="tech stack"
                    width={60}
                    height={60}
                    style={{
                      aspectRatio: 1,
                      objectFit: "contain",
                      margin: 26,
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
