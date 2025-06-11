import TextSlideUp from "@/utils/TextSlideUp";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import PixarText from "./mini-comonents/TextAnimation";

const words = ["Designing", "Development", "Testing"];
const animationDuration = 0.7;

export default function Hero() {
  return (
    <Grid
      id="home"
      container
      justifyContent="center"
      sx={{ marginTop: 16, pl: 4 }}
    >
      <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
        <Grid container justifyContent="space-between">
          <Grid xs={11} sm={11} md={5} lg={5}>
            <Box sx={{ display: "flex" }}>
              <CircleRounded
                fontSize="small"
                color="primary"
                sx={{
                  border: 4,
                  borderColor: "primary.light",
                  borderRadius: 10,
                  marginTop: 0.8,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="ml-4 text-2xl font-bold">Zerihun Tegenu</p>

                <p className="ml-4 text-1xl ">Senior Frontend Engineer</p>
              </div>
            </Box>

            <p className="pt-3 text-5xl font-bold my-1 leading-tight">
              Let&apos;s Collaborate on
            </p>
            <TextSlideUp
              words={words}
              animationDuration={animationDuration}
              sx={{
                color: "#2FD236",
                textAlign: { xs: "center", sm: "left" },
              }}
            />
            <p variant="subtitle" className="mt-4 ">
              Senior Frontend Engineer who loves building smooth, user-friendly
              web experiences. I turn complex ideas into clean, responsive
              interfaces. Let&apos;s create something awesome together!
            </p>

            <div
              class="py-14"
              style={{ textAlign: { xs: "center", md: "left" } }}
            >
              <a
                href="#contact"
                class="button-19 bg-gradient-to-r from-green-500 to-green-300 hover:from-green-700 hover:to-green-500 text-dark text-xl font-bold py-3 px-10 rounded-full shadow-lg"
              >
                Contact me
              </a>

              <a
                href="/assets/resume.pdf"
                className="text-primary hover:text-green-500  font-bold py-3 mx-6"
                download
              >
                Download CV
              </a>
            </div>
          </Grid>
          <Grid
            xs={11}
            sm={11}
            md={6}
            lg={6}
            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
          >
            {/* <Box
              sx={{
                backgroundColor: "#fff4",
                backdropFilter: "blur(12px)",
                borderRadius: 4,
              }}
            > */}
            <Image
              src="/assets/images/developer.gif"
              alt="developer-working"
              style={{
                borderRadius: 2,
                boxShadow: 1,
                minHeight: 200,
                marginTop: -10,
                aspectRatio: 1 / 1,
                objectFit: "cover",
              }}
              width={400}
              height={400}
              priority
            />

            {/* </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
