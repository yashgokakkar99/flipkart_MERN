import { Fragment } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { styled, Box } from "@mui/material";

const Container = styled(Box)`
  padding:10px;
  background:#f2f2f2;
`;

function Home() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </Fragment>
  );
}

export default Home;
