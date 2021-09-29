const hamburgerEle = document.querySelector("#hamburger");
const navMenuContainerEle = document.querySelector(".nav-menu-container");
const menuCategoryEles = document.querySelectorAll(".drop-a");
const menuCatElesArr = Array.from(menuCategoryEles);

hamburgerEle.addEventListener("click", () => {
    navMenuContainerEle.classList.toggle("mobile");
    hamburgerEle.classList.toggle("icon-close");
});

menuCatElesArr.forEach(cat => cat.addEventListener("click", e => {
    e.target.nextElementSibling.classList.toggle("mobile");
    e.target.firstElementChild.classList.toggle("active");
}));