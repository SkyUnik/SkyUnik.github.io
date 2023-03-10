let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
}

// window.addEventListener("load", () => {
//   AOS.init({
//     duration: 1500,
//     easing: "ease-in-out",
//     once: true,
//     mirror: false,
//   });
// });

gsap.registerPlugin(ScrollTrigger);
const words = ["Website Saya!", "Portfolio Saya!", "Codingan Saya!", "Project Saya!"];

let masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

words.forEach((word) => {
  const tl = gsap.timeline({ repeat: 1, repeatDelay: 2, yoyo: true });
  tl.to("#typewriter", {
    duration: 3,
    text: word,
  });
  masterTl.add(tl);
});

ScrollTrigger.create({
  start: "top -200",
  end: 99999,
  toggleClass: {
    className: "nav-header--scrolled",
    targets: ".nav-header",
  },
});
ScrollTrigger.create({
  start: "top -200",
  end: 99999,
  toggleClass: {
    className: "back-to-top--scrolled",
    targets: ".back-to-top",
  },
});

// words.forEach((word) => {
//   let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
//   tl.to("#typewriter", { duration: 1, text: word });
//   masterTl.add(tl);
// });
