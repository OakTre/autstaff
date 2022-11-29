import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const menu = document.querySelector(".advantages-list");
  const headerHeight = document.querySelector(".header").offsetHeight;
  const navItems = document.querySelectorAll(".js-nav-item");

  if (!menu) return;

  const timelime = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-advantages-blocks",
      start: `top ${headerHeight + 10}rem`,
      end: 'bottom 40%',
      pin: menu,
      scrub: true,
    }
  });

  gsap.utils.toArray(".js-advantages-block").forEach(block => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 30%",
      onEnter: self => {
        const navItem = self.trigger.dataset.navItem;

        navItems.forEach(item => item.classList.remove("is-active"));
        document.querySelector(`.js-nav-item[data-nav-parent="${navItem}"]`).classList.add("is-active");
      },
      onEnterBack: self => {
        const navItem = self.trigger.dataset.navItem;

        navItems.forEach(item => item.classList.remove("is-active"));
        document.querySelector(`.js-nav-item[data-nav-parent="${navItem}"]`).classList.add("is-active");
      }
    });
  });
};
