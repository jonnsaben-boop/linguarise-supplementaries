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
    choices: ["work", "at the hospital", "I", "on Monday morning"],
    correctIndex: 2,
    explanation: "Le sujet de la phrase est “I”."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["I", "hospital", "work", "morning"],
    correctIndex: 2,
    explanation: "Le verbe de la phrase est “work”."
  },
  {
    audio: "audio/q3.mp3",
    choices: ["I", "work", "at the hospital on Monday morning", "hospital"],
    correctIndex: 2,
    explanation: "Le complément est “at the hospital on Monday morning”."
  },
  {
    audio: "audio/q4.mp3",
    choices: ["appointment", "doctor", "has", "She"],
    correctIndex: 3,
    explanation: "Le sujet de la phrase est “She”."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["She", "appointment", "has", "today"],
    correctIndex: 2,
    explanation: "Le verbe de la phrase est “has”."
  },
  {
    audio: "audio/q6.mp3",
    choices: ["She", "has", "an important appointment with the doctor today", "doctor"],
    correctIndex: 2,
    explanation: "Le complément est “an important appointment with the doctor today”."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["study", "evening", "They", "home"],
    correctIndex: 2,
    explanation: "Le sujet de la phrase est “They”."
  },
  {
    audio: "audio/q8.mp3",
    choices: ["They", "study", "English", "evening"],
    correctIndex: 1,
    explanation: "Le verbe de la phrase est “study”."
  },
  {
    audio: "audio/q9.mp3",
    choices: ["They", "study", "English", "English at home every evening"],
    correctIndex: 3,
    explanation: "Le complément est “English at home every evening”."
  },
  {
    audio: "audio/q10.mp3",
    choices: ["class", "scheduled", "have", "We"],
    correctIndex: 3,
    explanation: "Le sujet de la phrase est “We”."
  },
  {
    audio: "audio/q11.mp3",
    choices: ["We", "class", "have", "afternoon"],
    correctIndex: 2,
    explanation: "Le verbe de la phrase est “have”."
  },
  {
    audio: "audio/q12.mp3",
    choices: ["We", "have", "a class scheduled for Tuesday afternoon", "Tuesday"],
    correctIndex: 2,
    explanation: "Le complément est “a class scheduled for Tuesday afternoon”."
  },
  {
    audio: "audio/q13.mp3",
    choices: ["works", "office", "He", "during the week"],
    correctIndex: 2,
    explanation: "Le sujet de la phrase est “He”."
  },
  {
    audio: "audio/q14.mp3",
    choices: ["He", "works", "office", "week"],
    correctIndex: 1,
    explanation: "Le verbe de la phrase est “works”."
  },
  {
    audio: "audio/q15.mp3",
    choices: ["He", "works", "late", "late at the office during the week"],
    correctIndex: 3,
    explanation: "Le complément est “late at the office during the week”."
  },
  {
    audio: "audio/q16.mp3",
    choices: ["meeting", "planned", "have", "You"],
    correctIndex: 3,
    explanation: "Le sujet de la phrase est “You”."
  },
  {
    audio: "audio/q17.mp3",
    choices: ["You", "meeting", "have", "Friday"],
    correctIndex: 2,
    explanation: "Le verbe de la phrase est “have”."
  },
  {
    audio: "audio/q18.mp3",
    choices: ["You", "have", "a meeting planned for Friday morning", "morning"],
    correctIndex: 2,
    explanation: "Le complément est “a meeting planned for Friday morning”."
  },
  {
    audio: "audio/q19.mp3",
    choices: ["drink", "coffee", "I", "before work"],
    correctIndex: 2,
    explanation: "Le sujet de la phrase est “I”."
  },
  {
    audio: "audio/q20.mp3",
    choices: ["I", "drink", "coffee", "home"],
    correctIndex: 1,
    explanation: "Le verbe de la phrase est “drink”."
  },
  {
    audio: "audio/q21.mp3",
    choices: ["I", "drink", "coffee", "coffee at home before work"],
    correctIndex: 3,
    explanation: "Le complément est “coffee at home before work”."
  },
  {
    audio: "audio/q22.mp3",
    choices: ["studies", "English", "She", "evening"],
    correctIndex: 2,
    explanation: "Le sujet de la phrase est “She”."
  },
  {
    audio: "audio/q23.mp3",
    choices: ["She", "studies", "English", "online"],
    correctIndex: 1,
    explanation: "Le verbe de la phrase est “studies”."
  },
  {
    audio: "audio/q24.mp3",
    choices: ["She", "studies", "English", "English online in the evening"],
    correctIndex: 3,
    explanation: "Le complément est “English online in the evening”."
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
