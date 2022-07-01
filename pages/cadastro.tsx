import { NextPage } from "next";
import Banner from "../src/components/Banner";
import { GridWrapper } from "../src/components/GridWrapper";
import RegisterForm from "../src/components/RegisterForm";
import Head from "next/head";

interface CadastroProps {
  subtitle: string;
  slogan: string;
  callAction: string;
  logoDesktop: string;
  logoMobile: string;
}

const Cadastro: NextPage<CadastroProps> = ({
  subtitle,
  slogan,
  callAction,
  logoDesktop,
  logoMobile,
}: CadastroProps) => {
  return (
    <>
      <Head>
        <title>Tapttoo - Cadastro</title>
      </Head>
      <GridWrapper>
        <Banner
          subtitle={subtitle}
          slogan={slogan}
          callAction={callAction}
          logoDesktop={logoDesktop}
          logoMobile={logoMobile}
        />
        <RegisterForm />
      </GridWrapper>
    </>
  );
};

export default Cadastro;

export async function getServerSideProps() {
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
