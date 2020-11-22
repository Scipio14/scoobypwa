//alert("hola caracola");
let i = 0;
const $socialMenu = document.querySelector(".social-menu");

function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
  // alert("hola");
}
console.log($socialMenu);
$socialMenu.addEventListener("click", () => {
  if (i == 0) {
    document.getElementById("item1").style.transform = "translateX(-150px)";
    document.getElementById("item2").style.transform =
      "translate(-100px, -100px)";
    document.getElementById("item3").style.transform = "translateY(-150px)";
    document.getElementById("item4").style.transform =
      "translate(100px, -100px)";
    document.getElementById("item5").style.transform = "translateX(150px)";
    i = 1;
  } else {
    document.getElementById("item1").style.transform = "translate(0)";
    document.getElementById("item2").style.transform = "translate(0)";
    document.getElementById("item3").style.transform = "translate(0)";
    document.getElementById("item4").style.transform = "translate(0)";
    document.getElementById("item5").style.transform = "translate(0)";
    i = 0;
  }
});

document.addEventListener(
  "DOMContentLoaded",
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
);
