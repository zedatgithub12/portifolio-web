import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { SocialMedia } from "@/data/socialmedia";
import Logo from "@/utils/Logo";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container
      id="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        marginTop: 8,
        gap: { xs: 3, sm: 6 },
        overflow: "hidden",
      }}
      marginY={16}
    >
      <Grid container>
        <Grid xs={12} sm={12} md={6} xl={4} lg={3}>
          <Logo sx={{ width: 80, height: 50, marginBottom: 10 }} />
          <Typography variant="body" sx={{ marginTop: 4 }}>
            Delivering seamless digital solutions with expertise in both
            frontend and backend development as a fullstack engineer
          </Typography>
        </Grid>

        <Grid xs={12} sm={12} md={6} xl={4} lg={3}>
          <Box
            sx={{
              p: 2,
              marginLeft: 4,
              flexGrow: 1,
            }}
          >
            <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollToSection("education")}>
              Education
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("skills")}>
              Skills
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("services")}>
              Services
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}>
              Projects
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("contact")}>
              Contact
            </MenuItem>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6} xl={4} lg={3}>
          <p className="text-1xl">Follow me on</p>

          <Box sx={{ display: "flex", marginTop: 2 }}>
            {SocialMedia?.map((socialMedia, index) => (
              <a
                key={index}
                href={socialMedia.url}
                target="_blank"
                rel="noreferrer"
                className="m-2"
              >
                <Image
                  src={socialMedia.logo}
                  alt={socialMedia.name}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingY: 3,
            }}
          >
            <p>
              &copy; Zerihun Tegenu, All Rights Reserved.
              {new Date().getFullYear()}
            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
