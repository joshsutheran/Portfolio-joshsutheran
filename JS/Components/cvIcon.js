export const resume = document.querySelector(".resume")

export const handleResumeHover = () => {
  resume.innerHTML = `<img class="download--btn" src="./Design/Imgs/download-button.png" alt="Download Icon">`
}

export const handleResumeOut = () => {
  resume.innerHTML = "CV"
}

export const handleResumeClick = () => {
  window.location = www.google.co.uk
}
