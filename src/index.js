import "./style.css"

import {makeHero, makeBody, makeOpeningHours} from "./home.js"
import { makeMenu } from "./menu.js";
import { makeAbout } from "./about.js";

const container = document.querySelector(".container")
const btns = document.querySelectorAll("nav button")

function clearPage() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function constructHome() {
    container.appendChild(makeHero())
    container.appendChild(makeBody())
    container.appendChild(makeOpeningHours())
}

constructHome()

btns.forEach(() => addEventListener("click", (event) => {
    let target = event.target
    console.log(target.id)
    switch(target.id) {
        case "home":
            clearPage()
            constructHome()
            break
        case "menu":
            clearPage()
            container.appendChild(makeMenu())
            break
        case "about":
            clearPage()
            container.appendChild(makeAbout())
            break
    }
}))