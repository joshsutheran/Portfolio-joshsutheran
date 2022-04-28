const projectImg = document.querySelector(".rest--countries--image")

const projectImgClick = function () {
  projectImg.addEventListener("mouseover", function (e) {
    projectImg.src = `http://127.0.0.1:50066/Design/Imgs/${projectImg.id}dark.png`
    projectImg.classList.add("project--img--transform")
  })
  projectImg.addEventListener("mouseout", function (img) {
    projectImg.src = `http://127.0.0.1:50066/Design/Imgs/${projectImg.id}light.png`
    projectImg.classList.remove("project--img--transform")
  })
}

export default projectImgClick
