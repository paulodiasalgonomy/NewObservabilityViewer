document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById('credits');
  if (yearElement) {
    yearElement.innerHTML = '&copy; ' + year + ' - All rights reserved.  Observability Viewer. All rights reserved. Developed by <a href="https://www.linkedin.com/in/paulohenriquediaspereira/" style="color:#234376;" target="_blank">Paulo Dias</a>';
  }
});