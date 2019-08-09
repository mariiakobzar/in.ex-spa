import Router from './services/router';
import './assets/styles/index.scss';

const contentDiv = document.getElementById('app');
const homeLinks = document.getElementsByClassName('home-link');
const aboutLinks = document.getElementsByClassName('about-link');
const shopLinks = document.getElementsByClassName('shop-link');
const forumLinks = document.getElementsByClassName('forum-link');
const contactLinks = document.getElementsByClassName('contact-link');

function onNavItemClick(pathName) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = Router[pathName];
}

window.onpopstate = () => {
  contentDiv.innerHTML = Router[window.location.pathname];
};

contentDiv.innerHTML = Router[window.location.pathname];

Array.from(homeLinks).forEach((el) => {
  el.addEventListener('click', () => {
    onNavItemClick('/');
  }, false);
});

Array.from(shopLinks).forEach((el) => {
  el.addEventListener('click', () => {
    onNavItemClick('/shop');
  }, false);
});

Array.from(aboutLinks).forEach((el) => {
  el.addEventListener('click', () => {
    onNavItemClick('/about');
  }, false);
});

Array.from(forumLinks).forEach((el) => {
  el.addEventListener('click', () => {
    onNavItemClick('/forum');
  }, false);
});

Array.from(contactLinks).forEach((el) => {
  el.addEventListener('click', () => {
    onNavItemClick('/contact');
  }, false);
});
