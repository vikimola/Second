import React from "react"
import twitter from "../assets/tw.png"
import insta from "../assets/insta.png"
import git from "../assets/git.png"
import fb from "../assets/fb.png"

export default function Footer(){
    return(
        <div className="footer">
            <img className="footer-img1" alt="" src={twitter} />
            <img className="footer-img2" alt="" src={fb} />
            <img className="footer-img3" alt="" src={insta} />
            <img className="footer-img4" alt="" src={git} />

        </div>
    )
}