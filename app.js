const openBtnNav = document.querySelector(".fa-stream");
const closeBtnNav = document.querySelector(".fa-times");
const nav = document.querySelector(".nav-link");

openBtnNav.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtnNav.addEventListener("click", () => {
  nav.classList.remove("active");
});

// Slider Product Section 3

$(".multiple-slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 952,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 872,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 757,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 657,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Slider Product Section 4

$(".multiple-slider2").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: ".next2",
  prevArrow: ".prev2",
  responsive: [
    // {
    //   breakpoint: 952,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 872,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 757,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 657,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //   },
    // },
    {
      breakpoint: 528,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
