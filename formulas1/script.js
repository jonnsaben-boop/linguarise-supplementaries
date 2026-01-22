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
      "I need + nom",
      "I’m looking for + nom",
      "There is + nom",
      "I have + nom"
    ],
    correctIndex: 1,
    explanation:
      "Pour dire que tu cherches quelque chose dans un lieu public, la formule naturelle est “I’m looking for + nom”."
  },
  {
    audio: "audio/q2.mp3",
    choices: [
      "I want + nom",
      "Excuse me + question",
      "Can you + verbe…",
      "I’m + adjectif"
    ],
    correctIndex: 2,
    explanation:
      "Pour demander de l’aide de manière polie et directe, on utilise “Can you + verbe…”."
  },
  {
    audio: "audio/q3.mp3",
    choices: [
      "I have + nom",
      "I’m + adjectif / situation",
      "It’s + situation",
      "There are + nom"
    ],
    correctIndex: 1,
    explanation:
      "Pour dire comment tu te sens maintenant, on utilise “I’m + adjectif / situation”."
  },
  {
    audio: "audio/q4.mp3",
    choices: [
      "I don’t understand",
      "There is + nom",
      "I have + nom",
      "I’m looking for"
    ],
    correctIndex: 2,
    explanation:
      "Pour dire clairement que tu as un problème sans dramatiser, on utilise “I have + nom”."
  },
  {
    audio: "audio/q5.mp3",
    choices: [
      "I’m + adjectif",
      "I need + verbe",
      "It’s + situation / problème / moment",
      "Excuse me + question"
    ],
    correctIndex: 2,
    explanation:
      "Pour décrire une situation de manière neutre et objective, on utilise “It’s + situation”."
  },
  {
    audio: "audio/q6.mp3",
    choices: [
      "I have + nom",
      "There is / There are + nom",
      "I’m + adjectif",
      "I want + nom"
    ],
    correctIndex: 1,
    explanation:
      "Pour expliquer qu’une situation existe de façon objective, on utilise “There is / There are + nom”."
  },
  {
    audio: "audio/q7.mp3",
    choices: [
      "I’m busy",
      "I don’t understand / I don’t know",
      "There is no…",
      "I’m looking for"
    ],
    correctIndex: 1,
    explanation:
      "Pour dire simplement que tu ne comprends pas, on utilise “I don’t understand” ou “I don’t know”."
  },
  {
    audio: "audio/q8.mp3",
    choices: [
      "I need + nom",
      "Excuse me + question",
      "I’m + adjectif",
      "I have + nom"
    ],
    correctIndex: 1,
    explanation:
      "Pour commencer une interaction avec quelqu’un que tu ne connais pas, on utilise “Excuse me + question”."
  },
  {
    audio: "audio/q9.mp3",
    choices: [
      "Can you + verbe…",
      "I want + nom",
      "It’s + situation",
      "There are + nom"
    ],
    correctIndex: 0,
    explanation:
      "Pour demander quelque chose sans paraître agressif, on utilise “Can you + verbe…”."
  },
  {
    audio: "audio/q10.mp3",
    choices: [
      "I’m looking for",
      "I don’t know",
      "I need / I want + nom ou verbe",
      "There is"
    ],
    correctIndex: 2,
    explanation:
      "Pour exprimer un besoin ou une intention d’agir, on utilise “I need / I want + nom ou verbe”."
  },
  {
    audio: "audio/q11.mp3",
    choices: [
      "I + verbe + complément",
      "There is + nom",
      "It’s + situation",
      "Excuse me + question"
    ],
    correctIndex: 0,
    explanation:
      "Pour parler de toi, de ta situation ou de ton action, on utilise “I + verbe + complément”."
  },
  {
    audio: "audio/q12.mp3",
    choices: [
      "I’m + adjectif",
      "I don’t have + nom",
      "There is no…",
      "I want + nom"
    ],
    correctIndex: 1,
    explanation:
      "Pour dire que tu n’as pas quelque chose d’important, on utilise “I don’t have + nom”."
  },
  {
    audio: "audio/q13.mp3",
    choices: [
      "I have + nom",
      "There are + nom",
      "I’m + adjectif",
      "I need + verbe"
    ],
    correctIndex: 1,
    explanation:
      "Pour dire qu’il existe plusieurs options, on utilise “There are + nom”."
  },
  {
    audio: "audio/q14.mp3",
    choices: [
      "I’m + adjectif / situation",
      "I have + nom",
      "It’s + situation",
      "I don’t know"
    ],
    correctIndex: 0,
    explanation:
      "Pour dire ton état actuel sans explication, on utilise “I’m + adjectif / situation”."
  },
  {
    audio: "audio/q15.mp3",
    choices: [
      "I need information",
      "Excuse me + question",
      "I’m looking for + nom",
      "There is information"
    ],
    correctIndex: 2,
    explanation:
      "Pour chercher quelque chose dans un lieu public de manière naturelle, on utilise “I’m looking for + nom”."
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
