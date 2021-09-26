import React from "react";
import Cards from "./Cards";

function Project(){
    const message = 'Projects'
    
    const projectArray = [
    
      {
        appLink:"hello",
        title:"test",
        gitLink:"holing",
        image:"test",
        Alttxt:"skjfd"
      },
    ]


    return(
    <div className="container">
        <h2>{message}</h2>
      <Cards/>
    </div>
    )
}



export default Project;