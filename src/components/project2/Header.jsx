import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  HeadTypo,
  InfoTypo,
  StyledButtonContained,
  StyledButtonOutlined,
  StyledImage,
  StyledLinkComponent,
  StyledStack,
} from "./StyledComponents";

const Header = () => {
  return (
    <>
      <Stack position="absolute" top={0} left={0} zIndex={3} width="100%">
        <Container>
          <StyledStack
            display="flex"
            direction="row"
            justifyContent="space-between"
            py={2}
          >
            <Stack direction="row" gap="10px">
              <Stack>
                <StyledImage src="/logo.png" />
              </Stack>
              <Stack direction="column" justifyContent="center">
                <Typography color="#fff" fontSize="12px" lineHeight="12px">
                  АКАДЕМИЯ ИСКУССТВА
                </Typography>
                <Typography color="#fff" fontSize="12px" lineHeight="12px">
                  ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ
                </Typography>
                <Typography color="#fff" fontSize="8px">
                  ТИМУРА АРИПОВА
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap="20px"
              display="flex"
            >
              <StyledLinkComponent>О НАС</StyledLinkComponent>
              <StyledLinkComponent>КУРСЫ</StyledLinkComponent>
              <StyledLinkComponent>НОВОСТИ</StyledLinkComponent>
              <StyledLinkComponent>НАСТАВНИКИ ✨</StyledLinkComponent>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap="10px"
              display="flex"
            >
              <StyledLinkComponent>КОНТАКТЫ</StyledLinkComponent>
            </Stack>
          </StyledStack>
        </Container>
      </Stack>
      <Stack height="100vh" position="relative" direction="row" display="flex">
        <Stack width="60%" height="100%">
          <img src="/bg1.png" alt="bgimage" height="100%" />
        </Stack>
        <Stack
          width="40%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src="/fingerPrint.png" alt="finger" width="40%" />
        </Stack>
        <Stack
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack gap="20px">
            <HeadTypo textAlign="center">Lorem ipsum dolor sit amet</HeadTypo>
            <InfoTypo>
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum
              sodales bibendum etiam viverra mollis amet. Urna sed molestie
              auctor nisi.
            </InfoTypo>
            <Stack direction="row" marginInline="auto" gap="20px">
              <StyledButtonContained>Lorem ipsum dolor</StyledButtonContained>
              <StyledButtonContained>Lorem ipsum dolor</StyledButtonContained>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
