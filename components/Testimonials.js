import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import { TestimonialsData, darkLogos, whiteLogos } from "@/data/testimonials";

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Container
      id="testimonials"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        overflow: "hidden",
      }}
      marginY={16}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <p class="text-4xl font-bold "> Testimonials</p>
        <p class="text-1xl mt-3">See what other say about me</p>
      </Box>

      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 33.33}%)`,
        }}
      >
        {TestimonialsData.map((testimonial, index) => (
          <Card
            sx={{
              minWidth: "30.33%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 1,
              margin: 2,
              backgroundColor: theme.palette.primary.contrastText,
              border: 0.5,
              borderColor: theme.palette.primary.contrastText,
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
          </Card>
        ))}
      </div>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {TestimonialsData?.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: index === currentIndex ? 16 : 8,
              height: 8,
              borderRadius: 6,
              margin: 1,
              backgroundColor:
                index === currentIndex
                  ? theme.palette.primary.main
                  : theme.palette.grey[200],
              transition: "all 0.8s ease",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          ></Box>
        ))}
      </Box>
    </Container>
  );
}
