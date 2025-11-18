var swiper = new Swiper(".seo-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 22,
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1.3 },
    768: { slidesPerView: 1.6 },
    1024: { slidesPerView: 2.2 },
    1280: { slidesPerView: 4 },
  },
});

// Button controls
document.getElementById("swpPrev").onclick = () => swiper.slidePrev();
document.getElementById("swpNext").onclick = () => swiper.slideNext();
