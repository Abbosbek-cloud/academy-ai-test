import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { GeneralHeaderComponent, InfoExtra } from "./StyledComponents";

const News = () => {
  return (
    <Container>
      <Stack my={2}>
        <GeneralHeaderComponent sx={{ mb: 2 }}>НОВОСТИ</GeneralHeaderComponent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Box
                component="img"
                src="/absImg.png"
                alt="alter"
                width="70%"
                height="70%"
                borderRadius="10px"
                position="absolute"
                top={0}
                left={0}
              />
              <Box
                component="img"
                src="/absImg2.png"
                alt="alter"
                width="70%"
                height="70%"
                borderRadius="10px"
                position="absolute"
                bottom={0}
                right={0}
                zIndex={2}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoExtra>
              Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
              pellentesque volutpat et vitae. Consequat felis ut in pellentesque
              feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
              lobortis dolor volutpat enim. Tempor interdum aliquet at lorem
              nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum
              dictumst ullamcorper nulla.
            </InfoExtra>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default News;
