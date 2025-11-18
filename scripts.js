// scripts.js - interactivity for HelionCraft
document.addEventListener('DOMContentLoaded',()=>{

  // hamburger toggle
  const html = document.documentElement;
  const nav = document.querySelector('.nav');
  const hamb = document.querySelector('.hamburger');
  hamb && hamb.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });

  // highlight active link
  const navLinks = document.querySelectorAll('[data-nav]');
  const path = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)){
      a.classList.add('active');
    }
  });

  // email obfuscation & display
  const user = 'helion.craft';
  const domain = 'interia.pl';
  const email = `${user}@${domain}`;
  const display = document.getElementById('email-display');
  if(display) display.textContent = email.replace('@',' [at] ');

  // form handler - builds mailto from obfuscated parts
  window.handleContact = function(e){
    e && e.preventDefault && e.preventDefault();
    const name = document.getElementById('name').value || '';
    const from = document.getElementById('email').value || '';
    const subject = document.getElementById('subject').value || '';
    const msg = document.getElementById('message').value || '';
    const to = `${user}@${domain}`;
    const body = encodeURIComponent(`Imię: ${name}\nE-mail nadawcy: ${from}\n\n${msg}`);
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    // open mail client
    window.location.href = mailto;
    return false;
  };
});
