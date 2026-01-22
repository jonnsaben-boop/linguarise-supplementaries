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
    choices: ["I work here.", "I working here.", "I am work here.", "I works here."],
    correctIndex: 0,
    explanation:
      "La forme correcte au présent simple est “I work here.” Les autres choix sont incorrects (forme -ing, mauvais auxiliaire, ou -s avec I)."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["I am understand.", "I understanding.", "I understand.", "I understood now."],
    correctIndex: 2,
    explanation:
      "La forme correcte est “I understand.” Les autres choix sont incorrects (auxiliaire inutile, -ing, ou passé)."
  },
  {
    audio: "audio/q3.mp3",
    choices: [
      "She have an appointment today.",
      "She has an appointment today.",
      "She having an appointment today.",
      "She is have an appointment today."
    ],
    correctIndex: 1,
    explanation:
      "Avec “she”, on utilise “has” au présent simple : “She has an appointment today.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: ["We studies in the evening.", "We study in the evening.", "We studying in the evening.", "We are study in the evening."],
    correctIndex: 1,
    explanation:
      "Avec “we”, le présent simple est “We study …”. “studies” est pour he/she/it."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["I don’t has time.", "I am not have time.", "I don’t have time.", "I no have time."],
    correctIndex: 2,
    explanation:
      "La négation correcte au présent simple est “I don’t have time.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: ["It have a problem.", "It are a problem.", "It’s a problem.", "It problem."],
    correctIndex: 2,
    explanation:
      "La forme correcte est “It’s a problem.” (= It is a problem)."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["There is two options.", "There have two options.", "There are two options.", "There be two options."],
    correctIndex: 2,
    explanation:
      "Avec un pluriel (“two options”), on utilise “There are …” : “There are two options.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: ["I tired today.", "I am tire today.", "I’m tired today.", "I tiring today."],
    correctIndex: 2,
    explanation:
      "Pour un état, on utilise “I’m + adjectif” : “I’m tired today.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: ["I look for help.", "I looking for help.", "I am look for help.", "I’m looking for help."],
    correctIndex: 3,
    explanation:
      "La forme naturelle pour dire que tu cherches quelque chose est “I’m looking for …” : “I’m looking for help.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: ["Help me.", "You help me?", "Can you help me?", "Helping me?"],
    correctIndex: 2,
    explanation:
      "La demande polie et correcte est “Can you help me?”"
  },
  {
    audio: "audio/q11.mp3",
    choices: ["I am a question.", "I do a question.", "I has a question.", "I have a question."],
    correctIndex: 3,
    explanation:
      "La phrase correcte est “I have a question.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: ["I don’t knowing.", "I not know.", "I no know.", "I don’t know."],
    correctIndex: 3,
    explanation:
      "La négation correcte est “I don’t know.”"
  },
  {
    audio: "audio/q13.mp3",
    choices: ["I ready now.", "I be ready now.", "I am ready now.", "I readying now."],
    correctIndex: 2,
    explanation:
      "Pour dire ton état, on utilise “I am / I’m + adjectif” : “I am ready now.”"
  },
  {
    audio: "audio/q14.mp3",
    choices: ["There are no money.", "There no money.", "There is not moneys.", "There is no money."],
    correctIndex: 3,
    explanation:
      "“Money” est indénombrable, donc on dit “There is no money.”"
  },
  {
    audio: "audio/q15.mp3",
    choices: ["I am work now.", "I working now.", "I works now.", "I work now."],
    correctIndex: 3,
    explanation:
      "La forme correcte au présent simple est “I work now.”"
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
