/* ==========================================
   CREATOR EMAILS
========================================== */

const creators = [

  "rjayhamili303@gmail.com",
  "jhondiegungob08@gmail.com",
  "stricxypiamonte@gmail.com",
  "4nnicolascalibo@gmail.com",
  "intojeselintojes@gmail.com",
  "shanebabac496@gmail.com",
  "ontoyharold@gmail.com",
  "tunacaoklient277@gmail.com",
  "anagasecherryl7@gmail.com",
  "janjeffneyperocho@gmail.com",
  "crislypabatan6@gmail.com",
  "nurdisaabdutiting@gmail.com",
  "keventabiliran53@gmail.com",
  "aliviogelmar@gmail.com",
  "wencessaldivar525@gmail.com",
  "fetchleelagoy@gmail.com",
  "malaaylheyjane@gmail.com",
  "joanpinote2@gmail.com",
  "emmasupring@gmail.com",
  "jhonliebawan@gmail.com",
  "alvenchavez839@gmail.com",
  "anitoprincesskimberly27@gmail.com",
  "floresjayann03@gmail.com",
  "kinlanbactong28@gmail.com",
  "arianehorolan@gmail.com",
  "kierrendon24@gmail.com",
  "escalantecyril2007@gmail.com",
  "Roneltitosaladaga@gmail.com",
  "angelheartlooc339@gmail.com",
  "garrycbahian@gmail.com",
  "rondibacaling@gmail.com",
  "Palganchritian7@gmail.com",
  "Khenethjhonsebandal@gmail.com",
  "rhenmartnercua5@gmail.com",
  "donalk374@gmail.com",
  "jerlynbaguio31@gmail.com",
  "malcampoortega@gmail.com",

  /* These two were written this way in your list.
     They are displayed as provided. */

  "dumlaomarian33gmail.com",
  "romy.timbang03cloud.com",

  "revyjhonvillanueva@gmail.com",
  "taucanmark@gmail.com",
  "ermaccharles43@gmail.com",
  "jicoletagala453@gmail.com"

];


const emailGrid =
  document.getElementById("emailGrid");


creators.forEach((email, index) => {

  const item =
    document.createElement("div");

  item.className =
    "email-item";

  const validEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);


  if (validEmail) {

    item.innerHTML = `

      <span>${index + 1}.</span>

      <a href="mailto:${email}">
        ${email}
      </a>

    `;

  }

  else {

    item.innerHTML = `

      <span>${index + 1}.</span>

      <span>
        ${email}
        <small style="color:#d7a928">
          (check address)
        </small>
      </span>

    `;

  }


  emailGrid.appendChild(item);

});


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle =
  document.getElementById("themeToggle");

const themeIcon =
  document.getElementById("themeIcon");


const savedTheme =
  localStorage.getItem("pcjs-theme");


if (savedTheme) {

  document.documentElement
    .dataset.theme = savedTheme;

}


function updateThemeIcon() {

  const dark =
    document.documentElement
      .dataset.theme === "dark";


  themeIcon.textContent =
    dark ? "☀" : "☾";


  themeToggle.setAttribute(

    "aria-label",

    dark
      ? "Switch to light mode"
      : "Switch to dark mode"

  );

}


updateThemeIcon();


themeToggle.addEventListener(
  "click",
  () => {

    const dark =
      document.documentElement
        .dataset.theme === "dark";


    document.documentElement
      .dataset.theme =
      dark ? "light" : "dark";


    localStorage.setItem(

      "pcjs-theme",

      dark ? "light" : "dark"

    );


    updateThemeIcon();

  }
);


/* ==========================================
   SCROLL PROGRESS
========================================== */

const progress =
  document.getElementById("progressBar");


const backTop =
  document.getElementById("backTop");


window.addEventListener(
  "scroll",
  () => {

    const max =
      document.documentElement
        .scrollHeight -
      window.innerHeight;


    const percentage =
      (window.scrollY / max) * 100;


    progress.style.width =
      ${Math.min(100, percentage)}%;


    backTop.classList.toggle(
      "show",
      window.scrollY > 500
    );

  }
);


