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

const formular = document.getElementById('kontaktni-formular');
if (formular) {
  formular.addEventListener('submit', async e => {
    e.preventDefault();
    const stav = document.getElementById('stav');
    stav.textContent = 'Odesílám…';
    try {
      const odpoved = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(formular) });
      const data = await odpoved.json();
      if (data.success) {
        formular.reset();
        stav.textContent = 'Děkujeme, zpráva byla odeslána.';
      } else {
        stav.textContent = 'Odeslání se nepovedlo. Zavolejte nám prosím nebo napište e-mail.';
      }
    } catch {
      stav.textContent = 'Odeslání se nepovedlo. Zavolejte nám prosím nebo napište e-mail.';
    }
  });
}
// Posun na sekce podle skutečné výšky hlavičky
const hlavicka = document.querySelector('header');
const nastavVysku = () => document.documentElement.style.setProperty('--hlavicka', hlavicka.offsetHeight + 'px');
new ResizeObserver(nastavVysku).observe(hlavicka);
nastavVysku();

