import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  background-image: url("/images/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    background-color: rgba(26, 32, 44, 0.9);
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  font-size: 3rem;
  font-weight: lighter;
  color: #fff;
  max-width: 700px;
  text-align: center;
  margin: 1rem 0;
  @media screen and (min-width: 728px) {
    font-size: 4rem;
  }
`;

export const TextBold = styled.strong`
  font-weight: bolder;
`;

export const Text = styled.p`
  text-align: center;
  position: relative;
  color: #fff;
  font-weight: lighter;
  z-index: 1;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  color: #2d3748;
  background-color: #fff;
  border: 1px solid transparent;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 2rem 0;
  border-radius: 30px;
  max-width: 400px;
  width: 90%;
  margin: 2rem auto;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #2d3748;
    border-color: #fff;
  }

  @media screen and (min-width: 728px) {
    font-size: 1.75rem;
  }
`;
