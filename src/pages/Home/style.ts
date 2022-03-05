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

  .filteringInputs {
    margin: 20px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    select {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      :focus {
        outline: none;
      }
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 28px;
    }
    .filteringInputs {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: fit-content;
  align-items: center;
  margin-bottom: 15px;
  input {
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
    :focus {
      outline: none;
    }
  }

  svg {
    font-size: 20px;
    height: 100%;
    color: #191d32;
    padding: 0 15px 0 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    height: 44px;
  }
`;
