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
      "I have appointment tomorrow.",
      "I have the appointment tomorrow.",
      "I have an appointment tomorrow.",
      "I have a appointments tomorrow."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “I have an appointment tomorrow.”"
  },
  {
    audio: "audio/q2.mp3",
    choices: [
      "She has meeting on Monday.",
      "She has the meeting on Monday.",
      "She has a meeting on Monday.",
      "She has an meeting on Monday."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “She has a meeting on Monday.”"
  },
  {
    audio: "audio/q3.mp3",
    choices: [
      "I have a email from doctor.",
      "I have an email from the doctor.",
      "I have email from the doctor.",
      "I have the email from a doctor."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have an email from the doctor.”"
  },
  {
    audio: "audio/q4.mp3",
    choices: [
      "He has a error in the date.",
      "He has error in the date.",
      "He has an error in the date.",
      "He has the error in date."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He has an error in the date.”"
  },
  {
    audio: "audio/q5.mp3",
    choices: [
      "I have a medical appointment.",
      "I have medical appointment.",
      "I have an medical appointment.",
      "I have the medical appointment."
    ],
    correctIndex: 0,
    explanation:
      "La phrase correcte est “I have a medical appointment.”"
  },
  {
    audio: "audio/q6.mp3",
    choices: [
      "She drinks coffee in the morning.",
      "She drinks a coffee in the morning.",
      "She drinks an coffee in the morning.",
      "She drinks the coffee in morning."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “She drinks a coffee in the morning.”"
  },
  {
    audio: "audio/q7.mp3",
    choices: [
      "I have class this morning.",
      "I have a class this morning.",
      "I have an class this morning.",
      "I have the class this morning."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have a class this morning.”"
  },
  {
    audio: "audio/q8.mp3",
    choices: [
      "He watches television at night.",
      "He watches a television at night.",
      "He watches the TV at night.",
      "He watches an TV at night."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He watches the TV at night.”"
  },
  {
    audio: "audio/q9.mp3",
    choices: [
      "I have problem at work.",
      "I have a problem at work.",
      "I have an problem at work.",
      "I have the problem at work."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have a problem at work.”"
  },
  {
    audio: "audio/q10.mp3",
    choices: [
      "She takes bus in the morning.",
      "She takes a bus in the morning.",
      "She takes an bus in the morning.",
      "She takes the bus a morning."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “She takes a bus in the morning.”"
  },
  {
    audio: "audio/q11.mp3",
    choices: [
      "I have birthday in May.",
      "I have a birthday in May.",
      "I have an birthday in May.",
      "I have the birthday in May."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have a birthday in May.”"
  },
  {
    audio: "audio/q12.mp3",
    choices: [
      "He opens door.",
      "He opens a door.",
      "He opens the door.",
      "He opens an door."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He opens the door.”"
  },
  {
    audio: "audio/q13.mp3",
    choices: [
      "She reads book at night.",
      "She reads a book at night.",
      "She reads an book at night.",
      "She reads the book at night."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “She reads a book at night.”"
  },
  {
    audio: "audio/q14.mp3",
    choices: [
      "I have English class.",
      "I have an English class.",
      "I have a English class.",
      "I have the English class."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have an English class.”"
  },
  {
    audio: "audio/q15.mp3",
    choices: [
      "He works in hospital.",
      "He works in a hospital.",
      "He works in an hospital.",
      "He works in the hospital."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “He works in a hospital.”"
  },
  {
    audio: "audio/q16.mp3",
    choices: [
      "She waits doctor.",
      "She waits a doctor.",
      "She waits the doctor.",
      "She waits an doctor."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “She waits the doctor.”"
  },
  {
    audio: "audio/q17.mp3",
    choices: [
      "I have hour before appointment.",
      "I have an hour before the appointment.",
      "I have a hour before appointment.",
      "I have the hour before appointment."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have an hour before the appointment.”"
  },
  {
    audio: "audio/q18.mp3",
    choices: [
      "He writes email.",
      "He writes a email.",
      "He writes an email.",
      "He writes the email."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He writes an email.”"
  },
  {
    audio: "audio/q19.mp3",
    choices: [
      "She closes a door.",
      "She closes the door.",
      "She closes door.",
      "She closes an door."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “She closes the door.”"
  },
  {
    audio: "audio/q20.mp3",
    choices: [
      "I have a important appointment.",
      "I have important appointment.",
      "I have an important appointment.",
      "I have the important appointment."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “I have an important appointment.”"
  },
  {
    audio: "audio/q21.mp3",
    choices: [
      "He eats apple.",
      "He eats a apple.",
      "He eats an apple.",
      "He eats the apple."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He eats an apple.”"
  },
  {
    audio: "audio/q22.mp3",
    choices: [
      "She listens radio.",
      "She listens a radio.",
      "She listens to the radio.",
      "She listens an radio."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “She listens to the radio.”"
  },
  {
    audio: "audio/q23.mp3",
    choices: [
      "I have question.",
      "I have a question.",
      "I have an question.",
      "I have the question."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “I have a question.”"
  },
  {
    audio: "audio/q24.mp3",
    choices: [
      "He takes train.",
      "He takes a train.",
      "He takes the train.",
      "He takes an train."
    ],
    correctIndex: 2,
    explanation:
      "La phrase correcte est “He takes the train.”"
  },
  {
    audio: "audio/q25.mp3",
    choices: [
      "She has a idea.",
      "She has an idea.",
      "She has idea.",
      "She has the idea."
    ],
    correctIndex: 1,
    explanation:
      "La phrase correcte est “She has an idea.”"
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
