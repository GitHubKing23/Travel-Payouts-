const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const tabs = document.querySelectorAll('.tab');
const integrationNote = document.querySelector('#integration-note');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const type = tab.dataset.tab;
    integrationNote.textContent = `Travelpayouts ${type} integration will be connected here using your official affiliate widget code.`;
  });
});

document.querySelector('#travel-search')?.addEventListener('submit', event => {
  event.preventDefault();
  integrationNote.textContent = 'Search UI is ready. Add the official Travelpayouts widget/script to connect live results and affiliate tracking.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
