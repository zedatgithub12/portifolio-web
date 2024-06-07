import React, { useRef } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { CertificationData, EducationData } from "@/data/education";
import { Check } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Experiance } from "@/data/experiance";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";

export default function Education() {
  const theme = useTheme();

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);
  return (
    <div id="education" ref={ref}>
      <Grid container justifyContent="center" marginY={20}>
        <Grid xs={9}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 6,
            }}
          >
            <Grid xs={12} sm={12} md={5} lg={5} xl={5} sx={{ marginTop: 3 }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={1.4}>
                  <CreateIcon fontSize="large" sx={{ marginRight: 2 }} />
                </Grid>

                <Grid item xs={12} md={4.7}>
                  <p className="text-3xl">Education & </p>
                </Grid>

                <Grid item xs={12} md={3}>
                  <p
                    className="text-3xl"
                    style={{
                      fontWeight: "600",
                      color: theme.palette.primary.main,
                    }}
                  >
                    Certification
                  </p>
                </Grid>
              </Grid>

              {EducationData.map((educ, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    stiffness: 110,
                    damping: 30,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      padding: 3,
                      marginTop: 4,
                      boxShadow: 1,
                      borderRadius: 5,
                      backdropFilter: "blur(12px)",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? theme.palette.background.paper
                          : theme.palette.background.default,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ marginLeft: 5 }}>
                      {educ.from}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", marginY: 1 }}
                    >
                      <ArticleIcon
                        fontSize="medium"
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                      <p className="text-2xl font-bold ml-3">{educ.what}</p>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 5,
                        marginY: 1,
                      }}
                    >
                      <p className="text-1xl">{educ.start} - </p>
                      <p className="text-1xl"> {educ.end}</p>
                    </Box>
                    <Box sx={{ marginLeft: 5, marginTop: 2 }}>
                      {educ?.actions?.map((item, index) => (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Check fontSize="8" color="#ddd" />
                          <p key={index} className="ml-2 mt-2">
                            {item}
                          </p>
                        </div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}

              <p className="text-3xl mt-6 "> Certificates </p>
              {CertificationData.map((certificate, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    stiffness: 110,
                    damping: 30,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 2,
                      marginTop: 4,
                      boxShadow: 1,
                      borderRadius: 5,
                      backdropFilter: "blur(12px)",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? theme.palette.background.paper
                          : theme.palette.background.default,
                    }}
                  >
                    <img
                      src={certificate.logo}
                      alt={certificate.what}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        aspectRatio: 1,
                        objectFit: "contain",
                      }}
                    />

                    <Box sx={{ marginLeft: 2 }}>
                      <p className="text-1xl">{certificate.from}</p>
                      <p className="text-2xl font-bold">{certificate.what}</p>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginY: 1,
                        }}
                      >
                        <p className="text-1xl">{certificate.start} - </p>
                        <p className="text-1xl"> {certificate.end}</p>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Grid>

            <Grid xs={12} sm={12} md={6} lg={6} xl={6} sx={{ marginTop: 3 }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WorkIcon fontSize="large" sx={{ marginRight: 2 }} />

                <p className="text-3xl">Work </p>
                <p
                  className="text-3xl"
                  style={{
                    fontWeight: "600",
                    color: theme.palette.primary.main,
                    marginLeft: 6,
                  }}
                >
                  Experiance
                </p>
              </Grid>

              {Experiance.map((work, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    stiffness: 110,
                    damping: 30,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      padding: 3,
                      marginTop: 4,
                      boxShadow: 1,
                      borderRadius: 5,
                      backdropFilter: "blur(12px)",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? theme.palette.background.paper
                          : theme.palette.background.default,
                    }}
                  >
                    <p className="text-1xl ml-10">{work.setup}</p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: 0.5,
                      }}
                    >
                      <BookmarkAddedIcon
                        fontSize="medium"
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                      <p className="text-2xl font-bold ml-3">
                        {work.what} @ {work.from}
                      </p>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 5,
                        marginY: 1,
                      }}
                    >
                      <p className="text-1xl">{work.start} - </p>
                      <p className="text-1xl"> {work.end}</p>
                    </Box>
                    <Box sx={{ marginLeft: 5, marginTop: 2 }}>
                      {work?.actions?.map((item, index) => (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Check fontSize="8" color="#ddd" />
                          <p className="ml-2 mt-2" key={index}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
