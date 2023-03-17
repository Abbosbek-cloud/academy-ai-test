import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Person from "./Person";
import PerStats from "./PerStats";
import { GeneralHeaderComponent } from "./StyledComponents";

const People = () => {
  return (
    <Container>
      <Stack my={2}>
        <GeneralHeaderComponent>НАСТАВНИКИ</GeneralHeaderComponent>
        <Grid container>
          {data.map((item, indx) => {
            if (indx === 0 || indx === 3) {
              return (
                <Grid item xs={12} md={3} mt={4}>
                  <Person img={item} isOnTop={false} />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={12} md={3}>
                  <Person img={item} isOnTop={true} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Stack>
      <Stack py={6}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <PerStats number="60 000" name="Lorem ipsum dolor sit amet" />
          </Grid>
          <Grid item xs={12} md={4}>
            <PerStats number="150+" name="Lorem ipsum dolor sit amet" />
          </Grid>
          <Grid item xs={12} md={4}>
            <PerStats number="183 000" name="Lorem ipsum dolor sit amet" />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default People;

const data = ["/person1.png", "/person2.png", "/person3.png", "/person4.png"];
