import { Box, Stack } from "@mui/material";
import React from "react";
import { CourseTypo, StyledCourseCard } from "./StyledComponents";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

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
      <Stack py={1}>
        <CourseTypo fontSize="15px">{info}</CourseTypo>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="flex-end">
        <Box
          sx={{
            width: "20px",
            height: "20px",
            background:
              "linear-gradient(180deg, #F3023E 0%, #F0073E 50%, #A10C2E 100%)",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <TrendingFlatIcon
            sx={{
              position: "absolute",
              right: "8px",
              bottom: "-1px",
              color: "#fff",
            }}
          />
        </Box>
      </Stack>
    </StyledCourseCard>
  );
};

export default Course;
