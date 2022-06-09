function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let localHour = hh.toLocaleString();
  let localMinuts = mm.toLocaleString();
  let localSeconds = ss.toLocaleString();

  if (localHour < 10) localHour = "0" + localHour;
  if (localMinuts < 10) localMinuts = "0" + localMinuts;
  if (localSeconds < 10) localSeconds = "0" + localSeconds;

  let time = localHour + ":" + localMinuts + ":" + localSeconds;

  const clockContainer = document.querySelector(".clock-container");
  clockContainer.innerHTML = "<h1 class='clock'>" + time + "</h1>";

  setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime()
