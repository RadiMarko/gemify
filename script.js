"use strict";

const rollButton = document.getElementById("roll");
const holdButton = document.getElementById("hold");
const diePic = document.querySelector(".picture");
let currentScoreCounter1 = document.querySelector(".current-score-1");
let currentScoreCounter2 = document.querySelector(".current-score-2");
let totalScoreCounter1 = document.querySelector(".total-score-1");
let totalScoreCounter2 = document.querySelector(".total-score-2");
let resetButton = document.querySelector(".new-game");
let leftBox = document.querySelector(".middle-left-section");
let rightBox = document.querySelector(".middle-right-section");
let infoButton = document.querySelector(".info");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".close-modal");
let englishButton = document.getElementById("english-button");
let hungarianButton = document.getElementById("hungarian-button");

let rollResult;
let currentScore1 = 0;
let totalScore1 = 0;
let currentScore2 = 0;
let totalScore2 = 0;
let activePlayer = 1;
let gameState = 1;
let language = 0;

leftBox.classList.add("active");

rollButton.addEventListener("mousedown", function () {
  diePic.classList.remove("shrinking");
  diePic.classList.add("growing");
});

rollButton.addEventListener("mouseup", function () {
  diePic.classList.remove("growing");
  diePic.classList.add("shrinking");
});

rollButton.addEventListener("click", function () {
  rollResult = Math.trunc(Math.random() * 6) + 1;

  if (activePlayer === 1) {
    if (rollResult === 1) {
      diePic.src = "Bomb.png";
      currentScore1 = 0;
      currentScoreCounter1.textContent = currentScore1;
      activePlayer = 1 ? (activePlayer = 2) : (activePlayer = 1);
      leftBox.classList.remove("active");
      rightBox.classList.add("active");
    } else if (rollResult === 2) {
      diePic.src = "Gemblue.png";
      currentScore1 += 1;
      currentScoreCounter1.textContent = currentScore1;
    } else if (rollResult === 3) {
      diePic.src = "Gemgreen.png";
      currentScore1 += 1;
      currentScoreCounter1.textContent = currentScore1;
    } else if (rollResult === 4) {
      diePic.src = "Gempurple.png";
      currentScore1 += 1;
      currentScoreCounter1.textContent = currentScore1;
    } else if (rollResult === 5) {
      diePic.src = "Gemred.png";
      currentScore1 += 1;
      currentScoreCounter1.textContent = currentScore1;
    } else if (rollResult === 6) {
      diePic.src = "Crown.png";
      currentScore1 += 2;
      currentScoreCounter1.textContent = currentScore1;
    }
  } else if (activePlayer === 2) {
    if (rollResult === 1) {
      diePic.src = "Bomb.png";
      currentScore2 = 0;
      currentScoreCounter2.textContent = currentScore2;
      activePlayer = 2 ? (activePlayer = 1) : (activePlayer = 2);
      rightBox.classList.remove("active");
      leftBox.classList.add("active");
    } else if (rollResult === 2) {
      diePic.src = "Gemblue.png";
      currentScore2 += 1;
      currentScoreCounter2.textContent = currentScore2;
    } else if (rollResult === 3) {
      diePic.src = "Gemgreen.png";
      currentScore2 += 1;
      currentScoreCounter2.textContent = currentScore2;
    } else if (rollResult === 4) {
      diePic.src = "Gempurple.png";
      currentScore2 += 1;
      currentScoreCounter2.textContent = currentScore2;
    } else if (rollResult === 5) {
      diePic.src = "Gemred.png";
      currentScore2 += 1;
      currentScoreCounter2.textContent = currentScore2;
    } else if (rollResult === 6) {
      diePic.src = "Crown.png";
      currentScore2 += 2;
      currentScoreCounter2.textContent = currentScore2;
    }
  }
});

