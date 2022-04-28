const infoBarLeftIcons = document.querySelectorAll(".info--bar--left--icon")

const iconClick = function () {
  Array.from(infoBarLeftIcons).forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      icon.src = `http://127.0.0.1:54186/Design/Imgs/${icon.id}--colour.png`
      icon.classList.add("info--bar--left--transform")
    })
    icon.addEventListener("mouseout", function () {
      icon.src = `http://127.0.0.1:54186/Design/Imgs/${icon.id}.png`
      icon.classList.remove("info--bar--left--transform")
    })
  })
}

export default iconClick
