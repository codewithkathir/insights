async function loadHTML(id, filePath) {
  const response = await fetch(filePath);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "./components/header.html");
  loadHTML("footer", "./components/footer.html");
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  speed: 4000, // smooth transition speed
  autoplay: {
    delay: 0, // continuous flow
    disableOnInteraction: false,
  },
  freeMode: true, // smooth continuous motion
  freeModeMomentum: false,
  breakpoints: {
    1200: { slidesPerView: 5 },
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });


  window.addEventListener('load', () => {
    document.querySelectorAll('.fill').forEach((el) => {
     
      const w = el.style.getPropertyValue('--w') || el.style.width || '0%';
      el.style.width = w;
     
      void el.offsetWidth;
      el.style.animation = 'fillAnim 0.9s forwards';
    });
  });

  // allow keyboard users to see overlay via focus
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('focus', () => card.classList.add('focused'));
    card.addEventListener('blur',  () => card.classList.remove('focused'));
  });

//counter

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("[data-count]");

  counters.forEach(counter => {
    let start = 0;
    const end = parseFloat(counter.getAttribute("data-count"));
    const duration = 2000;
    const step = duration / end;

    let timer = setInterval(() => {
      start++;
      counter.innerText = start;

      if (start >= end) clearInterval(timer);
    }, step);
  });
});

 const cards = document.querySelectorAll("[data-animate]");

  function reveal() {
    cards.forEach(card => {
      let rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        card.style.animationPlayState = "running";
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

