import { Container, Grid } from "@mui/material";
import React from "react";
import Course from "./Course";
import { GeneralHeaderComponent } from "./StyledComponents";

const CourseWrapper = () => {
  return (
    <Container sx={{ py: 2 }}>
      <GeneralHeaderComponent>КУРСЫ</GeneralHeaderComponent>
      <Grid container spacing={1}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} md={4}>
            <Course {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseWrapper;

const data = [
  {
    img: "/img1.png",
    id: 1,
    count: 20,
    name: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. ",
  },
  {
    img: "/img2.png",
    id: 2,
    count: 18,
    name: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. ",
  },
  {
    img: "/img3.png",
    id: 3,
    count: 30,
    name: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. ",
  },
];
