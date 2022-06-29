import type { NextPage } from "next";
import Banner from "../src/components/Banner";
import { GridWrapper } from "../src/components/GridWrapper";

interface HomeProps {
  subtitle: string;
  slogan: string;
  callAction: string;
  logoDesktop: string;
  logoMobile: string;
}

const Home: NextPage<HomeProps> = ({
  subtitle,
  slogan,
  callAction,
  logoDesktop,
  logoMobile,
}: HomeProps) => {
  return (
    <GridWrapper>
      <Banner
        subtitle={subtitle}
        slogan={slogan}
        callAction={callAction}
        logoDesktop={logoDesktop}
        logoMobile={logoMobile}
      />
    </GridWrapper>
  );
};

export default Home;

export async function getServerSideProps() {
  console.log("dentro do servidor");
  const response = await fetch(
    "https://front.evob.dev.marcomapa.com/front_challenge/info/"
  );
  const data = await response.json();
  return {
    props: {
      subtitle: data?.texts?.subtitle,
      slogan: data?.texts?.slogan,
      callAction: data?.texts?.call_action,
      logoDesktop: data?.images?.logo,
      logoMobile: data?.images?.logo_mobile,
    },
  };
}
