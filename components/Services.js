import React, { useRef } from "react";
import { MyServices } from "@/data/service";
import { Box, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";

export default function Services() {
  const theme = useTheme();

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);

  return (
    <div id="services" ref={ref}>
      <Grid container justifyContent="center" marginY={10}>
        <Grid item xs={11} sm={11} md={11} lg={9} xl={9}>
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
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={
                      inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 110,
                      damping: 30,
                      delay: index * 0.1,
                    }}
                  >
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
                  </motion.div>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
