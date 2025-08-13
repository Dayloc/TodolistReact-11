import React ,{useState} from "react";

const Vlad = ()=>{

const[color,setColor]= useState("red")



return (
    
    <div>  
    
    <h1>Funciono</h1>
    <p>La variable inicialmente es {color}</p>
    <button onClick={()=>setColor("AMARILLO")}>Cambiará la variable color a AMARILLO</button>
    
    
    </div>

    )

}

export default Vlad;