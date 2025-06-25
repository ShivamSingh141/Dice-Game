

import styled from "styled-components";
 export const Button=styled.button` 
padding: 10px 20px;

color:white;
backgroind-radius: 5px;
background: #000000;

min-width:220px:
border:none;
font-size:16px;
cursor:pointer;
transition: 0.3s;
&:hover{
  background: #333;
  border:1px solid black;
    color: #fff;
  transition: 0.3s;
}

`;

 export const OutlineButton=styled(Button)` 
 background-color:white;
 color:black;
&:hover{
  background: black;
  border:1px solid transparent;
    color: white;

}


`;