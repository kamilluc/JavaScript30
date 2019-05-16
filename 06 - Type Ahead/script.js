const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let result;

(async function getData() {
  let response = await fetch(endpoint);
  let data = await response.json();
  result = data;
})();

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keypress", () => {
  const text = searchInput.value.toLowerCase();
  const data = result.filter(e => {
    return e.city.toLowerCase().includes(text);
  });
  console.log(data);
  suggestions.innerHTML = "";
  data.forEach(element => {
    const li = document.createElement("li");
    li.innerText =
      "City: " + element.city + "\t\t" + "Population: " + element.population;
    suggestions.appendChild(li);
  });
});
