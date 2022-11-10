import htmlSanitizer from './htmlSanitizer';

console.log('app loaded');

const app = document.getElementById('app');

const html = htmlSanitizer.SanitizeHtml(`<h1 data-controller="Selector">hello again</h1>`);

app.innerHTML = html;
