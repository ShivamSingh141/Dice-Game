import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <Rulescontainer>
      <h2>How to play dice game</h2>
      <div className="text">

<p> Select any number </p>
<p>Click on dice image</p>
<p>After click on dice if selected number is equal to dice number you will get same point as dice{""}</p>
<p>if you get wrong guess then 2 point will be deducted</p>

      </div>
    </Rulescontainer>
  )
}

export default Rules;


const Rulescontainer = styled.div`

max-width: 600px;
margin :0 auto;
background-color:rgb(211, 209, 209);
padding: 20px;
h2{
font-size: 30px;
}
.text{
margin-top:24px;
}

`;