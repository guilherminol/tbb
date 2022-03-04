import styled from "styled-components";

export const Container = styled.div`
  header {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 24px;
      text-align: center;
    }
    svg {
      display: none;
    }
    .mobileLogo {
      display: initial;
      font-size: 30px;
    }
  }
  @media (min-width: 768px) {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 700px;
    }
    svg {
      font-size: 50px;
    }
  }
`;
