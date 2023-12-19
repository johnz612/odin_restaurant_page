import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

let currentScreen = home.homeScreen();
const contentContainer = document.getElementById("content");

////////////////// Home Page

// Menuy Button
home.navListMenu.addEventListener("click", function () {
  currentScreen = menu.menuScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

home.buttonMenu.addEventListener("click", function () {
  currentScreen = menu.menuScreen();
  contentContainer.appendChild(currentScreen);
});

// Contact BUtton
home.navListContact.addEventListener("click", function () {
  currentScreen = contact.contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

home.buttonContact.addEventListener("click", function () {
  currentScreen = contact.contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

////////////////// Menu Page

menu.navListHome.addEventListener("click", function () {
  currentScreen = home.homeScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

menu.navListContact.addEventListener("click", function () {
  currentScreen = contact.contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

////////////////// Contact Page

contact.navListHome.addEventListener("click", function () {
  currentScreen = home.homeScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

contact.navListMenu.addEventListener("click", function () {
  currentScreen = menu.menuScreen();
  contentContainer.appendChild(currentScreen);
});

contentContainer.appendChild(currentScreen);
