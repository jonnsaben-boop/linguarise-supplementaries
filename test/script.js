/**
 * ✅ HOW TO USE
 * 1) Put audio files in /audio named q1.mp3, q2.mp3, q3.mp3...
 * 2) Edit the quiz array below:
 *    - choices: the answer options shown
 *    - correctIndex: which option is correct (0-based)
 *    - explanation: why the correct one is correct (and why others are wrong)
 */

const quiz = [
  // Days of the week (English words) — choices are written words (no sentences needed)
  {
    audio: "audio/q1.mp3",
    choices: ["Monday", "Thursday", "Saturday", "Tuesday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Monday”. La bonne réponse est donc “Monday”. Les autres choix sont d’autres jours."
  },
  {
    audio: "audio/q2.mp3",
    choices: ["Wednesday", "Sunday", "Tuesday", "Friday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Tuesday”. La bonne réponse est “Tuesday”. Les autres choix ne correspondent pas au son."
  },
  {
    audio: "audio/q3.mp3",
    choices: ["Thursday", "Monday", "Saturday", "Sunday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Thursday”. La bonne réponse est “Thursday”."
  },
  {
    audio: "audio/q4.mp3",
    choices: ["Friday", "Tuesday", "Wednesday", "Monday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Friday”. La bonne réponse est “Friday”."
  },
  {
    audio: "audio/q5.mp3",
    choices: ["Sunday", "Saturday", "Thursday", "Wednesday"],
    correctIndex: 1,
    explanation:
      "Le son dit “Saturday”. La bonne réponse est “Saturday”."
  },
  {
    audio: "audio/q6.mp3",
    choices: ["Sunday", "Friday", "Tuesday", "Thursday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Sunday”. La bonne réponse est “Sunday”."
  },
  {
    audio: "audio/q7.mp3",
    choices: ["Wednesday", "Monday", "Sunday", "Saturday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Wednesday”. La bonne réponse est “Wednesday”."
  },

  // Mixed repetition (same concept, different distractors)
  {
    audio: "audio/q8.mp3",
    choices: ["Tuesday", "Thursday", "Monday", "Friday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Monday”. La bonne réponse est “Monday”."
  },
  {
    audio: "audio/q9.mp3",
    choices: ["Sunday", "Wednesday", "Thursday", "Saturday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Thursday”. La bonne réponse est “Thursday”."
  },
  {
    audio: "audio/q10.mp3",
    choices: ["Friday", "Tuesday", "Sunday", "Monday"],
    correctIndex: 1,
    explanation:
      "Le son dit “Tuesday”. La bonne réponse est “Tuesday”."
  },
  {
    audio: "audio/q11.mp3",
    choices: ["Saturday", "Friday", "Wednesday", "Thursday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Wednesday”. La bonne réponse est “Wednesday”."
  },
  {
    audio: "audio/q12.mp3",
    choices: ["Sunday", "Saturday", "Tuesday", "Friday"],
    correctIndex: 3,
    explanation:
      "Le son dit “Friday”. La bonne réponse est “Friday”."
  },
  {
    audio: "audio/q13.mp3",
    choices: ["Monday", "Sunday", "Thursday", "Wednesday"],
    correctIndex: 1,
    explanation:
      "Le son dit “Sunday”. La bonne réponse est “Sunday”."
  },
  {
    audio: "audio/q14.mp3",
    choices: ["Tuesday", "Saturday", "Friday", "Monday"],
    correctIndex: 1,
    explanation:
      "Le son dit “Saturday”. La bonne réponse est “Saturday”."
  },

  // More randomized
  {
    audio: "audio/q15.mp3",
    choices: ["Thursday", "Wednesday", "Sunday", "Tuesday"],
    correctIndex: 3,
    explanation:
      "Le son dit “Tuesday”. La bonne réponse est “Tuesday”."
  },
  {
    audio: "audio/q16.mp3",
    choices: ["Friday", "Monday", "Thursday", "Saturday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Friday”. La bonne réponse est “Friday”."
  },
  {
    audio: "audio/q17.mp3",
    choices: ["Wednesday", "Sunday", "Monday", "Thursday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Monday”. La bonne réponse est “Monday”."
  },
  {
    audio: "audio/q18.mp3",
    choices: ["Saturday", "Tuesday", "Thursday", "Sunday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Saturday”. La bonne réponse est “Saturday”."
  },
  {
    audio: "audio/q19.mp3",
    choices: ["Sunday", "Friday", "Wednesday", "Monday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Wednesday”. La bonne réponse est “Wednesday”."
  },
  {
    audio: "audio/q20.mp3",
    choices: ["Thursday", "Tuesday", "Saturday", "Friday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Thursday”. La bonne réponse est “Thursday”."
  },

  // Final 5
  {
    audio: "audio/q21.mp3",
    choices: ["Sunday", "Monday", "Friday", "Tuesday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Sunday”. La bonne réponse est “Sunday”."
  },
  {
    audio: "audio/q22.mp3",
    choices: ["Wednesday", "Saturday", "Thursday", "Monday"],
    correctIndex: 0,
    explanation:
      "Le son dit “Wednesday”. La bonne réponse est “Wednesday”."
  },
  {
    audio: "audio/q23.mp3",
    choices: ["Tuesday", "Friday", "Sunday", "Thursday"],
    correctIndex: 1,
    explanation:
      "Le son dit “Friday”. La bonne réponse est “Friday”."
  },
  {
    audio: "audio/q24.mp3",
    choices: ["Saturday", "Monday", "Wednesday", "Tuesday"],
    correctIndex: 3,
    explanation:
      "Le son dit “Tuesday”. La bonne réponse est “Tuesday”."
  },
  {
    audio: "audio/q25.mp3",
    choices: ["Thursday", "Sunday", "Saturday", "Wednesday"],
    correctIndex: 2,
    explanation:
      "Le son dit “Saturday”. La bonne réponse est “Saturday”."
  }
];

let current = 0;
let score = 0;
let selectedIndex = null;
let audioUnlocked = false;

// Store user answers for end review
const userAnswers = []; // each item: { selectedIndex, isCorrect }

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
    // Autoplay can be blocked until user interaction (normal).
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
      // highlight selection
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
      isCorrect ? `<span class="tag correct">Correct</span>` : `<span class="tag wrong">Wrong</span>`
    }`;

    const yourAnswerText =
      ua && ua.selectedIndex != null ? q.choices[ua.selectedIndex] : "(No answer selected)";
    const correctText = q.choices[q.correctIndex];

    const row1 = document.createElement("div");
    row1.className = "row";
    row1.innerHTML = `<strong>Your answer:</strong> ${yourAnswerText}`;

    const row2 = document.createElement("div");
    row2.className = "row";
    row2.innerHTML = `<strong>Correct answer:</strong> ${correctText}`;

    const explain = document.createElement("div");
    explain.className = "explain";
    explain.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;

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

  scoreLine.textContent = `Score: ${score} / ${quiz.length}`;

  buildReviewPage();
}

function nextQuestion() {
  const q = quiz[current];

  // Save answer + score
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

  // Reset
  current = 0;
  score = 0;
  userAnswers.length = 0;

  hide(startScreen);
  hide(doneScreen);
  show(quizScreen);

  renderQuestion();

  // This click unlocks audio on most browsers
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
