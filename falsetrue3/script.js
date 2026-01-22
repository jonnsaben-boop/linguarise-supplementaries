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
    choices: ["True", "False"],
    correctIndex: 0,
    explanation:
      "« Il est 8 heures du matin » correspond bien à “It is 8 AM.” La phrase en anglais est vraie."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["True", "False"],
    correctIndex: 1,
    explanation:
      "« Il est 11 heures du soir » correspond à 11 PM, pas 11 AM. La phrase en anglais est fausse."
  },
  {
    audio: "audio/q3.mp3",
    choices: ["True", "False"],
    correctIndex: 0,
    explanation:
      "« Mon rendez-vous est mardi » se traduit correctement par “My appointment is on Tuesday.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: ["True", "False"],
    correctIndex: 1,
    explanation:
      "« Mon rendez-vous est jeudi » ne correspond pas à Monday. La phrase en anglais est fausse."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["True", "False"],
    correctIndex: 0,
    explanation:
      "« Mon anniversaire est en novembre » se traduit correctement par “My birthday is in November.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: ["True", "False"],
    correctIndex: 1,
    explanation:
      "« Mon anniversaire est en février » ne correspond pas à March. La phrase en anglais est fausse."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["True", "False"],
    correctIndex: 0,
    explanation:
      "« Nous sommes au printemps » se traduit correctement par “It is spring.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: ["True", "False"],
    correctIndex: 1,
    explanation:
      "« Nous sommes en hiver » ne correspond pas à summer. La phrase en anglais est fausse."
  },
  {
    audio: "audio/q9.mp3",
    choices: ["True", "False"],
    correctIndex: 0,
    explanation:
      "« Mon rendez-vous est à 4 heures de l’après-midi » correspond bien à “My appointment is at 4 PM.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: ["True", "False"],
    correctIndex: 1,
    explanation:
      "« Mon rendez-vous est à 6 heures du matin » correspond à 6 AM, pas 6 PM. La phrase en anglais est fausse."
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
