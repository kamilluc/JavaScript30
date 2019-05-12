const clock = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  document.querySelector(".hour-hand").style.transform = `rotate(${90 +
    30 * hours}deg)`;
  document.querySelector(".min-hand").style.transform = `rotate(${90 +
    6 * minutes}deg)`;
  document.querySelector(".second-hand").style.transform = `rotate(${90 +
    6 * seconds}deg)`;
};

setInterval(clock, 1000);
clock();
