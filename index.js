let tabOne = document.getElementById("tab-1");
let tabTwo = document.getElementById("tab-2");
let tabThree = document.getElementById("tab-3");
let tabFour = document.getElementById("tab-4");
let tabs = document.getElementsByClassName("tab");
let selectedTab = document.getElementsByClassName("selected");
let description = document.querySelector(".description");

tabOne.addEventListener("click", function (e) {
  e.preventDefault(e);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[0].classList.add("selected");
  description.innerHTML = "This is the first tab";
});

tabTwo.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[1].classList.add("selected");
  description.innerHTML = "This is the second tab";
});

tabThree.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[2].classList.add("selected");
  description.innerHTML = "This is the third tab";
});

tabFour.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
  }
  tabs[3].classList.add("selected");
  description.innerHTML = "This is the fourth tab";
});
