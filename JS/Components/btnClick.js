const contactMe = document.querySelectorAll(".contact__me");
const devJobs = document.querySelector('.devjobs__click')
const devJobsGit = document.querySelector('.devjobs__click--git')

const contactMeClick = function () {
  Array.from(contactMe).forEach((button) => {
    button.addEventListener("click", function () {
      document.location =
        "mailto:josh.sutheran@gmail.com?subject=Front End Developer Role";
    });
  });
};

const devjobsClick = function() {
    devJobs.addEventListener('click', function() {
        window.open(`https://devjobs-web-app-eta.vercel.app/`)
    })
    devJobsGit.addEventListener('click', function() {
        window.open(`https://github.com/joshsutheran/devjobs-web-app`)
    })
}

export {
    contactMeClick,
    devjobsClick
}
