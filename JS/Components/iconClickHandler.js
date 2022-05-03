const headerIcons = document.querySelectorAll(".banner__language-icons")

const iconClick = function () {
  Array.from(headerIcons).forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      console.log(icon.src)
      icon.src = `http://127.0.0.1:54186/Design/Imgs/${icon.id}--colour.png`
      icon.classList.add("project__img--transform")
    })
    icon.addEventListener("mouseout", function () {
      icon.src = `http://127.0.0.1:54186/Design/Imgs/${icon.id}.png`
      icon.classList.remove("project__img--transform")
    })
  })
}

export default iconClick
