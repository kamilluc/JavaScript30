const li = document.querySelectorAll("[data-time]");

const totalTimeInSeconds = [...li].reduce((acc, el) => {
  //moze byc li[0].dataset.time czyli bez konwersji na liste
  let time = el
    .getAttribute("data-time")
    .trim()
    .split(":");
  return (acc += parseFloat(time[0] * 60) + parseFloat(time[1]));
}, 0);

function secondsToTime(seconds) {
  const date = new Date(seconds * 1000);
  let time = [];
  time.push(date.getUTCHours());
  time.push(date.getUTCMinutes());
  time.push(date.getUTCSeconds());
  return time;
}

const totalTime = secondsToTime(totalTimeInSeconds);

console.log("total time =", `${totalTime[0]}:${totalTime[1]}:${totalTime[2]}`);

// const fun = [...li].map(l => {
//   let time = l.getAttribute("data-time").split(":");
//   return time;
// });
// let x = 0;
// fun.forEach(el => {
//   x = x + Number(el[1]) + Number(el[0]) * 60;
// });
