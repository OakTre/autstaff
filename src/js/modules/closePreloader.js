import gsap from "gsap";

export default () => {
  const timeline = gsap.timeline();

  gsap.set(".header", { opacity: 0, y: "-1rem" });
  gsap.set(".intro", { opacity: 0 });
  gsap.set(".shield", { opacity: 0, y: "1rem" });

  timeline
    .to(".intro", { opacity: 1, duration: 0.4, ease: "power1.inOut" })
    .to(".header", { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }, "-=0.2")
    .to(".shield", { opacity: 1, y: 0, duration: 0.6, ease: "power1.inOut" }, "-=0.3")

};
