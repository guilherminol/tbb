import styled from "styled-components";

export const Container = styled.div`
  header {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 24px;
      text-align: center;
    }
    svg {
      display: none;
      font-size: 50px;
    }
    .mobileLogo {
      display: initial;
    }
  }
  @media (min-width: 768px) {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 700px;
      svg {
        display: initial;
      }
       h1 {
        font-size: 32px;
    }
  }
`;
