import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { HeadTypo, InfoExtra, StyledImgWrapper } from "./StyledComponents";

const AboutUs = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Stack direction="row">
        <Stack direction="column" width="60%">
          <HeadTypo textAlign="left">О НАС</HeadTypo>
          <InfoExtra>
            Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
            pellentesque volutpat et vitae. Consequat felis ut in pellentesque
            feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
            lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
            Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
            ullamcorper nulla.
          </InfoExtra>
        </Stack>
        <Stack
          direction="column"
          width="40%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StyledImgWrapper>
            <img src="/speaker.png" alt="speaker" width="100%" />
            <Box className="bottomBox"></Box>
          </StyledImgWrapper>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutUs;
