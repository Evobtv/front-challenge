import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 3rem 0;
  @media screen and (min-width: 728px) {
    padding: 0 1rem;
    background-image: url("/images/banner.png");
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      inset: 0;
      background-color: rgba(26, 32, 44, 0.9);
    }
  }
`;

export const Logo = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  max-width: 260px;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  @media screen and (min-width: 728px) {
    margin-bottom: 2rem;
  }
`;

export const SubTitle = styled.p`
  display: none;
  position: relative;
  z-index: 1;
  font-size: 2rem;
  color: #fff;
  max-width: 450px;

  @media screen and (min-width: 728px) {
    display: block;
  }
`;

export const Slogan = styled.p`
  display: none;
  position: relative;
  z-index: 1;
  font-size: 2rem;
  color: #fff;
  font-weight: 300;
  max-width: 450px;

  @media screen and (min-width: 728px) {
    display: block;
    margin: 2rem 0;
  }
`;

export const CallAction = styled.button`
  display: none;
  text-align: left;
  position: relative;
  z-index: 1;
  font-size: 2rem;
  color: #fff;
  border: 0;
  background-color: transparent;
  max-width: 450px;

  @media screen and (min-width: 728px) {
    display: block;
  }
`;
