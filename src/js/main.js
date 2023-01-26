// *** Accordion ***
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item) => {
  const accordionControls = item.querySelector(".accordion__controls");
  const accordionContent = item.querySelector(".accordion__content");

  accordionControls.addEventListener("click", (e) => {
    const self = e.currentTarget;
    const open = document.querySelector(".open");

    if (open) {
      open.classList.remove("open");
      const controlsAttr = document.querySelectorAll(".accordion__controls");
      const contentAttr = document.querySelectorAll(".accordion__content");
      controlsAttr.forEach((el) => {
        el.setAttribute("aria-expanded", false);
      });
      contentAttr.forEach((el) => {
        el.setAttribute("aria-hidden", true);
        el.style.maxHeight = null;
      });
    }
    if (item !== open) {
      item.classList.add("open");
      self.setAttribute("aria-expanded", true);
      accordionContent.setAttribute("aria-hidden", false);
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});

// *** Swiper ***
const swiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    360: {
      slidesPerView: "auto",
    },

    769: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    // 1200: {
    //   slidesPerView: "auto",
    // },
  },
});

const swiperTeam = new Swiper(".swiper-team", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
});

const body = document.body;
const root = document.querySelector(":root");
const header = document.querySelector(".header");
const navHeader = document.querySelector(".nav-header");
const navHeaderItems = navHeader.querySelectorAll(".nav-header__link");
const offsetHeader = header.offsetHeight;
const burgerMenu = document.querySelector(".burger-menu");

root.style.setProperty("--offset-header", `${offsetHeader}px`);

burgerMenu?.addEventListener("click", () => {
  burgerMenu.classList.toggle("menu--active");
  navHeader.classList.toggle("nav--active");
  console.log("click");
});

// *** Play promo video ***
const play = document.querySelector(".promo__play");
const video = document.querySelector(".promo__video video");

play.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
  play.classList.add("promo__play--hidden");
});

// ! BURGER
// function disableScroll() {
//   let pagePosition = window.scrollY;
//   let paddingOffset = window.innerWidth - document.body.offsetWidth;

//   if (paddingOffset < 30) {
//     document.body.style.paddingRight = `${paddingOffset}px`;
//     document
//       .querySelector(":root")
//       .style.setProperty("--padding-offset", `${paddingOffset}px`);
//   }
//   body.classList.add("stop-scroll");
//   body.dataset.position = pagePosition;
//   body.style.top = -pagePosition + "px";
// }

// function enableScroll() {
//   let pagePosition = parseInt(body.dataset.position, 10);
//   document.body.style.paddingRight = 0;
//   body.style.top = "auto";
//   body.classList.remove("stop-scroll");
//   window.scroll({ top: pagePosition, left: 0 });
//   body.removeAttribute("data");
// }

// burger?.addEventListener("click", () => {
//   body.classList.contains("stop-scroll") ? enableScroll() : disableScroll();

//   nav.classList.toggle("nav--visible");
//   burger.classList.toggle("burger--active");
// });

// navItems.forEach((el) => {
//   el.addEventListener("click", () => {
//     body.classList.remove("stop-scroll");
//     nav.classList.remove("nav--visible");
//     burger.classList.remove("burger--active");
//     document.body.style.paddingRight = 0;
//   });
// });

// *** Animation site ***

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about__image",
    toggleAction: "play none none none",
  },
  // paused: true,
  defaults: {
    duration: 2,
  },
});

tl.from(".anim-svg__window", {
  autoAlpha: 0,
  y: "100%",
})
  .from(".anim-svg__person-1", {
    scale: 0,
    transformOrigin: "50%",
  })
  .from(
    ".anim-svg__person-2",
    {
      scale: 0,
      transformOrigin: "50%",
    },
    "=-1.5"
  )
  .from(
    ".anim-svg__person-3",
    {
      scale: 0,
      transformOrigin: "50%",
    },
    "=-1.5"
  )
  .from(
    ".anim-svg__person-4",
    {
      scale: 0,
      transformOrigin: "50%",
    },
    "=-1.5"
  );

//  Animation plant
tl.fromTo(
  ".leaf-1",
  {
    rotate: -3,
    transformOrigin: "bottom",
  },
  {
    rotate: 3,
    transformOrigin: "bottom",
    repeat: -1,
    yoyo: true,
    ease: "slow(0.7, 0.7, false)",
  }
)
  .to(
    ".leaf-2",
    {
      rotate: 3,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      // ease: "slow(0.7, 0.7, false)",
    },
    "=-2"
  )
  .to(
    ".leaf-3",
    {
      rotate: 3,
      transformOrigin: "bottom",
      repeat: -1,
      yoyo: true,
      // ease: "slow(0.7, 0.7, false)",
    },
    "=-2"
  );

tl.from(
  ".globus",
  {
    opacity: 0,
    scale: 0.8,
    stagger: {
      each: 0.1,
      from: "center",
    },
    repeat: -1,
    yoyo: true,
    duration: 2,
  },
  "=-2"
);

// ScrollTrigger.create({
//   trigger: ".about",
//   onEnter: () => tl.play(),
// });
