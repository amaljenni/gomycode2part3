import React from "react"
import myimage from "./imageInPublic.png"

function Listitem(){
    let name="jenni"
    return(<div>
        <div>Hi {name}</div>
        <img src={myimage} />
        </div>
        )
  }
  export default Listitem;