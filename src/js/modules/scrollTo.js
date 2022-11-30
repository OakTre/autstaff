import gsap from "gsap";
import {
  ScrollToPlugin
} from "gsap/dist/ScrollToPlugin";
import { enableScroll } from "../helpers/disableScroll";

gsap.registerPlugin(ScrollToPlugin);

export default function anchorLinks() {
  const header = document.querySelector('.header')
  const OFFSET = 160;
  const DURATION = 1;
  const scrollByHash = (hash) => {
    const elementToScroll = document.querySelector(hash);
    if (elementToScroll) {
      gsap.to(window, {
        duration: DURATION,
        ease: "power2.out",
        scrollTo: {
          y: elementToScroll,
          autoKill: false,
          offsetY: header ? header.offsetHeight * 1.3 : OFFSET,
        },
      });
    } else {
      console.error("No element to scroll");
    }
  };
  document.addEventListener("click", (event) => {
    if (event.target.matches("a") || event.target.closest("a")) {
      if (document.querySelector(".menu").classList.contains("is-active")) {
        enableScroll();
        document.querySelector(".menu").classList.remove("is-active");
        document.querySelector(".header").classList.remove("menu-is-open")
        document.querySelector(".js-open-menu").classList.remove("is-active");
        window.autstaff_api.menuFlag = false;
      };
      const link = event.target.matches("a") ?
        event.target :
        event.target.closest("a");
      const hash = link.hash;

      // console.log('Hash', hash);

      const url = new URL(link.href);
      const pageUrl = new URL(window.location);

      if (pageUrl.pathname !== url.pathname) return;

      if (hash) {
        event.preventDefault();
        scrollByHash(hash);
      }
    }
  });

  if (window.location.hash) {
    scrollByHash(window.location.hash);
  }
}
