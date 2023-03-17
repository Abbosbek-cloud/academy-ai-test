import { Box, Stack } from "@mui/material";
import React from "react";
import { CourseTypo, StyledCourseCard } from "./StyledComponents";

const Course = ({ img, count, name, info }) => {
  return (
    <StyledCourseCard>
      <Box>
        <Box component="img" src={img} alt={name} width="100%" />
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CourseTypo fontSize="22px">{name}</CourseTypo>
        <CourseTypo textAlign="center" fontSize="25px">
          {count} <br /> марта
        </CourseTypo>
      </Stack>
      <Stack>
        <CourseTypo fontSize="15px">{info}</CourseTypo>
      </Stack>
    </StyledCourseCard>
  );
};

export default Course;
