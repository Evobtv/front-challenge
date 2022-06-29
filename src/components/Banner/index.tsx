import { CallAction, Logo, Slogan, SubTitle, Wrapper } from "./style";

const Banner = () => {
  return (
    <Wrapper>
      <picture>
        <source media="(min-width:728px)" srcSet="/images/Tapttoo.png"></source>
        <Logo src="/images/TapttooMobile.png" alt="Topttoo"></Logo>
      </picture>
      <SubTitle>O lugar certo para encontrar a sua próxima tatuagem</SubTitle>
      <Slogan>Descubra e siga seus tatuadores e estilos preferidos</Slogan>
      <CallAction>Acesse!</CallAction>
    </Wrapper>
  );
};

export default Banner;
