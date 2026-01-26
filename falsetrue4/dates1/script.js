/**
 * ✅ COMMENT UTILISER
 * 1) Mets les fichiers audio dans /audio nommés q1.mp3, q2.mp3, q3.mp3...
 * 2) Modifie le tableau quiz ci-dessous :
 *    - choices : les options de réponse affichées
 *    - correctIndex : quelle option est correcte (index à partir de 0)
 *    - explanation : pourquoi la bonne réponse est correcte (et pourquoi les autres sont fausses)
 *
 * ⚠️ IMPORTANT : Ne change pas les champs choices / audio / explanation si tu veux garder le contenu tel quel.
 */

const quiz = [
  {
    audio: "audio/q1.mp3",
    choices: ["Le 15 mars 2020.", "Le 25 mars 2022.", "Le 5 mars 2022.", "Le 15 mars 2022."],
    correctIndex: 3,
    explanation:
      "Le son dit “March fifteenth, two thousand twenty-two.” La bonne réponse est “Le 15 mars 2022.”"
  },
  {
    audio: "audio/q2.mp3",
    choices: ["Le 10 janvier 2020.", "Le 2 janvier 2020.", "Le 1er janvier 2020.", "Le 1er janvier 2022."],
    correctIndex: 2,
    explanation:
      "Le son dit “January first, two thousand twenty.” La bonne réponse est “Le 1er janvier 2020.”"
  },
  {
    audio: "audio/q3.mp3",
    choices: ["Le 14 juillet 2018.", "Le 4 juin 2018.", "Le 4 juillet 2018.", "Le 7 juillet 2018."],
    correctIndex: 2,
    explanation:
      "Le son dit “July fourth, two thousand eighteen.” La bonne réponse est “Le 4 juillet 2018.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: ["Le 20 octobre 2021.", "Le 12 octobre 2021.", "Le 22 octobre 2021.", "Le 22 octobre 2022."],
    correctIndex: 2,
    explanation:
      "Le son dit “October twenty-second, two thousand twenty-one.” La bonne réponse est “Le 22 octobre 2021.”"
  },
  {
    audio: "audio/q5.mp3",
    choices: ["Le 12 février 2019.", "Le 10 février 2019.", "Le 20 février 2019.", "Le 10 janvier 2019."],
    correctIndex: 1,
    explanation:
      "Le son dit “February tenth, two thousand nineteen.” La bonne réponse est “Le 10 février 2019.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: ["Le 3 mars 2017.", "Le 4 avril 2017.", "Le 3 avril 2017.", "Le 13 avril 2017."],
    correctIndex: 2,
    explanation:
      "Le son dit “April third, two thousand seventeen.” La bonne réponse est “Le 3 avril 2017.”"
  },
  {
    audio: "audio/q7.mp3",
    choices: ["Le 25 décembre 2018.", "Le 15 décembre 2016.", "Le 24 décembre 2016.", "Le 25 décembre 2016."],
    correctIndex: 3,
    explanation:
      "Le son dit “December twenty-fifth, two thousand sixteen.” La bonne réponse est “Le 25 décembre 2016.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: ["Le 10 juin 2023.", "Le 1er juillet 2023.", "Le 2 juin 2023.", "Le 1er juin 2023."],
    correctIndex: 3,
    explanation:
      "Le son dit “June first, two thousand twenty-three.” La bonne réponse est “Le 1er juin 2023.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: ["Le 19 septembre 2014.", "Le 9 août 2014.", "Le 9 septembre 2014.", "Le 14 septembre 2009."],
    correctIndex: 2,
    explanation:
      "Le son dit “September ninth, two thousand fourteen.” La bonne réponse est “Le 9 septembre 2014.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: ["Le 2 mai 2015.", "Le 20 mars 2015.", "Le 25 mai 2015.", "Le 20 mai 2015."],
    correctIndex: 3,
    explanation:
      "Le son dit “May twentieth, two thousand fifteen.” La bonne réponse est “Le 20 mai 2015.”"
  },
  {
    audio: "audio/q11.mp3",
    choices: ["Le 30 août 2020.", "Le 13 août 2020.", "Le 31 août 2020.", "Le 31 juillet 2020."],
    correctIndex: 2,
    explanation:
      "Le son dit “August thirty-first, two thousand twenty.” La bonne réponse est “Le 31 août 2020.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: ["Le 1er novembre 2013.", "Le 11 novembre 2013.", "Le 12 novembre 2013.", "Le 11 novembre 2011."],
    correctIndex: 1,
    explanation:
      "Le son dit “November eleventh, two thousand thirteen.” La bonne réponse est “Le 11 novembre 2013.”"
  },
  {
    audio: "audio/q13.mp3",
    choices: ["Le 20 mars 2024.", "Le 3 mars 2024.", "Le 2 avril 2024.", "Le 2 mars 2024."],
    correctIndex: 3,
    explanation:
      "Le son dit “March second, two thousand twenty-four.” La bonne réponse est “Le 2 mars 2024.”"
  },
  {
    audio: "audio/q14.mp3",
    choices: ["Le 19 janvier 2018.", "Le 29 janvier 2018.", "Le 28 janvier 2018.", "Le 29 janvier 2020."],
    correctIndex: 1,
    explanation:
      "Le son dit “January twenty-ninth, two thousand eighteen.” La bonne réponse est “Le 29 janvier 2018.”"
  },
  {
    audio: "audio/q15.mp3",
    choices: ["Le 10 octobre 2012.", "Le 5 octobre 2020.", "Le 15 octobre 2012.", "Le 5 octobre 2012."],
    correctIndex: 3,
    explanation:
      "Le son dit “October fifth, two thousand twelve.” La bonne réponse est “Le 5 octobre 2012.”"
  }
];

