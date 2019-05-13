let root = document.documentElement;
const inputSpacing = document.getElementById("spacing");
const inputBlur = document.getElementById("blur");
const inputBase = document.getElementById("base");

inputSpacing.addEventListener("input", () => {
  root.style.setProperty("--spacing", inputSpacing.value + "px");
});

inputBlur.addEventListener("input", () => {
  root.style.setProperty("--blur", inputBlur.value + "px");
});

inputBase.addEventListener("input", () => {
  root.style.setProperty("--base", inputBase.value);
});
