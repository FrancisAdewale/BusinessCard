import React from "react"
import Me from "./imgs/me.jpg"

export default function Info() {
    return (
        <>
            <img src={Me} alt="mwah" />
            <h3>Francis Adewale</h3>
            <h4>Aspiring Full Stack Developer</h4>
            <h5>Bachelors of Science Information Technology</h5>
            <a href="mailto:frankadewale@hotmail.com"><button><span class="icon"></span>Email</button></a>
        </>
    )
}