let current = 0;
let score = 0;
let selectedIndex = null;
let audioUnlocked = false;

// Stocker les réponses de l’utilisateur pour la révision finale
const userAnswers = []; // chaque élément : { selectedIndex, isCorrect }

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const doneScreen = document.getElementById("doneScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const progressBar = document.getElementById("progressBar");
const audioEl = document.getElementById("audio");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");

const scoreLine = document.getElementById("scoreLine");
const reviewList = document.getElementById("reviewList");

function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

async function playAudio() {
  try {
    audioEl.currentTime = 0;
    await audioEl.play();
  } catch (e) {
    // La lecture automatique peut être bloquée jusqu’à une interaction utilisateur (normal).
  }
}

function setProgress() {
  const total = quiz.length;
  const percent = Math.round((current / total) * 100);
  progressBar.style.width = `${percent}%`;
}

function renderChoices(q) {
  choicesEl.innerHTML = "";
  selectedIndex = null;
  nextBtn.disabled = true;
  feedbackEl.textContent = "";

  q.choices.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.textContent = text;

    btn.addEventListener("click", () => {
      // Mettre en évidence la sélection
      Array.from(choicesEl.children).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      selectedIndex = idx;
      nextBtn.disabled = false;
      feedbackEl.textContent = "";
    });

    choicesEl.appendChild(btn);
  });
}

function renderQuestion() {
  const q = quiz[current];
  setProgress();

  audioEl.src = q.audio;
  renderChoices(q);

  if (audioUnlocked) playAudio();
}

function buildReviewPage() {
  reviewList.innerHTML = "";

  quiz.forEach((q, i) => {
    const ua = userAnswers[i];
    const isCorrect = ua && ua.isCorrect;

    const card = document.createElement("div");
    card.className = "reviewCard";

    const qTitle = document.createElement("div");
    qTitle.className = "reviewQ";
    qTitle.innerHTML = `Question ${i + 1} ${
      isCorrect ? `<span class="tag correct">Correct</span>` : `<span class="tag wrong">Faux</span>`
    }`;

    const yourAnswerText =
      ua && ua.selectedIndex != null ? q.choices[ua.selectedIndex] : "(Aucune réponse sélectionnée)";
    const correctText = q.choices[q.correctIndex];

    const row1 = document.createElement("div");
    row1.className = "row";
    row1.innerHTML = `<strong>Ta réponse :</strong> ${yourAnswerText}`;

    const row2 = document.createElement("div");
    row2.className = "row";
    row2.innerHTML = `<strong>Bonne réponse :</strong> ${correctText}`;

    const explain = document.createElement("div");
    explain.className = "explain";
    explain.innerHTML = `<strong>Explication :</strong> ${q.explanation}`;

    card.appendChild(qTitle);
    card.appendChild(row1);
    card.appendChild(row2);
    card.appendChild(explain);

    reviewList.appendChild(card);
  });
}

function finishQuiz() {
  progressBar.style.width = "100%";

  hide(quizScreen);
  show(doneScreen);

  scoreLine.textContent = `Score : ${score} / ${quiz.length}`;

  buildReviewPage();
}

function nextQuestion() {
  const q = quiz[current];

  // Enregistrer la réponse + le score
  const isCorrect = selectedIndex === q.correctIndex;
  userAnswers[current] = { selectedIndex, isCorrect };

  if (isCorrect) score++;

  current++;

  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

startBtn.addEventListener("click", async () => {
  audioUnlocked = true;

  // Réinitialiser
  current = 0;
  score = 0;
  userAnswers.length = 0;

  hide(startScreen);
  hide(doneScreen);
  show(quizScreen);

  renderQuestion();

  // Ce clic “débloque” l’audio sur la plupart des navigateurs
  await playAudio();
});

replayBtn.addEventListener("click", () => {
  playAudio();
});

nextBtn.addEventListener("click", () => {
  if (selectedIndex === null) return;
  nextQuestion();
});

restartBtn.addEventListener("click", () => {
  hide(doneScreen);
  show(startScreen);
});
