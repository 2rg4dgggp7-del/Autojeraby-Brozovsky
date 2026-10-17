// Mobilní menu
const tlacitko = document.querySelector('.menu-tlacitko');
const nav = document.querySelector('nav');
if (tlacitko) {
  tlacitko.addEventListener('click', () => {
    const otevrene = nav.classList.toggle('otevrene');
    tlacitko.setAttribute('aria-expanded', otevrene);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('otevrene')));
}

// Kontaktní formulář – otevře e-mailový program s vyplněnou zprávou
const formular = document.getElementById('kontaktni-formular');
if (formular) {
  formular.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(formular);
    const telo = `Jméno a příjmení: ${d.get('jmeno')}\nE-mail: ${d.get('email')}\n\n${d.get('zprava')}`;
    window.location.href = 'mailto:info@brozovsky.cz?subject=' + encodeURIComponent(d.get('predmet')) + '&body=' + encodeURIComponent(telo);
    document.getElementById('stav').textContent = 'Otevíráme váš e-mailový program. Zprávu stačí odeslat.';
  });
}
