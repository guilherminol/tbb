import styled from "styled-components";

export const Container = styled.div`
  .GetBack {
      position: fixed;
      left: 0;
      top: 0;
      color: white;
      background-color: transparent;
      border: none;
      margin: 0 0 0 10px;
      font-size: 22px;
    }
  header {
    margin: 20px auto ;
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
    .GetBack {
      margin: 5px 0 0 10px;
      font-size: 42px;
      cursor: pointer;
    }
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
