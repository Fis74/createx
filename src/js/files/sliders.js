/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
  Controller,
} from "swiper/modules";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import "swiper/css";

// Инициализация слайдеров

// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице

// Указываем скласс нужного слайдера
// Создаем слайдер
if (document.querySelector(".slider-hero")) {
  new Swiper(".slider-hero", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation, Controller, Pagination, Autoplay],
    slidesPerView: 1,
    speed: 1500,
    navigation: {
      prevEl: ".slider-hero__prev",
      nextEl: ".slider-hero__next",
    },
    pagination: {
      el: ".slider-hero__pagination",
      type: "bullets",
      clickable: true,
    },
    on: {
      init: function () {
        const paginationBullets = document.querySelectorAll(
          ".slider-hero__pagination .swiper-pagination-bullet"
        );

        paginationBullets.forEach((el) => {
          el.innerHTML = `<span class="slider-hero__bar"></span>`;
        });
      },
    },
  });
}
if (document.querySelector(".block-projects__slider")) {
  new Swiper(".block-projects__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    speed: 800,
    navigation: {
      prevEl: ".block-projects__prev",
      nextEl: ".block-projects__next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      668: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
        // Эффекты
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        */

    // Пагинация
    /*
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        */

    // Скроллбар
    /*
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        */

    // Кнопки "влево/вправо"

    // Брейкпоинты

    // События
  });
}

if (document.querySelector(".slider-reviews")) {
  new Swiper(".slider-reviews", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: ".slider-reviews__prev",
      nextEl: ".slider-reviews__next",
    },

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

    // Пагинация
    /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

    // Скроллбар
    /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

    // Кнопки "влево/вправо"

    // Брейкпоинты
    /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
    // События
  });
}

if (
  document.querySelector(".work-cottage__slider") &&
  document.querySelector(".work-cottage__slider-nav")
) {
  const nav = new Swiper(".work-cottage__slider-nav", {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: 10,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      390: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 5,
      },
      750: {
        slidesPerView: 6,
      },
      900: {
        slidesPerView: 7,
      },
    },
  });
  new Swiper(".work-cottage__slider", {
    modules: [Navigation, Pagination, Thumbs],
    slidesPerView: 1,
    speed: 1500,
    navigation: {
      prevEl: ".work-cottage__prev",
      nextEl: ".work-cottage__next",
    },
    thumbs: {
      swiper: nav,
    },
  });
}

if (document.querySelector(".history__slider")) {
  const workSlider = new Swiper(".history__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 800,
    navigation: {
      prevEl: ".history__prev",
      nextEl: ".history__next",
    },
  });

  workSlider.on("slideChange", function () {
    historyBtns.forEach((el) => {
      el.classList.remove("history__button--active");
    });

    document
      .querySelector(`.history__button[data-index="${workSlider.realIndex}"]`)
      .classList.add("history__button--active");
  });

  const historyBtns = document.querySelectorAll(".history__button");

  historyBtns.forEach((el, idx) => {
    el.setAttribute("data-index", idx);

    el.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach((el) => {
        el.classList.remove("history__button--active");
      });

      e.currentTarget.classList.add("history__button--active");

      workSlider.slideTo(index);
    });
  });
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}
