// document.querySelector(".message").textContent = "🕊️right guess";
// document.querySelector(".score").textContent = 30;
// console.log(document.querySelector(".guess").Value = 20);

// document.querySelector(".check").addEventListener("click", function () {
//   document.querySelector(".message").textContent = "🕊️right guess";
// });

let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 no number";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "right guess";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "black";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // for to high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".highscore").textcontent = score;
    } else {
      document.querySelector(".message").textContent = "Game over";
      document.querySelector(".score").textcontent = 0;
    }
  }
  // for to low
  else if (guess < secretnumber) {
    if (score < 1) {
      document.querySelector(".message").textcontent = "too low";
      score--;
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game finish !!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // for again
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#011e03e8";
    document.querySelector(".message").textContent = "start the game";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = " ";
  });
});
