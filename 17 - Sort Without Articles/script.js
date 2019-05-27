const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

function mapToHTMLandAppend(arr) {
  const ul = document.getElementById("bands");
  ul.innerHTML = arr.map(e => `<li>${e}</li>`).join("");
}

function sortBands(bands) {
  function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, "");
  }
  return bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
}

mapToHTMLandAppend(sortBands(bands));
