import React, {useState} from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Game from './game';

function Home() {
    const[isClick,setIsClick]=useState(false);
    const purple="red";
    const[bg,setBg] =useState(purple);
//   const navigate = useNavigate();
  
//   const handleRoute = () =>{ 
//     navigate.push("/game");
//   }
    if(isClick){
        return <Game/>
    }
  return (  
      <div>
          
          <button className='start_button'
            onClick={()=>setIsClick(true)}>
              start
          </button>
      </div>                   
          
        // <NavLink to="/game">
        //     start
        // </NavLink>
  );
}
export default Home;