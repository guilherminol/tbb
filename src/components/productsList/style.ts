import styled from "styled-components";

export const Container = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: grid;
  justify-content: space-around;
  max-width: 1120px;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 280px);
`;
