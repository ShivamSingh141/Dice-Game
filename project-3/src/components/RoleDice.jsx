import styled from "styled-components";

const RoleDice = (
    { roleDice, currentDice }
) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;


const DiceContainer = styled.div`
p{
font-size: 24px;
}


.dice{
cursor: pointer;
}
margin-top: 50px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;