import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ListItem from "./ListItem";
import {
  CourseTypo,
  InfoExtra,
  StyledButtonContainedReq,
  StyledEdu,
  StyledImage2,
} from "./StyledComponents";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledTypoNumber = styled(Typography)(() => ({
  fontFamily: "'Montserrat'",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "150%",
  textAlign: "center",
  color: "#FFFFFF",
}));

const StyledTypoNumber2 = styled(Typography)(() => ({
  fontFamily: "'Montserrat'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "25px",
  lineHeight: "140%",
  textAlign: "center",
  color: "#FFFFFF",
}));

const IconWrapper = styled(Box)(() => ({
  width: "48px",
  height: "48px",
  background: "#FFFFFF",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const Footer = () => {
  return (
    <>
      <Divider sx={{ border: "2px solid #D31B1B", my: 4 }} />
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Stack direction="row" gap="10px">
              <Stack>
                <StyledImage2 width="80px" src="/logo.png" />
              </Stack>
              <Stack direction="column" justifyContent="center">
                <Typography color="#fff" fontSize="15px" lineHeight="16px">
                  АКАДЕМИЯ ИСКУССТВА
                </Typography>
                <Typography color="#fff" fontSize="15px" lineHeight="16px">
                  ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ
                </Typography>
                <Typography color="#fff" fontSize="10px">
                  ТИМУРА АРИПОВА
                </Typography>
              </Stack>
            </Stack>
            <StyledEdu>Education</StyledEdu>
            <CourseTypo fontSize="16px" lineHeight="155%">
              Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
              pellentesque volutpat et vitae. Consequat felis ut in pellentesque
              feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
              lobortis dolor volutpat enim. Tempor interdum aliquet at lorem
              nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum
              dictumst ullamcorper nulla.
            </CourseTypo>
          </Grid>
          <Grid item xs={12} md={3} justifyContent="center">
            <Box>
              {first.map((item, index) => {
                return <ListItem key={index} name={item} />;
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={3} justifyContent="center">
            <Box>
              {second.map((item, index) => (
                <ListItem key={index} name={item} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack direction="column" gap="15px">
              <StyledTypoNumber>
                Звонок по Узбекистану бесплатный
              </StyledTypoNumber>
              <StyledTypoNumber2>+998 (99) 99-99-99 </StyledTypoNumber2>
              <StyledButtonContainedReq>
                Перезвоните нам
              </StyledButtonContainedReq>
              <Stack direction="row" gap="10px">
                <IconWrapper>
                  <FacebookIcon sx={{ color: "#F4013D" }} />
                </IconWrapper>
                <IconWrapper>
                  <TwitterIcon sx={{ color: "#F4013D" }} />
                </IconWrapper>
                <IconWrapper>
                  <InstagramIcon sx={{ color: "#F4013D" }} />
                </IconWrapper>
                <IconWrapper>
                  <LinkedInIcon sx={{ color: "#F4013D" }} />
                </IconWrapper>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;

const first = [
  "About Us",
  "Graduation",
  "Scholarship",
  "Admissions",
  "International",
  "Events",
];

const second = ["Language", "WordPress", "Privacy", "FAQs", "Support"];
