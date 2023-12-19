"use strict";
// import menu from "./menu.js";
import image from "../assets/Logo.png";

const Home = () => {
  const homeElement = document.createElement("div");

  // Navigation
  const nav = document.createElement("div");
  const logo = document.createElement("div");
  const logoText1 = document.createElement("span");
  const logoText2 = document.createElement("p");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  logo.classList.add("logo");
  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav");
  homeElement.classList.add("home");
  logoText1.classList.add("logo1");

  logoText1.textContent = "2";
  logoText2.textContent = "MuchMeat";
  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";

  logo.appendChild(logoText1);
  logo.appendChild(logoText2);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  nav.appendChild(logo);
  nav.appendChild(navListContainer);

  // Hero
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const mainTitle1 = document.createElement("span");
  const mainTitle2 = document.createElement("span");
  const heroPart2Container = document.createElement("div");
  const description = document.createElement("p");
  const buttonContainer = document.createElement("div");
  const buttonMenu = document.createElement("button");
  const buttonContact = document.createElement("button");

  mainTitle1.textContent = "Best Meat?";
  mainTitle2.textContent = "We Got It!";
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id egestas arcu";
  buttonMenu.textContent = "Grab a Meat";
  buttonContact.textContent = "Contact";

  hero.classList.add("hero");
  mainTitle1.classList.add("main-titile-1");
  buttonContainer.classList.add("button-container");
  buttonContact.classList.add("btn", "contact-btn");
  buttonMenu.classList.add("btn", "menu-btn");

  title.appendChild(mainTitle1);
  title.appendChild(mainTitle2);
  title.classList.add("hero-main-text");
  description.classList.add("description");

  const homeScreen = function () {
    buttonContainer.appendChild(buttonMenu);
    buttonContainer.appendChild(buttonContact);

    heroPart2Container.appendChild(description);
    heroPart2Container.appendChild(buttonContainer);

    hero.appendChild(title);
    hero.appendChild(heroPart2Container);

    homeElement.appendChild(nav);
    homeElement.appendChild(hero);
    return homeElement;
  };

  return {
    homeScreen,
    navListMenu,
    navListHome,
    buttonMenu,
    navListContact,
    buttonContact,
  };
};

export default Home();
