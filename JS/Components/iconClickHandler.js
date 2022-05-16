const socialLinks = document.querySelector('.info--bar__left').children;
console.dir(socialLinks)


const iconClick = function () {
  Array.from(socialLinks).forEach((icon) => {
    icon.addEventListener('mouseover', function(event) {
      icon.src = `./Design/Imgs/${icon.id}--colour.png`
      icon.classList.add('info--bar__left--transform')
    })
    icon.addEventListener('mouseout', function() {
      icon.src = `./Design/Imgs/${icon.id}.png`
      icon.classList.remove('info--bar__left--transform')
    })
    icon.addEventListener('click', function() {
      if(icon.id === 'github--icon') {
        window.open('https://github.com/joshsutheran')
      }
      if(icon.id === 'twitter--icon') {
        window.open('https://twitter.com/joshsutheran')
      }
      if(icon.id === 'linkedin--icon') {
        window.open('https://www.linkedin.com/in/josh-sutheran-04801b140/')
      }
      if(icon.id === 'mail--icon') {
        document.location = 'mailto:josh.sutheran@gmail.com?subject=Front End Developer Role'
      }
    })
  })
}

export default iconClick
