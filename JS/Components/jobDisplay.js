let currentJob = document.querySelector(".banner__info-job")

const roles = [
  "Front End Developer.",
  "Software Engineer.",
  "React Specialist.",
]

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd

const jobDisplay = function () {
  isEnd = false
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentPhrase.push(roles[i][j])
      j++
    }

    if (isDeleting && j <= roles[i].length) {
      currentPhrase.pop(roles[i][j])
      j--
    }

    if (j === roles[i].length) {
      isDeleting = true
      isEnd = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
    }

    if (i === roles.length) {
      i = 0
    }

    currentJob.innerHTML = currentPhrase.join("")
  }
  const fasterSpeed = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (150 - 50) + 50
  const time = isEnd ? 2000 : isDeleting ? fasterSpeed : normalSpeed
  setTimeout(jobDisplay, time)
}

export default jobDisplay()
