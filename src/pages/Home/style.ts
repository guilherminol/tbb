import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-weight: normal;
    margin: 15px;
  }

  h2 {
    text-align: center;
    font-weight: normal;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 28px;
    }
  }
`;
