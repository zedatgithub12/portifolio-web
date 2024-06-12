import React, { useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import {
  ContactPage,
  Email,
  LocationCity,
  Phone,
  PhoneAndroid,
} from "@mui/icons-material";
import DM from "./DM";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";
import { motion } from "framer-motion";

export default function Contact() {
  const ref = useRef();
  const inView = UseIntersectionObserver(ref);
  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        overflow: "hidden",
      }}
      marginY={16}
      ref={ref}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <p class="text-4xl font-bold ">I’d love to hear from you</p>
        <p class="text-1xl mt-3">
          You can contact me either by using the contact info provided or the
          form below
        </p>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 110,
              damping: 30,
            }}
          >
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Grid item xs={12} sm={11} md={4.8}>
                <ContactPage fontSize="large" />
                <p class="text-2xl font-bold mt-2">Contact infos</p>

                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <Email fontSize="small" />
                  <p className="text-1xl ml-2">zerihuntegenu5@gmail.com</p>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <PhoneAndroid fontSize="small" />
                  <p className="text-1xl ml-2">+251949390840</p>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <Phone fontSize="small" />
                  <p className="text-1xl ml-2">+251995627720</p>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <LocationCity fontSize="small" />
                  <p className="text-1xl ml-2">
                    {" "}
                    Bole 22, Addis Ababa, Ethiopia
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} sm={11} md={6.8}>
                <DM />
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
