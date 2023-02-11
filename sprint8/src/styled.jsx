import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-family: 'Star Jedi', sans-serif;
  cursor: pointer;
  flex: 1;
  &:hover {
    background-color: darkgrey;
  }
`;

export const Container1 = styled.div`
  flex: 1;
`;
export const Container2 = styled.div`
  flex: 1;
`;

export const ContainerDetails = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  color: white;
  font-family: "Star Jedi", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-left: 20px;

  h2 {
  font-size: 36px;
  margin-bottom: 20px;
  justify-content: center;
}
`;



