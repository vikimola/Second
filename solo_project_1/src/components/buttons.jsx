import React from "react"
import ticket_img from "../assets/img3.png"
import website_img from "../assets/img4.png"

export default function Buttons() {
    return (
        <div className="buttons">
            <a href="https://ozorafestival.eu" target="_blank">
                <button className="button1">
                    <img className="button1-img" alt="" src={website_img} />
                    Website
                </button>
            </a>
            <a href="https://ozorafestival.eu/ticket/" target="_blank">
                <button className="button2">
                    <img className="button2-img" alt="" src={ticket_img}/>
                    Tickets
                </button>
            </a>

        </div>
    )
}