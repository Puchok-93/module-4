let posters = new Swiper(".posters", {
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 1,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      414: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });