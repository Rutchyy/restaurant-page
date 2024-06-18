import "./style.css"

import {makeHero, makeBody, makeOpeningHours} from "./home.js"

const container = document.querySelector(".container")

function constructHome() {
container.appendChild(makeHero())
container.appendChild(makeBody())
container.appendChild(makeOpeningHours())
}

constructHome()