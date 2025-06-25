import Gameplay from "./components/Gameplay";
import StartGame from "./components/StartGame";
import { useState } from "react";




function App() {
 const[isGamestarted,setisGamestarted]=useState(false);
const toggleGameplay=()=>{
  setisGamestarted((prev)=>!prev);
}
  return (
    <>
  
<>{isGamestarted?<Gameplay/>:<StartGame toggle={toggleGameplay} />}</>
   
    </>
  )
}

export default App
