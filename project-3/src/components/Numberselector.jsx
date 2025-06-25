import { useState } from 'react';
import styled from 'styled-components';
const Numberselector = (
  {seterror, error,selectedNumber, setselectedNumber }
) => {
  const array=[1,2,3,4,5,6];
  
const NumberselectorHandler = (value)=>{
  setselectedNumber(value);
  seterror("");

}
  return (
    <NumberselectorContainer>
      <p className='error'>{error}</p>
     <div className="flex">
     { array.map((Value,i)=>(
    
    <Box 
    isselected={Value===selectedNumber}
    key={i} onClick={()=>NumberselectorHandler(Value)}>
      {Value}</Box>
        ))}

     </div>
     <p>Select Number</p>
   
    </NumberselectorContainer>
  )
};

export default Numberselector;


const NumberselectorContainer = styled.div`
display:flex;
flex-direction: column;
align-items: end;

.flex{
display: flex;
gap:24px;
}
p{
font-size:24px;
font-weight:500;
}
.error{
color: red;

}

`;
const Box =styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items: center;
font-size:24px;
font-weight:700;
background-color:${props=>props.isselected?'#000':'#fff'};
color:${props=>props.isselected?'#fff':'#000'};


`;
