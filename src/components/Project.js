import React from "react";
import Cards from "./Cards";

function Project(){
    const message = 'Projects'

    return(
    <div className="container">
        <h2>{message}</h2>
      <Cards/>
    </div>
    )
}

export default Project;