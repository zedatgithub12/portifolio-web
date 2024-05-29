import TextSlideUp from "@/utils/TextSlideUp";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Typography } from "@mui/material";

const words = ["Designing", "Development", "Testing"];
const animationDuration = 0.8;

export default function Hero() {
  return (
    <Grid id="home" container justifyContent="center" sx={{ marginTop: 20 }}>
      <Grid item xs={9}>
        <Grid container justifyContent="space-around">
          <Grid xs={11} sm={11} md={5} lg={5}>
            <Box sx={{ display: "flex" }}>
              <CircleRounded
                fontSize="small"
                color="primary"
                sx={{
                  border: 4,
                  borderColor: "secondary.light",
                  borderRadius: 10,
                  marginTop: 0.6,
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" color="text.primary" marginLeft={2}>
                  Zerihun Tegenu
                </Typography>

                <Typography
                  variant="subtitle"
                  color="text.secondary"
                  marginLeft={2}
                >
                  Fullstack Engineer
                </Typography>
              </Box>
            </Box>

            <p className="pt-8 text-5xl font-bold my-3">Let's Collaborate on</p>
            <TextSlideUp words={words} animationDuration={animationDuration} />
            <p variant="subtitle" className="mt-20 ">
              If you are looking for someone who have hand on experience in all
              SDLC you are at the right place. just press the button below
            </p>

            <div class="pt-14">
              <button
                class="button-19 bg-gradient-to-r from-green-500 to-green-300 hover:from-green-700 hover:to-green-500 text-dark text-xl font-bold py-3 px-10 rounded-full shadow-lg"
                role="button"
              >
                Contact me
              </button>

              <button
                variant="contained"
                class="text-primary hover:text-green-500  font-bold py-3 mx-10"
              >
                Download resume
              </button>
            </div>
          </Grid>
          <Grid xs={11} sm={11} md={6} lg={6}>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#fff4",
                backdropFilter: "blur(12px)",
                borderRadius: 4,
                boxShadow: 1,
                minHeight: 300,
              }}
            >
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/YZ5tOe7y9x4"
                title="Personal Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ borderRadius: 2 }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
