import styled from "styled-components";

export const GridWrapper = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (min-width: 728px) {
    grid-template-columns: 1fr 1fr;
  }
`;
