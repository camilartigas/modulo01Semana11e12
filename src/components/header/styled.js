// Arquivo styled.js
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 120px;
  bottom: 0px;
  background-color: #f5f5f5; 
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
`;

export const NavStyled = styled.nav`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #000;
   
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px 20px;
  
`;