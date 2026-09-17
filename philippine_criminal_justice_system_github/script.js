const creators = [
"rjayhamili303@gmail.com","jhondiegungob08@gmail.com","stricxypiamonte@gmail.com","4nnicolascalibo@gmail.com",
"intojeselintojes@gmail.com","shanebabac496@gmail.com","ontoyharold@gmail.com","tunacaoklient277@gmail.com",
"anagasecherryl7@gmail.com","janjeffneyperocho@gmail.com","crislypabatan6@gmail.com","nurdisaabdutiting@gmail.com",
"keventabiliran53@gmail.com","aliviogelmar@gmail.com","wencessaldivar525@gmail.com","fetchleelagoy@gmail.com",
"malaaylheyjane@gmail.com","joanpinote2@gmail.com","emmasupring@gmail.com","jhonliebawan@gmail.com",
"alvenchavez839@gmail.com","anitoprincesskimberly27@gmail.com","floresjayann03@gmail.com","kinlanbactong28@gmail.com",
"arianehorolan@gmail.com","kierrendon24@gmail.com","escalantecyril2007@gmail.com","Roneltitosaladaga@gmail.com",
"angelheartlooc339@gmail.com","garrycbahian@gmail.com","rondibacaling@gmail.com","Palganchritian7@gmail.com",
"Khenethjhonsebandal@gmail.com","rhenmartnercua5@gmail.com","donalk374@gmail.com","jerlynbaguio31@gmail.com",
"malcampoortega@gmail.com","dumlaomarian33gmail.com","romy.timbang03cloud.com","revyjhonvillanueva@gmail.com",
"taucanmark@gmail.com","ermaccharles43@gmail.com","jicoletagala453@gmail.com"
];

const emailGrid = document.getElementById("emailGrid");
creators.forEach((email, i) => {
  const row = document.createElement("div");
  row.className = "email-item";
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  row.innerHTML = valid
    ? `<span>${i+1}.</span><a href="mailto:${email}">${email}</a>`
    : `<span>${i+1}.</span><span title="Check this address">${email} <small style="color:#d7a928">(check address)</small></span>`;
  emailGrid.appendChild(row);
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("pcjs-theme");
if(savedTheme) document.documentElement.dataset.theme = savedTheme;
function updateThemeIcon(){
  const dark = document.documentElement.dataset.theme === "dark";
  themeIcon.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
updateThemeIcon();
themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = dark ? "light" : "dark";
  localStorage.setItem("pcjs-theme", dark ? "light" : "dark");
  updateThemeIcon();
});

const progress = document.getElementById("progressBar");
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${Math.max(0, Math.min(100, window.scrollY / max * 100))}%`;
  backTop.classList.toggle("show", window.scrollY > 500);
});
backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.getElementById("menuToggle");
const nav = document.getElementById("desktopNav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  nav.style.display = open ? "flex" : "";
  nav.style.position = open ? "absolute" : "";
  nav.style.top = open ? "78px" : "";
  nav.style.left = open ? "0" : "";
  nav.style.right = open ? "0" : "";
  nav.style.background = open ? "var(--header)" : "";
  nav.style.padding = open ? "18px 20px" : "";
  nav.style.flexDirection = open ? "column" : "";
  nav.style.borderBottom = open ? "1px solid var(--line)" : "";
});
document.querySelectorAll(".desktop-nav a").forEach(a => a.addEventListener("click", () => {
  if(window.innerWidth <= 1100) nav.classList.remove("mobile-open");
}));
