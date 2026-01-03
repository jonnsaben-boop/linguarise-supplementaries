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
    choices: ["J’ai 20 ans.", "J’ai 25 ans.", "J’ai 15 ans.", "J’ai 35 ans."],
    correctIndex: 1,
    explanation:
      "Le son dit “I am twenty-five years old.” La bonne réponse est “J’ai 25 ans.”"
  },
  {
    audio: "audio/q2.mp3",
    choices: ["Elle a 28 ans.", "Elle a 16 ans.", "Elle a 18 ans.", "Elle a 80 ans."],
    correctIndex: 2,
    explanation:
      "Le son dit “She is eighteen years old.” La bonne réponse est “Elle a 18 ans.”"
  },
  {
    audio: "audio/q3.mp3",
    choices: ["Il a 40 ans.", "Il a 30 ans.", "Il a 20 ans.", "Il a 13 ans."],
    correctIndex: 1,
    explanation:
      "Le son dit “He is thirty years old.” La bonne réponse est “Il a 30 ans.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: ["J’ai 52 ans.", "J’ai 32 ans.", "J’ai 24 ans.", "J’ai 42 ans."],
    correctIndex: 3,
    explanation:
      "Le son dit “I am forty-two years old.” La bonne réponse est “J’ai 42 ans.”"
  },
  {
    audio: "audio/q5.mp3",
    choices: ["Elle a 10 ans.", "Elle a 12 ans.", "Elle a 20 ans.", "Elle a 15 ans."],
    correctIndex: 0,
    explanation:
      "Le son dit “She is ten years old.” La bonne réponse est “Elle a 10 ans.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: [
      "Mon anniversaire est le 25 mars.",
      "Mon anniversaire est le 5 mars.",
      "Mon anniversaire est le 15 mars.",
      "Mon anniversaire est le 15 avril."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “My birthday is March fifteenth.” La bonne réponse est “Mon anniversaire est le 15 mars.”"
  },
  {
    audio: "audio/q7.mp3",
    choices: [
      "Mon anniversaire est le 4 juin.",
      "Mon anniversaire est le 14 juillet.",
      "Mon anniversaire est le 4 juillet.",
      "Mon anniversaire est le 7 avril."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “My birthday is July fourth.” La bonne réponse est “Mon anniversaire est le 4 juillet.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: [
      "Mon anniversaire est le 24 décembre.",
      "Mon anniversaire est le 25 décembre.",
      "Mon anniversaire est le 5 décembre.",
      "Mon anniversaire est le 15 décembre."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “My birthday is December twenty-fifth.” La bonne réponse est “Mon anniversaire est le 25 décembre.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: [
      "Mon anniversaire est le 1er janvier.",
      "Mon anniversaire est le 10 janvier.",
      "Mon anniversaire est le 1er février.",
      "Mon anniversaire est le 11 janvier."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “My birthday is January first.” La bonne réponse est “Mon anniversaire est le 1er janvier.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: [
      "Je suis né le 25 mai.",
      "Je suis né le 5 mars.",
      "Je suis né le 5 mai.",
      "Je suis né le 15 mai."
    ],
    correctIndex: 2,
    explanation:
      "Le son dit “I was born on May fifth.” La bonne réponse est “Je suis né le 5 mai.”"
  },
  {
    audio: "audio/q11.mp3",
    choices: [
      "Elle est née le 10 août.",
      "Elle est née le 10 avril.",
      "Elle est née le 18 août.",
      "Elle est née le 8 octobre."
    ],
    correctIndex: 0,
    explanation:
      "Le son dit “She was born on August tenth.” La bonne réponse est “Elle est née le 10 août.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: [
      "Il est né le 20 février.",
      "Il est né le 2 février.",
      "Il est né le 22 février.",
      "Il est né le 12 février."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “He was born on February second.” La bonne réponse est “Il est né le 2 février.”"
  },
  {
    audio: "audio/q13.mp3",
    choices: ["Je suis né en 2008.", "Je suis né en 1998.", "Je suis né en 1990.", "Je suis né en 1989."],
    correctIndex: 1,
    explanation:
      "Le son dit “I was born in 1998.” La bonne réponse est “Je suis né en 1998.”"
  },
  {
    audio: "audio/q14.mp3",
    choices: ["Elle est née en 1995.", "Elle est née en 2005.", "Elle est née en 2015.", "Elle est née en 2025."],
    correctIndex: 1,
    explanation:
      "Le son dit “She was born in 2005.” La bonne réponse est “Elle est née en 2005.”"
  },
  {
    audio: "audio/q15.mp3",
    choices: ["Il est né en 2012.", "Il est né en 2001.", "Il est né en 2010.", "Il est né en 2020."],
    correctIndex: 2,
    explanation:
      "Le son dit “He was born in 2010.” La bonne réponse est “Il est né en 2010.”"
  },
  {
    audio: "audio/q16.mp3",
    choices: [
      "Mon anniversaire est en juin.",
      "Mon anniversaire est en août.",
      "Mon anniversaire est en mars.",
      "Mon anniversaire est en avril."
    ],
    correctIndex: 3,
    explanation:
      "Le son dit “My birthday is in April.” La bonne réponse est “Mon anniversaire est en avril.”"
  },
  {
    audio: "audio/q17.mp3",
    choices: [
      "Mon anniversaire est dimanche.",
      "Mon anniversaire est lundi.",
      "Mon anniversaire est vendredi.",
      "Mon anniversaire est mardi."
    ],
    correctIndex: 1,
    explanation:
      "Le son dit “My birthday is on Monday.” La bonne réponse est “Mon anniversaire est lundi.”"
  },
  {
    audio: "audio/q18.mp3",
    choices: ["J’ai 6 ans.", "J’ai 60 ans.", "J’ai 16 ans.", "J’ai 26 ans."],
    correctIndex: 2,
    explanation:
      "Le son dit “I am sixteen years old.” La bonne réponse est “J’ai 16 ans.”"
  },
  {
    audio: "audio/q19.mp3",
    choices: ["Elle a 20 ans.", "Elle a 21 ans.", "Elle a 12 ans.", "Elle a 31 ans."],
    correctIndex: 1,
    explanation:
      "Le son dit “She is twenty-one years old.” La bonne réponse est “Elle a 21 ans.”"
  },
  {
    audio: "audio/q20.mp3",
    choices: [
      "Mon anniversaire est le 29 septembre.",
      "Mon anniversaire est le 9 octobre.",
      "Mon anniversaire est le 19 septembre.",
      "Mon anniversaire est le 9 septembre."
    ],
    correctIndex: 3,
    explanation:
      "Le son dit “My birthday is September ninth.” La bonne réponse est “Mon anniversaire est le 9 septembre.”"
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
