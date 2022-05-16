// IMPORT MODULES //
import jobDisplay from "./Components/jobDisplay.js"
import iconClick from "./Components/iconClickHandler.js"
import {
  handleResumeClick,
  handleResumeHover,
  handleResumeOut,
  resume,
} from "./Components/cvIcon.js"

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
iconClick()
