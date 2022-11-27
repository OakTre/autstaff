import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const menuBtn = document.querySelector(".js-open-menu");
  const menu = document.querySelector(".js-main-menu");
  let menuFlag = false;

  if (!menuBtn) return;

  menuBtn.addEventListener("click", () => {
    switch (menuFlag) {
      case false:
        menuBtn.classList.add("is-active");

        menu.classList.add("is-active");
        document.querySelector(".header").classList.add("menu-is-open");
        disableScroll();
        menuFlag = true;

        break;
      case true:
        menuBtn.classList.remove("is-active");

        menu.classList.remove("is-active");
        document.querySelector(".header").classList.remove("menu-is-open");

        enableScroll();
        menuFlag = false;
        break;
    };
  });
};
