import React from "react";
import style from "./Card.module.css";
const Card=(props)=>{
    const card_classname=props.className;
return (<div className={typeof card_classname==='undefined'?(style.card+" "):style.card+" "+card_classname}>
{props.children}
</div>)
}

export default Card;