import React from "react";
import Cella from "./Cella";

export default function Jatekter(props) {

    function katt(adat){
        console.log("jatekterben", adat)
        props.katt(adat)
    }

  return (
    <>
      {props.lista.map((jel, i) => {
        return <Cella jel={jel} index = {i} key={i} katt = {katt}/>;
      })}
    </>
  );
}
