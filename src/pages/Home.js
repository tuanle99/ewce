import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";

function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <h2>{moment().format("MMMM YYYY")} Statistics</h2>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        Material Collected
        <Box sx={{ mt: 2 }}>
          <PieChart
            label={({ dataEntry }) => dataEntry.value}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </Box>
      </Grid>
    </Container>
  );
}

export default Home;
