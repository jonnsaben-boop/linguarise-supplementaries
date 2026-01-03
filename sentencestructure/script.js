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
    choices: ["I", "rice", "eat", "eat rice"],
    correctIndex: 2,
    explanation:
      "Le son dit “I eat rice.” Le verbe (l’action) dans cette phrase est “eat”."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["speaks", "English", "She", "speaks English"],
    correctIndex: 2,
    explanation:
      "Le son dit “She speaks English.” Le sujet (qui fait l’action) est “She”."
  },
  {
    audio: "audio/q3.mp3",
    choices: ["You", "live", "Texas", "in Texas"],
    correctIndex: 3,
    explanation:
      "Le son dit “You live in Texas.” Le complément (où) est “in Texas”."
  },
  {
    audio: "audio/q4.mp3",
    choices: ["He", "works", "at", "night"],
    correctIndex: 1,
    explanation:
      "Le son dit “He works at night.” Le verbe (l’action) est “works”."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["watch", "TV", "We", "watch TV"],
    correctIndex: 2,
    explanation:
      "Le son dit “We watch TV.” Le sujet est “We”."
  },
  {
    audio: "audio/q6.mp3",
    choices: ["They", "study", "day", "every day"],
    correctIndex: 3,
    explanation:
      "Le son dit “They study every day.” Le complément est “every day”."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["She", "drives", "car", "a car"],
    correctIndex: 1,
    explanation:
      "Le son dit “She drives a car.” Le verbe est “drives”."
  },
  {
    audio: "audio/q8.mp3",
    choices: ["I", "work", "hospital", "in a hospital"],
    correctIndex: 3,
    explanation:
      "Le son dit “I work in a hospital.” Le complément est “in a hospital”."
  },
  {
    audio: "audio/q9.mp3",
    choices: ["drink", "water", "You", "drink water"],
    correctIndex: 2,
    explanation:
      "Le son dit “You drink water.” Le sujet est “You”."
  },
  {
    audio: "audio/q10.mp3",
    choices: ["He", "plays", "football", "plays football"],
    correctIndex: 2,
    explanation:
      "Le son dit “He plays football.” Le complément est “football”."
  },
  {
    audio: "audio/q11.mp3",
    choices: ["She", "listens", "music", "to music"],
    correctIndex: 1,
    explanation:
      "Le son dit “She listens to music.” Le verbe est “listens”."
  },
  {
    audio: "audio/q12.mp3",
    choices: ["read", "books", "We", "at night"],
    correctIndex: 2,
    explanation:
      "Le son dit “We read books at night.” Le sujet est “We”."
  },
  {
    audio: "audio/q13.mp3",
    choices: ["They", "live", "here", "live here"],
    correctIndex: 2,
    explanation:
      "Le son dit “They live here.” Le complément est “here”."
  },
  {
    audio: "audio/q14.mp3",
    choices: ["I", "need", "help", "need help"],
    correctIndex: 1,
    explanation:
      "Le son dit “I need help.” Le verbe est “need”."
  },
  {
    audio: "audio/q15.mp3",
    choices: ["She", "works", "Monday", "on Monday"],
    correctIndex: 3,
    explanation:
      "Le son dit “She works on Monday.” Le complément est “on Monday”."
  },
  {
    audio: "audio/q16.mp3",
    choices: ["You", "speak", "English", "at work"],
    correctIndex: 1,
    explanation:
      "Le son dit “You speak English at work.” Le verbe est “speak”."
  },
  {
    audio: "audio/q17.mp3",
    choices: ["studies", "morning", "He", "every morning"],
    correctIndex: 2,
    explanation:
      "Le son dit “He studies every morning.” Le sujet est “He”."
  },
  {
    audio: "audio/q18.mp3",
    choices: ["We", "eat", "dinner", "at home"],
    correctIndex: 2,
    explanation:
      "Le son dit “We eat dinner at home.” Le complément principal (ce qu’on mange) est “dinner”."
  },
  {
    audio: "audio/q19.mp3",
    choices: ["They", "watch", "TV", "evening"],
    correctIndex: 1,
    explanation:
      "Le son dit “They watch TV in the evening.” Le verbe est “watch”."
  },
  {
    audio: "audio/q20.mp3",
    choices: ["coffee", "drinks", "in the morning", "She"],
    correctIndex: 2,
    explanation:
      "Le son dit “She drinks coffee in the morning.” Le complément de temps est “in the morning”."
  },
  {
    audio: "audio/q21.mp3",
    choices: ["I", "work", "day", "every day"],
    correctIndex: 3,
    explanation:
      "Le son dit “I work every day.” Le complément est “every day”."
  },
  {
    audio: "audio/q22.mp3",
    choices: ["You", "live", "family", "with your family"],
    correctIndex: 3,
    explanation:
      "Le son dit “You live with your family.” Le complément est “with your family”."
  },
  {
    audio: "audio/q23.mp3",
    choices: ["speaks", "French", "He", "at home"],
    correctIndex: 2,
    explanation:
      "Le son dit “He speaks French at home.” Le sujet est “He”."
  },
  {
    audio: "audio/q24.mp3",
    choices: ["football", "play", "Saturday", "on Saturday"],
    correctIndex: 3,
    explanation:
      "Le son dit “We play football on Saturday.” Le complément de temps est “on Saturday”."
  },
  {
    audio: "audio/q25.mp3",
    choices: ["She", "watches", "TV", "every night"],
    correctIndex: 1,
    explanation:
      "Le son dit “She watches TV every night.” Le verbe est “watches”."
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
