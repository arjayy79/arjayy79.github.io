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

.quiz-section {
  position: relative;
}

.quiz-container {
  max-width: 900px;
  margin: 50px auto 0;
  padding: 40px;
  border: 1px solid rgba(180, 150, 80, 0.25);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.quiz-label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #b8944c;
  margin-bottom: 8px;
}

.quiz-header h3 {
  margin: 0;
  font-size: 22px;
}

.quiz-score-box {
  padding: 12px 18px;
  border-radius: 10px;
  background: rgba(184, 148, 76, 0.12);
  font-size: 14px;
  white-space: nowrap;
}

.quiz-score-box strong {
  color: #b8944c;
  font-size: 20px;
}

.quiz-progress {
  width: 100%;
  height: 7px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(128, 128, 128, 0.2);
  margin-bottom: 35px;
}

.quiz-progress-fill {
  height: 100%;
  width: 10%;
  border-radius: 10px;
  background: #b8944c;
  transition: width 0.4s ease;
}

.quiz-question {
  margin-bottom: 30px;
}

.quiz-question h3 {
  font-size: 25px;
  line-height: 1.45;
  margin: 0;
}

.quiz-options {
  display: grid;
  gap: 14px;
}

.quiz-option {
  width: 100%;
  padding: 17px 20px;
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 12px;
  background: transparent;
  text-align: left;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.quiz-option:hover {
  transform: translateY(-2px);
  border-color: #b8944c;
}

.quiz-option.correct {
  border-color: #3c9b63;
  background: rgba(60, 155, 99, 0.12);
}

.quiz-option.wrong {
  border-color: #c54d4d;
  background: rgba(197, 77, 77, 0.12);
}

.quiz-option:disabled {
  cursor: default;
}

.quiz-feedback {
  min-height: 30px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
}

.quiz-feedback.correct-text {
  color: #3c9b63;
}

.quiz-feedback.wrong-text {
  color: #c54d4d;
}

.quiz-next,
.quiz-restart {
  margin-top: 25px;
  padding: 14px 25px;
  border: none;
  border-radius: 10px;
  background: #b8944c;
  color: #111;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
}

.quiz-next:hover,
.quiz-restart:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.quiz-next:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.quiz-result {
  max-width: 700px;
  margin: 50px auto 0;
  padding: 50px 35px;
  text-align: center;
  border: 1px solid rgba(180, 150, 80, 0.25);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
}

.quiz-result-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.quiz-result h3 {
  font-size: 30px;
  margin: 15px 0;
}

.final-score {
  margin: 20px 0;
}

.final-score strong {
  font-size: 70px;
  color: #b8944c;
}

.final-score span {
  font-size: 25px;
  opacity: 0.7;
}

.quiz-result p {
  font-size: 16px;
  line-height: 1.7;
  max-width: 550px;
  margin: 0 auto;
}


/* MOBILE QUIZ */

@media (max-width: 700px) {

  .quiz-container {
    padding: 25px 20px;
    margin-top: 30px;
  }

  .quiz-header {
    align-items: flex-start;
  }

  .quiz-header h3 {
    font-size: 18px;
  }

  .quiz-score-box {
    padding: 9px 12px;
    font-size: 12px;
  }

  .quiz-question h3 {
    font-size: 20px;
  }

  .quiz-option {
    padding: 15px;
    font-size: 14px;
  }

  .final-score strong {
    font-size: 55px;
  }

}
