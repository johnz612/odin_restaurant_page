"use strict";

const Contact = () => {
  const contactElement = document.createElement("div");
  const contactContainer = document.createElement("div");
  const labelPhone = document.createElement("h2");
  const phone = document.createElement("p");
  const labelAddress = document.createElement("h2");
  const address = document.createElement("p");
  const nav = document.createElement("div");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  const footer = document.createElement("div");

  const resourcesCopyright = document.createElement("p");

  contactElement.classList.add("contact");
  contactContainer.classList.add("contact-container");
  labelPhone.classList.add("label");
  labelAddress.classList.add("label");

  footer.classList.add("footer");

  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav", "menu-nav");

  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";
  resourcesCopyright.textContent = "Copyright johnz612";
  labelPhone.textContent = "Phone";
  phone.textContent = "+63 907519112";
  labelAddress.textContent = "Address";
  address.textContent = "Lorem ipsum dolor sit amet, consectetur";

  footer.appendChild(resourcesCopyright);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  contactContainer.appendChild(labelPhone);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(labelAddress);
  contactContainer.appendChild(address);

  const contactScreen = function () {
    content.innerHTML = "";

    nav.appendChild(navListContainer);

    contactElement.appendChild(nav);
    contactElement.appendChild(contactContainer);
    contactElement.appendChild(footer);
    return contactElement;
  };

  return { contactScreen, navListHome, navListMenu };
};

export default Contact();
