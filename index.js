/*import { manageHomeButton } from './scripts/home.js';
import { manageBookmarkButton } from './scripts/bookmark.js';
import { manageProfileButton } from './scripts/profile.js';
import { manageCreateButton } from './scripts/create.js';*/
/* 
const home = document.querySelector('[data-js="home"]');
const bookmark = document.querySelector('[data-js="bookmark"]');
const create = document.querySelector('[data-js="newQuestion"]');
const profile = document.querySelector('[data-js="profile"]');

const homeButton = document.querySelector('[data-js="home-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const createButton = document.querySelector('[data-js="create-button"]');
const profileButton = document.querySelector('[data-js="profile-button"]');
const homeButtonActive = document.querySelector(
  '[data-js="home-button--active"]'
);
const bookmarkButtonActive = document.querySelector(
  '[data-js="bookmark-button--active"]'
);
const createButtonActive = document.querySelector(
  '[data-js="create-button--active"]'
);
const profileButtonActive = document.querySelector(
  '[data-js="profile-button--active"]'
);

homeButton.addEventListener('click', function () {
  homeButtonActive.classList.remove('hidden');
  homeButton.classList.add('hidden');

  bookmarkButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  bookmarkButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.remove('hidden');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
});

bookmarkButton.addEventListener('click', function () {
  bookmarkButtonActive.classList.remove('hidden');
  bookmarkButton.classList.add('hidden');

  homeButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.remove('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
});

createButton.addEventListener('click', function () {
  createButton.classList.add('hidden');
  createButtonActive.classList.remove('hidden');

  homeButton.classList.remove('hidden');
  bookmarkButton.classList.remove('hidden');
  profileButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  bookmarkButtonActive.classList.add('hidden');
  profileButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  create.classList.remove('hidden');
  profile.classList.add('hidden');
});

profileButton.addEventListener('click', function () {
  profileButton.classList.add('hidden');
  profileButtonActive.classList.remove('hidden');

  homeButton.classList.remove('hidden');
  createButton.classList.remove('hidden');
  bookmarkButton.classList.remove('hidden');

  homeButtonActive.classList.add('hidden');
  createButtonActive.classList.add('hidden');
  bookmarkButtonActive.classList.add('hidden');

  home.classList.add('hidden');
  bookmark.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.remove('hidden');
}); */

/*homeButton.addEventListener('click', manageHomeButton());
profileButton.addEventListener('click', manageProfileButton());
bookmarkButton.addEventListener('click', manageBookmarkButton());
createButton.addEventListener('click', manageCreateButton());*/


let navBar = document.querySelectorAll("nav > a");
let pages = document.querySelectorAll("main");

navBar.forEach(button => {
  button.addEventListener('click', function() {
    let imgPath = button.firstChild.src;
    console.log(imgPath.replace("resize", "active"));
    button.firstChild.src = imgPath.replace("resize", "active");
  })
  
  console.log(button);
});

function toggleAnswer(elementId) {
  let pToToggle = document.getElementById(elementId);
  if (pToToggle.style.display == 'none') {
    pToToggle.style.display = 'block';
  } else {
    pToToggle.style.display = 'none';
  }
}
