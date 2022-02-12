import React from "react"
import Me from "./imgs/me.jpg"

export default function Info() {
    return (
        <main className="main--info">
            <img src={Me} alt="mwah" />
            <h1>Francis Adewale</h1>
            <h2>Aspiring Full Stack Developer</h2>
            <h3>francisadewale.website</h3>
            <button>Email</button>
        </main>
    )
}