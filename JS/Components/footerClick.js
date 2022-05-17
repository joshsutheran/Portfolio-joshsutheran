const footerLinks = document.querySelector(".footer__icons");

const footerLinksClick = function () {
  Array.from(footerLinks.children).forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      icon.src = `./Design/Imgs/${icon.id}--green.png`;
    });
    icon.addEventListener("mouseout", function () {
      icon.src = `./Design/Imgs/${icon.id}.png`;
    });
    icon.addEventListener("click", function () {
      if (icon.id === "github--icon") {
        window.open("https://github.com/joshsutheran");
      }
      if (icon.id === "twitter--icon") {
        window.open("https://twitter.com/joshsutheran");
      }
      if (icon.id === "linkedin--icon") {
        window.open("https://www.linkedin.com/in/josh-sutheran-04801b140/");
      }
      if (icon.id === "mail--icon") {
        document.location =
          "mailto:josh.sutheran@gmail.com?subject=Front End Developer Role";
      }
    });
  });
};

export default footerLinksClick;
