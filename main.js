const QUESTIONS = [
  {
    id: "1",
    label: "What is ((4 * 33) /6) = A?",
    answers: [
      {
        text: "A = 22",
        value: "22",
      },
      {
        text: "A = 24",
        value: "24",
      },
      {
        text: "A = 132",
        value: "132",
      },
      {
        text: "A = 123",
        value: "123",
      },
    ],
    correctAnswer: "22",
  },
  {
    id: "2",
    label: "What is ((B * 4) / 4) = 8?",
    answers: [
      {
        text: "B = 8",
        value: "8",
      },
      {
        text: "B = 12",
        value: "12",
      },
      {
        text: "B = 4",
        value: "4",
      },
      {
        text: "B = 3",
        value: "3",
      },
    ],
    correctAnswer: "B = 8",
  },
  {
    id: "3",
    label: "What is (22 + 5 * (35 + 193)) = C?",
    answers: [
      {
        text: "C = 1126",
        value: "1126",
      },
      {
        text: "C = 1162",
        value: "1162",
      },
      {
        text: "C = 6156",
        value: "6156",
      },
      {
        text: "C = 390",
        value: "390",
      },
    ],
    correctAnswer: "1162",
  },
  {
    id: "4",
    label: "What is  (H + 4 * (D + 13)) = 90?",
    answers: [
      {
        text: "H = 12 , D = 9",
        value: "12 , 9",
      },
      {
        text: "H = 22 , D = 6",
        value: "22 , 6",
      },
      {
        text: "H = 22 , D = 4",
        value: "22 , 4",
      },
      {
        text: "H = 14 , D = 3",
        value: "14, 3",
      },
    ],
    correctAnswer: "22 , 4",
  },
  {
    id: "5",
    label: "What is ((23 - 2) * (24 + 3) / F) = 63?",
    answers: [
      {
        text: "F = - 24",
        value: "-24",
      },
      {
        text: "F = 9",
        value: "9",
      },
      {
        text: "F = 2",
        value: "2",
      },
      {
        text: "F = 10",
        value: "10",
      },
    ],
    correctAnswer: "9",
  },
  {
    id: "6",
    label: "What is (5 * 3 + 7 - 4 * (2 * 30 ) - 33 *0 ) = W",
    answers: [
      {
        text: "W = - 24",
        value: "-24",
      },
      {
        text: "W = -218",
        value: "-218",
      },
      {
        text: "W = -92",
        value: "-92",
      },
      {
        text: "W = -310",
        value: "-310",
      },
    ],
    correctAnswer: "-218",
  },
  {
    id: "7",
    label: "What is ((2 - 100 ) * (24 + 3) /  Q) = 378?",
    answers: [
      {
        text: "Q = - 224",
        value: "-224",
      },
      {
        text: "Q = -89",
        value: "-89",
      },
      {
        text: "Q = 42",
        value: "42",
      },
      {
        text: "Q = 7",
        value: "7",
      },
    ],
    correctAnswer: "7",
  },
  {
    id: "8",
    label: "What is (232 - 2) * (20 * 3)  = V",
    answers: [
      {
        text: "V = - 2,004",
        value: "-2,004",
      },
      {
        text: "V = 91,100",
        value: "91,100",
      },
      {
        text: "V = 13,800",
        value: "13,800",
      },
      {
        text: "V = -15,090",
        value: "-15,090",
      },
    ],
    correctAnswer: "13,800",
  },
  {
    id: "9",
    label: "What is ((23 + 2) * (24 / 3) * S ) = 600?",
    answers: [
      {
        text: "S = 3",
        value: "3",
      },
      {
        text: "S = -3",
        value: "-3",
      },
      {
        text: "S = 9",
        value: "9",
      },
      {
        text: "S = -10",
        value: "-10",
      },
    ],
    correctAnswer: "3",
  },
  {
    id: "10",
    label: "What is (4 + 3 * 27 - 5 * (4 + 55 - 22)) = Z?",
    answers: [
      {
        text: "Z = - 204",
        value: "-204",
      },
      {
        text: "Z = -100",
        value: "-100",
      },
      {
        text: "Z = -92",
        value: "-92",
      },
      {
        text: "Z = -30",
        value: "-30",
      },
    ],
    correctAnswer: "-100",
  },
  {
    id: "11",
    label: "What is ((23 - 2) * (24 + 3) / 7) = K?",
    answers: [
      {
        text: "K = - 249",
        value: "-29",
      },
      {
        text: "K = 99",
        value: "99",
      },
      {
        text: "K = 81",
        value: "81",
      },
      {
        text: "K = 180",
        value: "180",
      },
    ],
    correctAnswer: "81",
  },
];
const CHOSEN_ANSWERS = {};

checkAnswers = () => {
  correct_answers = 0;
  QUESTIONS.forEach((question) => {
    if (CHOSEN_ANSWERS[question.id] === question.correctAnswer) {
      correct_answers++;
    }
  });
  alert(`Total Result: ${correct_answers} / ${QUESTIONS.length}`);
};

CURRENT_QUESTION_INDEX = 0;

renderQuestion = (index) => {
  question_to_render = QUESTIONS[CURRENT_QUESTION_INDEX];
  let divElement = document.getElementById("questions");
  let newQuestion = document.createElement("div");
  newQuestion.id = question_to_render.id;
  let innerHTML = `${CURRENT_QUESTION_INDEX + 1}: ${question_to_render.label}`;
  newQuestion.innerHTML = innerHTML;
  divElement.appendChild(newQuestion);
  let answersDiv = document.createElement("div");
  question_to_render.answers.forEach((answer) => {
    let answerDiv = document.createElement("div");
    let answerHTML = `<input type="radio" id="${answer.id}" name="${question_to_render.id}" value="${answer.value}">
      <label for="html">${answer.text}</label>`;
    answerDiv.innerHTML = answerHTML;
    newQuestion.appendChild(answerDiv);
    answerDiv.addEventListener("change", (e) => {
      CHOSEN_ANSWERS[question.id] = e.target.value;
    });
  });
};

window.onload = () => {
  renderQuestion(CURRENT_QUESTION_INDEX);
  document.getElementById("submitQuiz").addEventListener("click", () => {
    checkAnswers();
  });

  let button = document.createElement("button");
  button.innerText = "next";
  button.addEventListener("click", (e) => {
    current_question = QUESTIONS[CURRENT_QUESTION_INDEX];
    currentElement = document.getElementById(current_question.id);
    currentElement.style.display = "none";
    CURRENT_QUESTION_INDEX++;

    if (CURRENT_QUESTION_INDEX == 10) {
      button.style.display = "none";
    }

    let submitButton = document.getElementById("submitQuiz");
    if (CURRENT_QUESTION_INDEX == 10) {
        submitButton.style.display = "block"
    } else {
      submitButton.style.display = "none";
    }
    renderQuestion(CURRENT_QUESTION_INDEX);
  });
  let divElement = document.getElementById("next");
  divElement.append(button);
};
