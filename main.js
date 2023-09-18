
// Hamburger Menu

let hamburgerIcon = document.getElementById("hamburger")
let hamburgerCloseButton = document.getElementById("hamburger-close-button")
let hamburgerMenu = document.getElementById("menu")
let header = document.getElementById("header")

hamburgerIcon.addEventListener("click", (event) => {
    hamburgerMenu.setAttribute("data-menu-hidden", false)
    header.setAttribute("data-menu-hidden", false)

})

hamburgerCloseButton.addEventListener("click", (event) => {
    hamburgerMenu.setAttribute("data-menu-hidden", true)
    header.setAttribute("data-menu-hidden", true)

})