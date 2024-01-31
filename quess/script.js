const secretNumber = Math.floor(Math.random() * 101);

document.getElementById("guessInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  const userGuess = document.getElementById("guessInput").value.trim();
  const feedbackElement = document.getElementById("feedback");
  const celebrationImage = document.getElementById("celebrationImage");
  const celebrationCon = document.getElementById("celebratecon");
  const refreshKnap = document.getElementById("refresh");
  const alarmKnap = document.getElementById("alarm");

  if (isNaN(userGuess) || userGuess === "" || userGuess < 0 || userGuess > 100) {
    feedbackElement.innerText = "Du gør noget forkert!";
    celebrationImage.style.display = "none"; // Skjul billedet ved forkert gæt
    alarmKnap.classList.remove("shake-element");
    void alarmKnap.offsetWidth; // Trigger reflow to restart the animation
    alarmKnap.classList.add("shake-element");

    return;
  }

  const numericGuess = parseInt(userGuess);

  if (numericGuess === secretNumber) {
    feedbackElement.innerText = "Du er så VILD! Tillykke!";
    feedbackElement.classList.add("celebrate");
    celebrationImage.style.display = "block";
    celebrationCon.style.display = "flex";
    refreshKnap.style.display = "block";

    celebrationCon.addEventListener("animationend", () => {
      setTimeout(() => {
        celebrationCon.style.display = "none";
      }, 1000);
    });

    feedbackElement.addEventListener("animationend", () => {
      feedbackElement.classList.remove("celebrate");
    });
  } else if (numericGuess < secretNumber) {
    feedbackElement.innerText = "Dit tal er for lavt. Prøv igen!";
    celebrationImage.style.display = "none";
    celebrationImage.style.display = "none";
  } else {
    feedbackElement.innerText = "Dit tal er for højt. Prøv igen!";
    celebrationImage.style.display = "none";
  }
}

function refresh() {
  location.reload();
}
