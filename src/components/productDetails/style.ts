import styled from "styled-components";

export const ContainerMobile = styled.main`
  background-color: #ffffff;
  max-width: 80%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    color: #191d32;
    text-align: center;
    margin-top: 5px;
  }
  img {
    width: 80%;
    margin: 0 auto;
  }
  p {
    color: #191d32;
    text-align: center;
  }
  button {
    margin: 0 auto;
    background-color: #faa916;
    color: #191d32;
    border: 1px solid transparent;
    padding: 15px 30px;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.3s;
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
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.main`
  display: none;
  @media (min-width: 768px) {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #191d32;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 10px;
    
    h1{
        max-width: 80%;
        text-align: center;
        margin: 20px auto;
    }
    .informationContainer {
      display: flex;
      justify-content: space-around;
      img {
        max-width: 50%;
      }
      .descriptionContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 40%;
        p {
          font-size: 18px;
        }
      }
  }
  button {
        margin: 20px auto 0 auto;
        background-color: #faa916;
        color: #191d32;
        border: 1px solid transparent;
        padding: 15px 30px;
        font-weight: bold;
        font-size: 20px;
        border-radius: 10px;
        transition: 0.3s;
        box-sizing: border-box;
        height: 60px;

        :hover {
        background-color: #191d32;
        color: #faa916;
        transition: 0.3s;
        cursor: pointer;
        }
    }
`;
