import React from "react";
import './Cella.css'

export default function Cella(props) {
    function katt(){
        console.log("katt", props.index)
        props.katt(props.index)
    }

  return <div className="cella" onClick={() => {katt()}}>
    {props.jel}
    </div>;
}
