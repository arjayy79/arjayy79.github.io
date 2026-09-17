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
