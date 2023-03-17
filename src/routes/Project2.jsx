import { Box } from "@mui/material";
import React from "react";
import AboutUs from "../components/project2/AboutUs";
import CardsWrapper from "../components/project2/CardsWrapper";
import CourseWrapper from "../components/project2/CourseWrapper";
import Header from "../components/project2/Header";

const Project2 = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(14, 14, 18, 1)" }}>
      <Header />
      <AboutUs />
      <CardsWrapper />
      <CourseWrapper />
    </Box>
  );
};

export default Project2;
