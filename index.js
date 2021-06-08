const navToggle = document.querySelector(".nav-toggle")

const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click",function(){

    document.body.classList.toggle("nav-open")
})

navLinks.forEach(navLink => {

    navLink.addEventListener("click", () =>
    {
        document.body.classList.remove("nav-open")
    })
})