holdButton.addEventListener("click", function () {
  if (activePlayer === 1) {
    totalScore1 = totalScore1 + currentScore1;
    totalScoreCounter1.textContent = totalScore1;
    currentScore1 = 0;
    currentScoreCounter1.textContent = 0;
    diePic.src = "Unknown.png";
    activePlayer = 1 ? (activePlayer = 2) : (activePlayer = 1);
    leftBox.classList.remove("active");
    rightBox.classList.add("active");
    if (totalScore1 >= 30) {
      document.querySelector(".player-1").textContent = "🎉 🏆 🎉";
      gameState = 0;
      rollButton.classList.add("hidden");
      holdButton.classList.add("hidden");
    }
  } else if (activePlayer === 2) {
    totalScore2 = totalScore2 + currentScore2;
    totalScoreCounter2.textContent = totalScore2;
    currentScore2 = 0;
    currentScoreCounter2.textContent = 0;
    diePic.src = "Unknown.png";
    activePlayer = 2 ? (activePlayer = 1) : (activePlayer = 2);
    rightBox.classList.remove("active");
    leftBox.classList.add("active");
    if (totalScore2 >= 30) {
      document.querySelector(".player-2").textContent = "🎉 🏆 🎉";
      rollButton.classList.add("hidden");
      holdButton.classList.add("hidden");
    }
  }
});

resetButton.addEventListener("click", function () {
  currentScore1 = 0;
  totalScore1 = 0;
  currentScore2 = 0;
  totalScore2 = 0;
  currentScoreCounter1.textContent = 0;
  totalScoreCounter1.textContent = 0;
  currentScoreCounter1.textContent = 0;
  totalScoreCounter2.textContent = 0;
  if (language === 0) {
    document.querySelector(".player-1").textContent = "Player 1";
    document.querySelector(".player-2").textContent = "Player 2";
  } else if (language === 1) {
    document.querySelector(".player-1").textContent = "Játékos 1";
    document.querySelector(".player-2").textContent = "Játékos 2";
  }

  rollButton.classList.remove("hidden");
  holdButton.classList.remove("hidden");
  activePlayer = 1;
  leftBox.classList.add("active");
  rightBox.classList.remove("active");
  diePic.src = "Unknown.png";
});

infoButton.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  closeModal.classList.toggle("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  closeModal.classList.toggle("hidden");
});

hungarianButton.addEventListener("click", function () {
  language = 1;
  if (language === 1) {
    document.querySelector(".player-1").textContent = "Játékos 1";
    document.querySelector(".player-2").textContent = "Játékos 2";
    rollButton.textContent = "Dob";
    holdButton.textContent = "Tart";
    document.querySelector(".rule-title").textContent = "Szabályok";
    document.getElementById("rule-line-1").textContent =
      "Kattints a 'Dob'-ra a kockadobáshoz.";
    document.getElementById("rule-line-2").textContent =
      "Kattints a 'Tart'-ra a jelenlegi pontok (fekete szám) hozzáadásához az összpontszámhoz (arany, aláhúzott szám). Ha tartasz, a másik játékos köre is elkezdődik.";
    document.getElementById("rule-line-3").textContent =
      "Az a játékos nyer, akinek az összpontszáma először eléri vagy túllépi a 30-at.";
    document.getElementById("rule-line-4").textContent =
      "Kockáztatsz és dobsz, vagy inkább biztonságosan játszol és gyakran tartasz?";
    document.getElementById("gem-text").textContent =
      "A drágakövek gyakoriak, 1 pontot adnak az aktív játékosnak. Esély: 4 a 6-hoz.";
    document.getElementById("crown-text").textContent =
      "A koronák szerencsések, 2 pontot adnak az aktív játékosnak. Esély: 1 a 6-hoz.";
    document.getElementById("bomb-text").textContent =
      "A bombák balszerencsések, mivel lenullázzák az aktív játékos jelenlegi pontszámát, és elindítják a másik játékos körét. Esély: 1 a 6-hoz.";
  } else if (language === 0) {
    document.querySelector(".player-1").textContent = "Player 1";
    document.querySelector(".player-2").textContent = "Player 2";
    rollButton.textContent = "Roll";
    holdButton.textContent = "Hold";
    document.querySelector(".rule-title").textContent = "Rules";
    document.getElementById("rule-line-1").textContent =
      "Click 'Roll' to roll the dice.";
    document.getElementById("rule-line-2").textContent =
      "Click 'Hold' to add current value (black number) to total value (gold, underlined number). If you hold, the other player's turn starts.";
    document.getElementById("rule-line-3").textContent =
      "The first player to gain 30 or more total points wins.";
    document.getElementById("rule-line-4").textContent =
      "Will you take risks and keep rolling, or play safe instead and hold often?";
    document.getElementById("gem-text").textContent =
      "Gems are the most common, and rolling one gives the active player 1 point. Chance: 4/6th.";
    document.getElementById("crown-text").textContent =
      "Crowns are lucky, as rolling one gives the active player 2 points. Chance: 1/6th.";
    document.getElementById("bomb-text").textContent =
      "Bombs are unlucky, as rolling one nullifies the active player's current score and starts the turn of the other player. Chance: 1/6th.";
  }
});

