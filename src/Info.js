import React from "react"
import Me from "./imgs/me.jpg"

export default function Info() {
    return (
        <>
            <img src={Me} alt="mwah" />
            <h3>Francis Adewale</h3>
            <h4>Aspiring Full Stack Developer</h4>
            <h5>francisadewale.website</h5>
            <button>Email</button>
        </>
    )
}