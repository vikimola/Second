import React from "react"
import ozora_img from "../assets/ozora.jpg"

export default function Header(){
    return(
        <div className="header">
        <img className="header-img" alt="ozora" src={ozora_img}/>
        </div>
    )
}