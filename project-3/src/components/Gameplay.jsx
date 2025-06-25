
import RoleDice from './RoleDice';
import styled from 'styled-components';
import Numberselector from './Numberselector';
import Score from './Score';
import Rules from './Rules';

import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button';
const Gameplay=()=> {


const [scoree,setscoree]=useState(0);
 const [selectedNumber,setselectedNumber]=useState();
 const [currentDice,setCurrentDice]=useState(1);

 const[error,seterror]=useState("");
 const [rules,setrules]=useState(false);

const generateRandomNumber=(min,max)=>{
       
        return Math.floor(Math.random() * (max - min) + min);
    };
    

const roleDice=()=>{
const randomNumber=generateRandomNumber(1,7);

setCurrentDice((prev)=>randomNumber);
if(!selectedNumber){
  seterror("Please select a number");
  return;

}


if(selectedNumber===randomNumber){
  setscoree((prev)=>prev+5);




}
else{
  setscoree((prev)=>prev-1);
}
setselectedNumber(undefined);
};
const resetscore=()=>{
  setscoree(0);
  

}
  return (
    <Maincontainer>
     <div className="top-section">
      <Score scoree={scoree}/>
     <Numberselector 
     error={error}
     seterror={seterror}
     selectedNumber={selectedNumber}
     setselectedNumber={setselectedNumber}
     />
     </div>
     <RoleDice currentDice={currentDice}
     roleDice={roleDice} />
     <div className="btns">
     <OutlineButton onClick={resetscore} >Reset</OutlineButton>
     <Button onClick={()=>setrules((prev)=>!prev)}>
     
     {rules? "Hide rules" : "show rules"}</Button>
     </div>

     {rules&&<Rules/>}
    </Maincontainer>
  )
}

export default Gameplay;


const Maincontainer = styled.main`
padding-top: 50px;
.top-section{
  display: flex;
  justify-content: space-between;
  align-items: end;
  
}

.btns{
margin-top:40px;
gap:10px;
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
gap:10px;
}
`;