englishButton.addEventListener("click", function () {
  language = 0;
  if (language === 1) {
    document.querySelector(".player-1").textContent = "Játékos 1";
    document.querySelector(".player-2").textContent = "Játékos 2";
    rollButton.textContent = "Dob";
    holdButton.textContent = "Tart";
    document.querySelector(".rule-title").textContent = "Szabályok";
    document.getElementById("rule-line-1").textContent =
      "Kattints a 'Dob'-ra a kockadobáshoz.";
    document.getElementById("rule-line-2").textContent =
      "Kattints a 'Tart'-ra a jelenlegi pontok (fekete szám) hozzáadásához az összpontszámhoz (arany, aláhúzott szám). Ha tartasz, a másik játékos köre is elkezdődik.";
    document.getElementById("rule-line-3").textContent =
      "Az a játékos nyer, akinek az összpontszáma először eléri vagy túllépi a 30-at.";
    document.getElementById("rule-line-4").textContent =
      "Kockáztatsz és dobsz, vagy inkább biztonságosan játszol és gyakran tartasz?";
    document.getElementById("gem-text").textContent =
      "A drágakövek gyakoriak, 1 pontot adnak az aktív játékosnak. Esély: 4 a 6-hoz.";
    document.getElementById("crown-text").textContent =
      "A koronák szerencsések, 2 pontot adnak az aktív játékosnak. Esély: 1 a 6-hoz.";
    document.getElementById("bomb-text").textContent =
      "A bombák balszerencsések, mivel lenullázzák az aktív játékos jelenlegi pontszámát, és elindítják a másik játékos körét. Esély: 1 a 6-hoz.";
  } else if (language === 0) {
    document.querySelector(".player-1").textContent = "Player 1";
    document.querySelector(".player-2").textContent = "Player 2";
    rollButton.textContent = "Roll";
    holdButton.textContent = "Hold";
    document.querySelector(".rule-title").textContent = "Rules";
    document.getElementById("rule-line-1").textContent =
      "Click 'Roll' to roll the dice.";
    document.getElementById("rule-line-2").textContent =
      "Click 'Hold' to add current value (black number) to total value (gold, underlined number). If you hold, the other player's turn starts.";
    document.getElementById("rule-line-3").textContent =
      "The first player to gain 30 or more total points wins.";
    document.getElementById("rule-line-4").textContent =
      "Will you take risks and keep rolling, or play safe instead and hold often?";
    document.getElementById("gem-text").textContent =
      "Gems are the most common, and rolling one gives the active player 1 point. Chance: 4/6th.";
    document.getElementById("crown-text").textContent =
      "Crowns are lucky, as rolling one gives the active player 2 points. Chance: 1/6th.";
    document.getElementById("bomb-text").textContent =
      "Bombs are unlucky, as rolling one nullifies the active player's current score and starts the turn of the other player. Chance: 1/6th.";
  }
});
