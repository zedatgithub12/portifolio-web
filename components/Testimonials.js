import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";
import { useTheme } from "@mui/system";
import { TestimonialsData, darkLogos, whiteLogos } from "@/data/testimonials";

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);

  return (
    <Grid
      container
      justifyContent="center"
      marginY={10}
      id="testimonials"
      ref={ref}
    >
      <Grid
        item
        xs={11}
        sm={11}
        md={11}
        lg={9}
        xl={9}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <p class="text-4xl font-bold "> Testimonials</p>
        <p class="text-1xl mt-3">See what other say about me</p>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-evenly",
            marginTop: 4,
          }}
        >
          {TestimonialsData.map((testimonial, index) => (
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              lg={3}
              xl={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1,
                margin: 2,
                backgroundColor: theme.palette.primary.contrastText,
                borderRadius: 4,
              }}
            >
              <CardContent>
                <p class="text-1xl mt-3">{testimonial.testimonial}</p>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