/* ==========================================
   BACK TO TOP
========================================== */

backTop.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


/* ==========================================
   CURRENT YEAR
========================================== */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();


/* ==========================================
   MOBILE MENU
========================================== */

const menu =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("desktopNav");


menu.addEventListener(
  "click",
  () => {

    const open =
      nav.classList.toggle(
        "mobile-open"
      );


    if (open) {

      nav.style.display = "flex";

      nav.style.position =
        "absolute";

      nav.style.top = "78px";

      nav.style.left = "0";

      nav.style.right = "0";

      nav.style.background =
        "var(--header)";

      nav.style.padding =
        "18px 20px";

      nav.style.flexDirection =
        "column";

      nav.style.borderBottom =
        "1px solid var(--line)";

    }

    else {

      nav.style.display = "";

      nav.style.position = "";

      nav.style.top = "";

      nav.style.left = "";

      nav.style.right = "";

      nav.style.background = "";

      nav.style.padding = "";

      nav.style.flexDirection = "";

      nav.style.borderBottom = "";

    }

  }
);


/* CLOSE MOBILE MENU AFTER CLICK */

document
  .querySelectorAll(".desktop-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        if (
          window.innerWidth <= 1100
        ) {

          nav.classList
            .remove("mobile-open");

          nav.style.display = "";

          nav.style.position = "";

          nav.style.top = "";

          nav.style.left = "";

          nav.style.right = "";

          nav.style.background = "";

          nav.style.padding = "";

          nav.style.flexDirection = "";

          nav.style.borderBottom = "";

        }

      }
    );

  });
/* ================= KNOWLEDGE TEST ================= */
<script>

const quizQuestions = [

  {
    question: "What are the five pillars of the Philippine Criminal Justice System?",
    options: [
      "Police, Prosecution, Courts, Corrections, Community",
      "Police, Military, Courts, Jail, Government",
      "Police, Senate, Courts, Prison, Community",
      "Police, Prosecution, Military, Courts, Corrections"
    ],
    answer: 0
  },

  {
    question: "Which pillar is primarily responsible for investigating crimes and apprehending suspects?",
    options: [
      "Courts",
      "Police",
      "Corrections",
      "Community"
    ],
    answer: 1
  },

  {
    question: "What is the primary role of the prosecution pillar?",
    options: [
      "Arrest criminals",
      "Manage prisons",
      "Determine whether there is sufficient basis to file criminal charges",
      "Create laws"
    ],
    answer: 2
  },

  {
    question: "Which pillar determines the guilt or innocence of an accused person through judicial proceedings?",
    options: [
      "Police",
      "Prosecution",
      "Courts",
      "Community"
    ],
    answer: 2
  },

  {
    question: "What is the main purpose of the corrections pillar?",
    options: [
      "Investigate crimes",
      "Rehabilitate offenders and administer correctional institutions",
      "Prosecute suspects",
      "Create criminal laws"
    ],
    answer: 1
  },

  {
    question: "Why is the community considered an important pillar of the Criminal Justice System?",
    options: [
      "It replaces the police",
      "It helps prevent crime, supports rehabilitation, and promotes public safety",
      "It decides court cases",
      "It arrests suspects"
    ],
    answer: 1
  },

  {
    question: "What principle states that an accused person is considered innocent until proven guilty?",
    options: [
      "Rule of Law",
      "Presumption of Innocence",
      "Double Jeopardy",
      "Judicial Review"
    ],
    answer: 1
  },

  {
    question: "Which institution is primarily responsible for the investigation and prosecution of criminal cases on behalf of the government?",
    options: [
      "Department of Justice",
      "Department of Education",
      "Department of Social Welfare and Development",
      "Department of Finance"
    ],
    answer: 0
  },

  {
    question: "What is the ultimate goal of the Philippine Criminal Justice System?",
    options: [
      "To punish every accused person",
      "To protect society, uphold justice, and maintain peace and order",
      "To increase the number of prisoners",
      "To eliminate all court proceedings"
    ],
    answer: 1
  },

  {
    question: "Which of the following best describes the relationship among the five pillars?",
    options: [
      "They work independently without interaction",
      "They compete with one another",
      "They work together to achieve justice and public safety",
      "Only the police are responsible for criminal justice"
    ],
    answer: 2
  }

];


