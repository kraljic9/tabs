let tabOne = document.getElementById("tab-1");
let tabTwo = document.getElementById("tab-2");
let tabThree = document.getElementById("tab-3");
let tabFour = document.getElementById("tab-4");
let tabs = document.getElementsByClassName("tab");
let selectedTab = document.getElementsByClassName("selected");
let description = document.querySelector(".description");
let title = document.querySelector(".title");
let content = document.querySelector(".content");

tabOne.addEventListener("click", function (e) {
  e.preventDefault(e);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[0].classList.add("selected");
  description.innerHTML = "This is the first tab";
  title.innerHTML = "Super Mario Bros U";
  content.style.backgroundImage = `url(images/new_super_mario_bros_u.avif)`;
});

tabTwo.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[1].classList.add("selected");
  description.innerHTML = "This is the second tab";
  title.innerHTML = "Call of Duty Blackops 6";
  content.style.backgroundImage = "url(images/blackops.avif)";
});

tabThree.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[2].classList.add("selected");
  description.innerHTML = "This is the third tab";
  title.innerHTML = "Mienecraft";
  content.style.backgroundImage = "url(images/minecraft.webp)";
});

tabFour.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[3].classList.add("selected");
  description.innerHTML = "This is the fourth tab";
  title.innerHTML = "God Of War";
  content.style.backgroundImage = "url(images/god-of-war.jpg)";
});
