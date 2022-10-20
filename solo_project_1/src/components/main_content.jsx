import React from "react"
import Buttons from "./buttons.jsx";

export default function MainContent() {
    return (
        <div className="main_content">

            <div className="main_content-title">
                <p>O.Z.O.R.A</p>
                <p>PSYCHEDELIC TRIBAL GATHERING</p>
                <p><a target="_blank"
                      href="https://www.google.com/maps/place/Igar,+D%C3%A1dpuszta,+7015+Magyarorsz%C3%A1g/@46.7695605,18.4369637,14z/data=!3m1!4b1!4m5!3m4!1s0x474277c9c401ba37:0x13bdae91ead24365!8m2!3d46.769561!4d18.4369637">
                    DADPUSZTA, HUNGARY</a></p>
            </div>

            <Buttons/>

            <div className="main_content-text">
                <p className="main_content-text-titles">About</p>
                <p>The festival has been held on an estate in Ozora near the small village of Dádpuszta every year since
                    2004.It's one of the largest
                    psychedelic trance festivals in Europe.</p>
                <p className="main_content-text-titles">Infos</p>
                <p>Ozora is considered one of the "leading festivals" around the world, "one of the largest
                    gatherings of trance and psychedelic music in the world".</p>
            </div>

        </div>
    )
}