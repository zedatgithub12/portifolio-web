import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { CertificationData, EducationData } from "@/data/education";
import { Check, DocumentScanner } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { Experiance } from "@/data/experiance";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function Education() {
  const theme = useTheme();
  return (
    <div id="education">
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
                  <Typography variant="h4">Education & </Typography>
                </Grid>

                <Grid item xs={12} md={3}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "600",
                      color: theme.palette.primary.main,
                      marginLeft: 2,
                    }}
                  >
                    Certification
                  </Typography>
                </Grid>
              </Grid>

              {EducationData.map((educ, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: 3,
                    marginTop: 4,
                    boxShadow: 1,
                    borderRadius: 5,
                    backdropFilter: "blur(12px)",
                    backgroundColor: theme.palette.background.paper,
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
                    <Typography
                      variant="h5"
                      sx={{ marginLeft: 2, fontWeight: "bold" }}
                    >
                      {educ.what}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 5,
                      marginY: 1,
                    }}
                  >
                    <Typography variant="body1">{educ.start} - </Typography>
                    <Typography variant="body1"> {educ.end}</Typography>
                  </Box>
                  <Box sx={{ marginLeft: 5, marginTop: 2 }}>
                    {educ?.actions?.map((item, index) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Check fontSize="8" color="#ddd" />
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{ marginLeft: 1 }}
                        >
                          {item}
                        </Typography>
                      </div>
                    ))}
                  </Box>
                </Box>
              ))}

              <Typography variant="h4" sx={{ marginTop: 4 }}>
                Certificates
              </Typography>
              {CertificationData.map((certificate, index) => (
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
                    backgroundColor: theme.palette.background.paper,
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
                    <Typography variant="subtitle1">
                      {certificate.from}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {certificate.what}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginY: 1,
                      }}
                    >
                      <Typography variant="body1">
                        {certificate.start} -{" "}
                      </Typography>
                      <Typography variant="body1">
                        {" "}
                        {certificate.end}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
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

                <Typography variant="h4">Work</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.primary.main,
                    marginLeft: 2,
                  }}
                >
                  Experiance
                </Typography>
              </Grid>

              {Experiance.map((work, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: 3,
                    marginTop: 4,
                    boxShadow: 1,
                    borderRadius: 5,
                    backdropFilter: "blur(12px)",
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ marginLeft: 5 }}>
                    {work.setup}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginY: 0.5 }}
                  >
                    <BookmarkAddedIcon
                      fontSize="medium"
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{ marginLeft: 2, fontWeight: "bold" }}
                    >
                      {work.what} @ {work.from}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 5,
                      marginY: 1,
                    }}
                  >
                    <Typography variant="body1">{work.start} - </Typography>
                    <Typography variant="body1"> {work.end}</Typography>
                  </Box>
                  <Box sx={{ marginLeft: 5, marginTop: 2 }}>
                    {work?.actions?.map((item, index) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Check fontSize="8" color="#ddd" />
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{ marginLeft: 1 }}
                        >
                          {item}
                        </Typography>
                      </div>
                    ))}
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
