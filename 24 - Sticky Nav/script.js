const nav = document.querySelector("#main");
const header = document.querySelector("header");
function fixNav() {
  //   console.log(Number(nav.getBoundingClientRect().top));
  console.log(header.getBoundingClientRect().y);
  if (Number(header.getBoundingClientRect().y) <= -480) {
    nav.style.position = "fixed";
  } else {
    console.log("rel");
    nav.style.position = "relative";
  }
}

addEventListener("scroll", fixNav);
