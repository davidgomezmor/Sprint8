import styled from "styled-components";
import galaxyBackground from '../assets/galaxy.jpg';
;

export const Header = styled.nav`
  .img-container {
    background-color: #f2f2f2;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    margin-right: auto; 
    margin-left: 460px; 
  }

  .logo {
    max-width: 100%;
    height: auto;
    margin-right: 10px;
    float: center;
    
  }
  @media screen and (max-width: 1200px) { 
  .img-container {
    margin-left: 0; 
  }
  }
  @media screen and (max-width: 710px) { 
  .img-container {
    margin-left: -200px; 
  }

}


  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 200px;
  }

  li {
    margin-left: 10px;
  }

  li a {
    display: block;
    color: #D3D3D3;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: sans-serif;
  }

  li a:hover {
    background-color: #111;
    color: yellow;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 24px;
  }
`;

export const NavBarStyle = styled.nav`
  background-color: black;
  padding: 18px 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333333;
  margin-right: auto;

  .home-link {
    color: #D3D3D3;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: sans-serif;
    transition: all 0.2s ease-in-out;
    border: 1px solid #333333;
    flex-grow: 1;
    cursor: pointer;
 
  }
  .home-link:hover {
    filter: brightness(150%);
    border-bottom: 2px solid #4997D0;
    padding-bottom: 10px;
  }
  .starships-link {
    color: #D3D3D3;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: sans-serif;
    border: 1px solid #333333;
    flex-grow: 1;
    filter: brightness(150%);
    border-bottom: 2px solid #4997D0;
    padding-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
`;


export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: sans-serif;
  letter-spacing: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${galaxyBackground});
  background-size: contain; 
  background-position: center; 
  font-family: sans-serif;
  letter-spacing: 4px;
  background-repeat: no-repeat;
`;

export const WelcomeButton = styled.button`
  background-color: #F5A623;
  color: black; 
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
  }
`;


export const Button = styled.button`
  background-color: #272727;
  color: white;
  border: 10px;
  border-radius: 10px;
  font-family: sans-serif;
  cursor: pointer;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  &:hover {
    background-color: darkgrey;
  }
`;

export const ButtonLoad = styled.button`
  background-color: #272727;
  color: white;
  border: none;
  border-radius: 20px;
  font-family: sans-serif; 
  font-size: 24px; 
  padding: 20px 40px; 
  margin: 0 auto; 
  display: block; 
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
  &:hover {
    background-color: yellow;
    color: black;
    
  }
`;


export const Container1 = styled.div`
  flex: 1;
  margin-bottom: 5%;
`;
export const Container2 = styled.div`

`;

export const ContainerDetails = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 6;
  width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  

  h2 {
    font-size: 36px;
    margin-bottom: 50px;
    justify-content: center;
  }

  button {
  background-color: #272727;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: sans-serif;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  font-size: 20px;
  margin-top: -290px; 
  margin-left: -150px;
 
  &:hover {
    background-color: darkgrey;
  }
}
 `;

export const ContainerInfo1 = styled.div`

 display: flex;
 font-family: sans-serif;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-size: contain; 
 background-position: center; 
 font-family: sans-serif;
 background-repeat: no-repeat;

`;
export const ContainerColumnsInfo = styled.div`
  display: flex;
  color: white;
 
`;

export const ContainerInfo2 = styled.div`

display: flex;
flex: 5;
font-family: sans-serif;
flex-direction: column;
background-size: contain; 
background-position: center; 
font-family: sans-serif;
background-repeat: no-repeat;
`;

export const ContainerInfo3 = styled.div`

display: flex;
flex: 5;
font-family: sans-serif;
flex-direction: column;
background-size: contain; 
background-position: center; 
font-family: sans-serif;
background-repeat: no-repeat;
`;



export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: sans-serif;
  letter-spacing: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  background-size: contain; 
  background-position: center; 
  font-family: sans-serif;
`;

export const RegisterBox = styled.div`
margin-bottom: 20px;


button {
  background-color: #F5A623;
  border-radius: 5px;
  color: black; 
  font-family: sans-serif;
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 4px;
   align-items: center;
  &:hover {
    background-color: yellow;
  }
}
`