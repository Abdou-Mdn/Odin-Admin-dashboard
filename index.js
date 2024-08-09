const closeMenu = document.getElementById("closeBtn");
const openMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const openSearch = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");
const search = document.getElementById("searchBar")

openSearch.addEventListener("click", () => {
    search.style.display = "block";
})

closeSearch.addEventListener("click", () => {
    search.style.display = "none";
})

openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
})

closeMenu.addEventListener("click",() => {
    menu.style.display = "none"
})

window.addEventListener("resize", () => {
    menu.style.display = "";
    search.style.display = "";
})