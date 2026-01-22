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
    choices: [
      "I work at the hospital every morning.",
      "I working at the hospital every morning.",
      "I am work at the hospital every morning.",
      "I works at the hospital every morning."
    ],
    correctIndex: 0,
    explanation:
      "Au présent simple avec “I”, la forme correcte est “I work…”. Les autres choix sont incorrects (forme -ing, mauvais auxiliaire, ou -s avec I)."
  },
  {
    audio: "audio/q2.mp3",
    choices: [
      "She has an important appointment with the doctor today.",
      "She have an important appointment with the doctor today.",
      "She having an important appointment with the doctor today.",
      "She is have an important appointment with the doctor today."
    ],
    correctIndex: 0,
    explanation:
      "Avec “she”, on utilise “has” au présent simple : “She has an important appointment…”."
  },
  {
    audio: "audio/q3.mp3",
    choices: [
      "We study English at home in the evening.",
      "We studies English at home in the evening.",
      "We studying English at home in the evening.",
      "We are study English at home in the evening."
    ],
    correctIndex: 0,
    explanation:
      "Avec “we”, la forme correcte au présent simple est “We study…”. “studies” est pour he/she/it."
  },
  {
    audio: "audio/q4.mp3",
    choices: [
      "I don’t have enough time this morning.",
      "I don’t has enough time this morning.",
      "I am not have enough time this morning.",
      "I no have enough time this morning."
    ],
    correctIndex: 0,
    explanation:
      "La négation correcte est “I don’t have…”. On ne dit pas “don’t has”."
  },
  {
    audio: "audio/q5.mp3",
    choices: [
      "There are two options available right now.",
      "There is two options available right now.",
      "There have two options available right now.",
      "There be two options available right now."
    ],
    correctIndex: 0,
    explanation:
      "Avec un pluriel (“two options”), on utilise “There are…”."
  },
  {
    audio: "audio/q6.mp3",
    choices: [
      "I’m feeling tired after work today.",
      "I tired feeling after work today.",
      "I am feel tired after work today.",
      "I feeling tired after work today."
    ],
    correctIndex: 0,
    explanation:
      "La phrase correcte est “I’m feeling tired…”. Les autres choix ont une structure incorrecte."
  },
  {
    audio: "audio/q7.mp3",
    choices: [
      "I’m looking for the correct office in this building.",
      "I looking for the correct office in this building.",
      "I am look for the correct office in this building.",
      "I look for the correct office in this building."
    ],
    correctIndex: 0,
    explanation:
      "La formule naturelle est “I’m looking for…”."
  },
  {
    audio: "audio/q8.mp3",
    choices: [
      "Can you help me find the right room, please?",
      "You can help me find the right room, please?",
      "Helping me find the right room, please?",
      "Help me find the right room, please?"
    ],
    correctIndex: 0,
    explanation:
      "La demande polie et correcte est “Can you help me…?”"
  },
  {
    audio: "audio/q9.mp3",
    choices: [
      "I don’t know where my appointment is today.",
      "I don’t knowing where my appointment is today.",
      "I no know where my appointment is today.",
      "I don’t knowed where my appointment is today."
    ],
    correctIndex: 0,
    explanation:
      "La forme correcte est “I don’t know…”."
  },
  {
    audio: "audio/q10.mp3",
    choices: [
      "I am ready to start the class right now.",
      "I ready to start the class right now.",
      "I be ready to start the class right now.",
      "I readying to start the class right now."
    ],
    correctIndex: 0,
    explanation:
      "Pour dire ton état, on utilise “I am / I’m + adjectif” : “I am ready…”."
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
