import type { NextPage } from "next";
import Banner from "../src/components/Banner";
import { GridWrapper } from "../src/components/GridWrapper";
import LoginForm from "../src/components/LoginForm";

interface HomeProps {
  subtitle: string;
  slogan: string;
  callAction: string;
  logoDesktop: string;
  logoMobile: string;
  loginTitle: string;
  loginForgot: string;
  loginRegister: string;
  loginRegisterCall: string;
  loginCall: string;
}

const Home: NextPage<HomeProps> = ({
  subtitle,
  slogan,
  callAction,
  logoDesktop,
  logoMobile,
  loginTitle,
  loginForgot,
  loginRegister,
  loginRegisterCall,
  loginCall,
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
      <LoginForm
        title={loginTitle}
        forgot={loginForgot}
        register={loginRegister}
        registerCall={loginRegisterCall}
        loginCall={loginCall}
      />
    </GridWrapper>
  );
};

export default Home;

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
      loginTitle: data?.texts?.section_login?.title,
      loginForgot: data?.texts?.section_login?.forgot,
      loginRegister: data?.texts?.section_login?.register,
      loginRegisterCall: data?.texts.section_login?.register_call,
      loginCall: data?.texts.section_login?.login_call,
    },
  };
}
