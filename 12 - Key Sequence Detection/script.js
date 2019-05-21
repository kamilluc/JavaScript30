const secret = "kamil";
const arr = [];
function easterEgg() {
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;
  //   console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
window.addEventListener("keypress", e => {
  arr.push(e.key);
  if (arr.length < secret.length) return;
  //   console.log(arr);
  if (arr.join("").toLowerCase() === secret) easterEgg();
  arr.shift();
});
