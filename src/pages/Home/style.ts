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
  div {
    margin: 20px auto 30px auto;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 28px;
    }
    div {
      display: flex;
      align-items: space-around;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
  width: fit-content;
  input {
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0 15px 0 0;
    background-color: #fff;
    border-radius: 0 10px 10px 0;
    height: 35px;
    :hover {
      cursor: pointer;
    }
    svg {
      height: 100%;
      color: #191d32;
    }
  }
`;
