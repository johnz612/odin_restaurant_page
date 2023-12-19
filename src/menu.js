"use strict";

import imageFoodBalsamic from "./images/balsamic.png";
import imageBeefWillington from "./images/beef-willington.png";
import imageChateau from "./images/Chateaubriand.jpg";
import imageFraldinha from "./images/Fraldinha.jpg";
import imageBifedeChrrizo from "./images/Bife de Chorizo.jpg";
import imagePaïdakia from "./images/Païdakia.jpg";

const menus = [
  [
    {
      name: "Beef Willington",
      description:
        "Beef tenderloin wrapped in layers of pâté, duxelles (a finely chopped mushroom mixture), parma ham, and puff pastry, then baked.",
      price: "$50.00",
      image: imageBeefWillington,
    },
    {
      name: "Balsamic Marinated Skirt Steaks w/ Charred Peppers",
      description:
        "Herbs and smashed garlic quickly infuse charred sweet peppers, capturing their heat straight from the grill.",
      price: "$35.30",
      image: imageFoodBalsamic,
    },
  ],
  [
    {
      name: "Châteaubriand",
      description: "Grilled thick cut of beef tenderloin",
      price: "$32.60",
      image: imageChateau,
    },
    {
      name: "Fraldinha",
      description:
        "a meat cut that's traditionally used for churrasco and is made up of part flank, part short loin, and part bottom sirloin.",
      price: "$25.00",
      image: imageFraldinha,
    },
  ],
  [
    {
      name: "Bife de Chorizo",
      description:
        "Bife de chorizo a strip steak, sirloin, and top loin traditionally used for asado. It is a thick, juicy steak with a sizable layer of fat on top.",
      price: "$46.60",
      image: imageBifedeChrrizo,
    },
    {
      name: "Païdakia",
      description:
        "Lamb chops marinated in various combinations of olive oil, lemon juice, and a variety of fresh herbs before they are grilled on traditional charcoal barbecues.",
      price: "$28.00",
      image: imagePaïdakia,
    },
  ],
];

const Menu = () => {
  const menuElement = document.createElement("div");
  const nav = document.createElement("div");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  const menuContent = document.createElement("div");

  const footer = document.createElement("div");
  const resourcesFooter = document.createElement("p");
  const resourcesCopyright = document.createElement("p");

  menuElement.classList.add("menu");
  menuContent.classList.add("menu-content");
  footer.classList.add("footer");

  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav", "menu-nav");

  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";
  resourcesFooter.textContent = "Images from tasteatlas.com";
  resourcesCopyright.textContent = "Copyright johnz612";
  footer.appendChild(resourcesFooter);
  footer.appendChild(resourcesCopyright);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  menus.forEach((menu) => {
    const menuContainer = document.createElement("div");
    const leftContainer = document.createElement("div");
    const rightContainer = document.createElement("div");
    const rightContainerFood = document.createElement("div");
    const leftContainerDescription = document.createElement("div");
    const rightContainerDescription = document.createElement("div");
    const leftContainerFood = document.createElement("div");

    const imageBalsamicLeft = document.createElement("img");
    const foodNameRight = document.createElement("h2");
    const foodDescriptionRight = document.createElement("p");
    const foodPriceRight = document.createElement("p");

    const imageBalsamicRight = document.createElement("img");
    const foodNameLeft = document.createElement("h2");
    const foodDescriptionLeft = document.createElement("p");
    const foodPriceLeft = document.createElement("p");

    leftContainerFood.classList.add("food");
    rightContainerDescription.classList.add("description-menu");
    rightContainerFood.classList.add("food");
    leftContainerDescription.classList.add("description-menu");
    menuContainer.classList.add("menu-container");
    menuContent.classList.add("menu-content");
    rightContainer.classList.add("right-container");
    leftContainer.classList.add("left-container");
    foodNameLeft.classList.add("food-name");
    foodNameRight.classList.add("food-name");
    foodPriceLeft.classList.add("price");
    foodPriceRight.classList.add("price");

    // Left Side Picture
    imageBalsamicLeft.src = menu[0].image;
    foodNameRight.textContent = menu[0].name;
    foodDescriptionRight.textContent = menu[0].description;
    foodPriceRight.textContent = menu[0].price;

    // Right side Picture
    imageBalsamicRight.src = menu[1].image;
    foodNameLeft.textContent = menu[1].name;
    foodDescriptionLeft.textContent = menu[1].description;
    foodPriceLeft.textContent = menu[1].price;

    leftContainerFood.appendChild(imageBalsamicLeft);
    rightContainerDescription.appendChild(foodNameRight);
    rightContainerDescription.appendChild(foodDescriptionRight);
    rightContainerDescription.appendChild(foodPriceRight);

    rightContainerFood.appendChild(imageBalsamicRight);
    leftContainerDescription.appendChild(foodNameLeft);
    leftContainerDescription.appendChild(foodDescriptionLeft);
    leftContainerDescription.appendChild(foodPriceLeft);

    leftContainer.appendChild(leftContainerFood);
    leftContainer.appendChild(rightContainerDescription);

    rightContainer.appendChild(leftContainerDescription);
    rightContainer.appendChild(rightContainerFood);

    menuContainer.appendChild(leftContainer);
    menuContainer.appendChild(rightContainer);
    menuContent.appendChild(menuContainer);
  });

  const menuScreen = function () {
    content.innerHTML = "";

    nav.appendChild(navListContainer);

    menuElement.appendChild(nav);
    menuElement.appendChild(menuContent);
    menuElement.appendChild(footer);
    return menuElement;
  };

  return { menuScreen, navListHome, navListContact };
};

export default Menu();
