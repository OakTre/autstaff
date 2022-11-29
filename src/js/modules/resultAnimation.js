import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const line = document.querySelector(".js-results-line");
  const headerHeight = document.querySelector(".header").offsetHeight;

  if (!line) return;

  const timelime = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-results-steps",
      start: "top 30%",
      scrub: true,
    }
  });

  const timelime2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-results-steps",
      start: "top 30%",
      end: "50% top",
      scrub: true,
    }
  });

  timelime.fromTo(line, {
    height: 0
  }, {
    height: '100%'
  });

  timelime2.to(".js-results-item .results-steps__legend", {
    color: "#5E79EC",
    stagger: 0.4,
  })

};
