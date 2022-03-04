import styled from "styled-components";

export const Container = styled.li`
  background: #ffffff;
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 290px;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: space-between;
  padding: 10px;
  h3 {
    text-align: center;
    color: #282f44;
    font-size: 16px;
  }
  p {
    color: #282f44;
    text-align: center;
  }
  @media (min-width: 900px) {
    width: 400px;
    h3 {
      font-size: 18px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  .Details {
    background-color: #191d32;
    color: #faa916;
    border: 2px solid transparent;
    padding: 15px;
    font-size: 22px;
    border-radius: 10px;
    transition: 0.3s;
    width: 125px;
    box-sizing: border-box;
    height: 60px;
    :hover {
      background-color: #faa916;
      color: #191d32;
      transition: 0.3s;
      cursor: pointer;
    }
  }
  .Cart {
    background-color: #faa916;
    color: #191d32;
    border: 1px solid transparent;
    padding: 15px 30px;
    font-size: 32px;
    border-radius: 10px;
    transition: 0.3s;
    width: 125px;
    box-sizing: border-box;
    height: 60px;

    :hover {
      background-color: #191d32;
      color: #faa916;
      border: 1px solid transparent;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;
