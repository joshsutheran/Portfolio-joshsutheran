// IMPORT MODULES //
import jobDisplay from "./Components/jobDisplay.js"
import projectImgClick from "./Components/projectImgHandler.js"
import iconClick from "./Components/iconClickHandler.js"
import {
  handleResumeClick,
  handleResumeHover,
  handleResumeOut,
  resume,
} from "./Components/cvIcon.js"
import openURL from "./Components/onClickHandlers.js"

// HTML ELEMENTS //
const countriesBtn = document.getElementById("countries--api--url")

// Prevent Default Arrow Key Movements
window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault()
    }
  },
  false
)

// FUNCTION INITIALIZERS //
resume.addEventListener("mouseenter", handleResumeHover)
resume.addEventListener("mouseleave", handleResumeOut)
resume.addEventListener("click", handleResumeClick)
window.addEventListener("load", jobDisplay)
projectImgClick()
iconClick()