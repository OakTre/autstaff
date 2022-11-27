import Swiper, {
  Pagination, Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Pagination, Navigation]);

export default () => {
  const slider = document.querySelector(".js-feautures-swiper");

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 8,
    autoHeight: true,
    navigation: {
      nextEl: slider.closest(".js-feautures-swiper-parent").querySelector('.js-slider-btn-next'),
      prevEl: slider.closest(".js-feautures-swiper-parent").querySelector('.js-slider-btn-prev'),
    },
    pagination: {
      el: slider.querySelector('.site-pagination'),
      type: 'bullets',
      clickable: true
    },
    on: {
      init: function (swiper) {
        const line = slider.closest(".js-feautures-swiper-parent").querySelector(".feautures__line");
        line.style.height = swiper.wrapperEl.offsetHeight + 'px';
      },
      // slideChange: function (swiper) {
      //   console.log(swiper);
      //   const line = slider.closest(".js-feautures-swiper-parent").querySelector(".feautures__line");
      //   line.style.height = swiper.wrapperEl.offsetHeight + 'px';
      // },
    },
  });
};
