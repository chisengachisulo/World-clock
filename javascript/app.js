function updateTime() {
  //berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //lagos
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");
  lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