let currentQuestion = 0;
let score = 0;


const questionNumber =
  document.getElementById("quizQuestionNumber");

const questionText =
  document.getElementById("questionText");

const quizOptions =
  document.getElementById("quizOptions");

const quizFeedback =
  document.getElementById("quizFeedback");

const quizNext =
  document.getElementById("quizNext");

const quizScore =
  document.getElementById("quizScore");

const quizProgress =
  document.getElementById("quizProgress");

const quizContainer =
  document.getElementById("quizContainer");

const quizResult =
  document.getElementById("quizResult");

const finalScore =
  document.getElementById("finalScore");

const quizMessage =
  document.getElementById("quizMessage");

const quizRestart =
  document.getElementById("quizRestart");


function loadQuestion() {

  const question = quizQuestions[currentQuestion];

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

  questionText.textContent =
    question.question;

  quizOptions.innerHTML = "";

  quizFeedback.textContent = "";

  quizFeedback.className = "quiz-feedback";

  quizNext.disabled = true;


  const progress =
    (currentQuestion / quizQuestions.length) * 100;

  quizProgress.style.width =
    progress + "%";


  question.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className =
      "quiz-option";

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => {

      selectAnswer(index);

    });

    quizOptions.appendChild(button);

  });

}


function selectAnswer(selectedIndex) {

  const question =
    quizQuestions[currentQuestion];

  const buttons =
    document.querySelectorAll(".quiz-option");


  buttons.forEach(button => {

    button.disabled = true;

  });


  if (selectedIndex === question.answer) {

    score++;

    quizScore.textContent =
      score;

    quizFeedback.textContent =
      "✓ Correct! Well done.";

    quizFeedback.classList.add(
      "correct"
    );

    buttons[selectedIndex].classList.add(
      "correct-answer"
    );

  } else {

    quizFeedback.textContent =
      "✗ Incorrect. Please review the lesson and try again.";

    quizFeedback.classList.add(
      "incorrect"
    );

    buttons[selectedIndex].classList.add(
      "wrong-answer"
    );

  }


  quizNext.disabled = false;

}


quizNext.addEventListener("click", () => {

  currentQuestion++;

  if (
    currentQuestion <
    quizQuestions.length
  ) {

    loadQuestion();

  } else {

    showResult();

  }

});


function showResult() {

  quizContainer.style.display =
    "none";

  quizResult.style.display =
    "block";

  finalScore.textContent =
    score;

  quizProgress.style.width =
    "100%";


  if (score === 10) {

    quizMessage.textContent =
      "Excellent! You got a perfect score. You have an outstanding understanding of the Philippine Criminal Justice System.";

  } else if (score >= 8) {

    quizMessage.textContent =
      "Great job! You have a strong understanding of the Philippine Criminal Justice System.";

  } else if (score >= 6) {

    quizMessage.textContent =
      "Good work! You have a good understanding of the Philippine Criminal Justice System. Keep learning!";

  } else if (score >= 4) {

    quizMessage.textContent =
      "Nice effort! Review the lessons and try the quiz again to improve your score.";

  } else {

    quizMessage.textContent =
      "Keep studying! Review the lessons and take the quiz again to strengthen your knowledge.";

  }

}


quizRestart.addEventListener("click", () => {

  currentQuestion = 0;

  score = 0;

  quizScore.textContent =
    "0";

  quizContainer.style.display =
    "block";

  quizResult.style.display =
    "none";

  loadQuestion();

});


loadQuestion();

</script>

