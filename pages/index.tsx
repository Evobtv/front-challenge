import type { NextPage } from "next";
import Banner from "../src/components/Banner";
import { GridWrapper } from "../src/components/GridWrapper";

const Home: NextPage = () => {
  return (
    <GridWrapper>
      <Banner />
    </GridWrapper>
  );
};

export default Home;
