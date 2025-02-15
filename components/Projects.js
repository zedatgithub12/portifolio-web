import React, { useRef, useState } from "react";
import { ProjectsData } from "@/data/projects";
import { Box, Grid, IconButton, Link, useTheme } from "@mui/material";
import {
  Check,
  CheckCircle,
  ChevronRight,
  Groups,
  LinkSharp,
  PrivacyTip,
} from "@mui/icons-material";
import UseIntersectionObserver from "@/utils/UseIntersectionObserver";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const theme = useTheme();
  const [expand, setExpand] = useState(0);

  const ref = useRef();
  const inView = UseIntersectionObserver(ref);

  const handleExpanding = (index) => {
    if (expand === index) {
      setExpand(0);
    } else {
      setExpand(index);
    }
  };

  return (
    <div id="projects" ref={ref}>
      <Grid container justifyContent="center" marginY={10}>
        <Grid
          item
          xs={11.4}
          sm={11}
          md={11}
          lg={9}
          xl={9}
          sx={{
            border: 1,
            borderColor: theme.palette.primary.main,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              xs={12}
              md={4}
              sx={{
                backgroundColor: theme.palette.primary.contrastText,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                padding: 3,
                borderRight: 1,
                borderColor: theme.palette.primary.main,
              }}
            >
              <p class="text-4xl font-bold text-green-500">Projects</p>

              <p class="text-1xl mt-4">
                I had the opportunity to collaborate on the following projects
              </p>

              <div className="flex gap-3 lg:block xl:block items-center overflow-x-auto lg:overflow-x-hidden xl:overflow-x-hidden scrollbar-hide">
                {ProjectsData?.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 60, opacity: 0 }}
                    animate={
                      inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 110,
                      damping: 30,
                      delay: index * 0.1,
                    }}
                    style={{
                      cursor: "pointer",
                      minWidth: { xs: "300px", sm: "300px", md: "300px" },
                    }}
                    onClick={() => handleExpanding(index)}
                  >
                    <Box
                      sx={{
                        backgroundColor:
                          expand === index
                            ? theme.palette.primary.main
                            : theme.palette.primary.contrastText,
                        border: 1,
                        borderColor: theme.palette.primary.main,
                        borderRadius: 3,
                        marginTop: 3,
                        transition: "all 1s ease",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingX: 0.5,
                        }}
                      >
                        <p className="text-1xl font-bold p-3 truncate w-full  text-ellipsis">
                          {project.title}
                        </p>
                        <IconButton>
                          {expand === index ? (
                            <Check
                              fontSize="16px"
                              sx={{ color: theme.palette.background.paper }}
                            />
                          ) : (
                            <ChevronRight fontSize="small" />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </div>
            </Grid>
            <Grid
              xs={12}
              md={8}
              sx={{
                padding: 3,
              }}
            >
              <p class="text-2xl font-bold ">
                {expand != null && ProjectsData[expand].title}
              </p>

              <p class="text-1xl mt-4">
                {expand != null && ProjectsData[expand].description}
              </p>

              <p class="text-1xl font-bold mt-4">
                {expand != null && ProjectsData[expand].role}
              </p>

              <Box sx={{ display: "flex", flexWrap: "wrap", marginY: 2.4 }}>
                {expand != null && ProjectsData[expand].status && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: theme.palette.primary.contrastText,
                      padding: 0.8,
                      paddingX: 1,
                      borderRadius: 20,
                    }}
                  >
                    <CheckCircle fontSize="18px" color="primary" />
                    <p class="text-1xl ml-2 mr-1">
                      {expand != null && ProjectsData[expand].status}
                    </p>
                  </Box>
                )}

                {expand != null && ProjectsData[expand].available && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: theme.palette.background.paper,
                      padding: 0.8,
                      paddingX: 1,
                      borderRadius: 20,
                      marginLeft: 2,
                    }}
                  >
                    {ProjectsData[expand].available === "Public" ? (
                      <Groups fontSize="small" color="secondary" />
                    ) : (
                      <PrivacyTip
                        fontSize="18px"
                        sx={{ color: theme.palette.grey[400] }}
                      />
                    )}
                    <p class="text-1xl ml-2 mr-1">
                      {expand != null && ProjectsData[expand].available}
                    </p>
                  </Box>
                )}

                {expand != null &&
                  ProjectsData[expand].available === "Public" && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 0.8,
                        paddingX: 1,
                        borderRadius: 20,
                        marginLeft: 2,
                      }}
                    >
                      <LinkSharp fontSize="18px" color="info" />
                      <Link
                        href={ProjectsData[expand].url}
                        target="_blank"
                        class="text-1xl ml-2 text-blue-500 "
                      >
                        Link
                      </Link>
                    </Box>
                  )}
              </Box>

              <p class="text-1xl font-bold mt-8">Tech stack used</p>

              <Box sx={{ display: "flex", flexWrap: "wrap", marginY: 2 }}>
                {expand != null &&
                  ProjectsData[expand].stacks?.map((stack, index) => (
                    <Image
                      key={index}
                      src={stack}
                      alt="tech stack"
                      width={30}
                      height={30}
                      style={{
                        aspectRatio: 1,
                        objectFit: "contain",
                        margin: 10,
                      }}
                    />
                  ))}
              </Box>

              <p class="text-1xl font-bold mt-8">Screenshots</p>

              <Box sx={{ display: "flex", flexWrap: "wrap", marginY: 2 }}>
                {expand != null &&
                  ProjectsData[expand].screenshots?.map((stack, index) => (
                    <Image
                      key={index}
                      src={stack}
                      alt="tech stack"
                      width={222}
                      height={240}
                      style={{
                        aspectRatio: 1,
                        objectFit: "contain",
                        margin: 6,
                      }}
                    />
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
