// Funktion zum Scrollen nach oben
function scrollToTop() {
  // Scrollt zum oberen Rand der Seite
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Fügt einen sanften Scroll-Effekt hinzu
  });
}

// Funktion, die die Klasse "scrolled" hinzufügt, wenn nach unten gescrollt wird
window.onscroll = function () {
  let navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    // Wenn mehr als 50px nach unten gescrollt wurde
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Prüfung der Dateigröße
document.querySelector("form").addEventListener("submit", function (event) {
  const fileInput = document.getElementById("attachment");
  const file = fileInput.files[0];

  // Überprüfen, ob eine Datei ausgewählt wurde
  if (file && file.size > 10 * 1024 * 1024) {
    // 10 MB in Bytes
    alert(
      "Die Datei ist zu groß. Bitte wählen Sie eine Datei, die kleiner als 10 MB ist."
    );
    event.preventDefault(); // Formular nicht absenden
  }
});

// Event Listener für das Klicken auf das Logo und den Namen
const logo = document.getElementById("logo");
const name = document.getElementById("name");

logo.addEventListener("click", scrollToTop); // Klick auf das Logo
name.addEventListener("click", scrollToTop); // Klick auf den Namen

//  JavaScript für Hamburger-Menü:

const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active"); // Navigation umschalten
});

// Funktion zum Überwachen des Scrollens
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  // Wenn die Seite mehr als 50px nach unten gescrollt wurde, Hintergrundfarbe ändern
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Transparente weiße Farbe
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Volle Deckkraft
  }
});

// Akkordeon für FAQ
document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Interaktive Zeitleiste
document.querySelectorAll(".experience-item").forEach((item) => {
  item.addEventListener("click", function () {
    const details = this.querySelector("p");
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

// JavaScript für die Portfolio-Modals

// Alle Projektkarten auswählen
const projectCards = document.querySelectorAll(".project-card");

// Funktion, um ein Modal zu öffnen
projectCards.forEach((card) => {
  card.addEventListener("click", function () {
    const projectId = this.getAttribute("data-project"); // Hole die Projekt-ID
    const modal = document.getElementById(`project-modal-${projectId}`); // Passendes Modal auswählen
    if (modal) {
      modal.style.display = "block"; // Modal sichtbar machen
    }
  });
});

// Funktion, um ein Modal zu schließen
const closeButtons = document.querySelectorAll(".modal .close");

closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const modal = this.closest(".modal"); // Das nächste übergeordnete Modal finden
    if (modal) {
      modal.style.display = "none"; // Modal ausblenden
    }
  });
});

// Schließen des Modals bei Klick außerhalb des Inhalts
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Modal ausblenden
    }
  });
});

// Selektiere alle Skill Cards und das Modal

const skillCards = document.querySelectorAll(".skill-card");
const skillModal = document.getElementById("skill-modal");
const closeSkillModal = document.querySelector(".close");
const modalDetails = document.querySelectorAll(".modal-details");

// Event-Listener für Skill Cards
skillCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Alle Details ausblenden
    modalDetails.forEach((detail) => (detail.style.display = "none"));

    // Passendes Detail anzeigen
    const skillId = card.getAttribute("data-skill") + "-details";
    const activeDetail = document.getElementById(skillId);
    if (activeDetail) {
      activeDetail.style.display = "block";
    }

    // Modal anzeigen
    skillModal.style.display = "block";
  });
});

// Modal schließen
closeSkillModal.addEventListener("click", () => {
  skillModal.style.display = "none";
});

// Modal schließen, wenn außerhalb geklickt wird
window.addEventListener("click", (event) => {
  if (event.target === skillModal) {
    skillModal.style.display = "none";
  }
});
