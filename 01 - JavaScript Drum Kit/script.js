const audio = document.getElementsByTagName("audio");
const buttons = document.querySelectorAll(".key");

//play sound start animation
document.addEventListener("keypress", event => {
  const keyName = event.key;

  switch (keyName.toLowerCase()) {
    case "a":
      audio[0].currentTime = 0;
      audio[0].play();
      buttons[0].classList.add("playing");
      break;
    case "s":
      audio[1].currentTime = 0;
      audio[1].play();
      buttons[1].classList.add("playing");
      break;
    case "d":
      audio[2].currentTime = 0;
      audio[2].play();
      buttons[2].classList.add("playing");
      break;
    case "f":
      audio[3].currentTime = 0;
      audio[3].play();
      buttons[3].classList.add("playing");
      break;
    case "g":
      audio[4].currentTime = 0;
      audio[4].play();
      buttons[4].classList.add("playing");
      break;
    case "h":
      audio[5].currentTime = 0;
      audio[5].play();
      buttons[5].classList.add("playing");
      break;
    case "j":
      audio[6].currentTime = 0;
      audio[6].play();
      buttons[6].classList.add("playing");
      break;
    case "k":
      audio[7].currentTime = 0;
      audio[7].play();
      buttons[7].classList.add("playing");
      break;
    case "l":
      audio[8].currentTime = 0;
      audio[8].play();
      buttons[8].classList.add("playing");
      break;
    default:
      console.log("wrong button");
  }
});

//remove animation
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key =>
  key.addEventListener("transitionend", e => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  })
);

// document.addEventListener("keyup", event => {
//   const keyName = event.key;
//   console.log(keyName);
//   switch (keyName) {
//     case "a":
//       //   audio[0].pause();
//       //   audio[0].currentTime = 0;
//       buttons[0].classList.remove("playing");
//       break;
//     case "b":
//       audio[1].pause();
//       audio[1].currentTime = 0;
//       buttons[1].classList.remove("playing");
//       break;
//     default:
//       console.log("err");
//   }
// });
