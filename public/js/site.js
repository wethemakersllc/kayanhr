$(function () {
  $(".burger-aside").toggleClass("flow-root hidden");
  document.querySelector(".menu-btn").onclick = function () {
    $(".nav-menu").toggleClass(
      "ltr:-translate-x-full   rtl:translate-x-full translate-x-0"
    );
    $(".overlay-wrapper").toggleClass("opacity-0 opacity-100");
    $(".overlay").toggleClass("hidden");
  };
  document.querySelector(".overlay").onclick = function () {
    $(".nav-menu").toggleClass(
      "ltr:-translate-x-full   rtl:translate-x-full translate-x-0"
    );
    $(".overlay-wrapper").toggleClass("opacity-0 opacity-100");
    $(".overlay").toggleClass("hidden");
  };

  $(".js-modal-btn").modalVideo();
  const companiesNavArray = [
    "small-companies",
    "medium-companies",
    "big-companies",
  ];
  let activeCompany = 0;
  const classToggle =
    "border-light-blue2 bg-light-blue1 border-[#41A6F748] bg-[#41A6F748]";
  function companiesIteration() {
    if (companiesNavArray[activeCompany] === "small-companies") {
      $("#small-companies").toggleClass(classToggle);
      $("#medium-companies").toggleClass(classToggle);
      activeCompany = 1;
    } else if (companiesNavArray[activeCompany] === "medium-companies") {
      $("#medium-companies").toggleClass(classToggle);
      $("#big-companies").toggleClass(classToggle);
      activeCompany = 2;
    } else if (companiesNavArray[activeCompany] === "big-companies") {
      $("#big-companies").toggleClass(classToggle);
      $("#small-companies").toggleClass(classToggle);
      activeCompany = 0;
    }
  }

  self.setInterval(function () {
    companiesIteration();
  }, 2000);

  if ($(".bp-wrapper").attr("dir") === "rtl") {
    $.datetimepicker.setLocale("ar");
    $(".date-input-ar").datetimepicker({
      timepicker: false,
      format: "d/m/Y",
      lang: "ar",
      scrollInput: false,
    });
  } else {
    $(".date-input").datetimepicker({
      timepicker: false,
      format: "d/m/Y",
      scrollInput: false,
    });
  }

  document.getElementById("year").innerHTML = new Date().getFullYear();

  function scrollToInvalid(form) {
    const navbar = $(".nav-wrapper");
    form.find(":input").on("invalid", function (event) {
      const input = $(this);

      const first = form.find(":invalid").first();

      if (input[0] === first[0]) {
        const navbarHeight = navbar.height() + 200;

        const elementOffset = input.offset().top - navbarHeight;

        const pageOffset = window.pageYOffset - navbarHeight;

        if (
          elementOffset > pageOffset &&
          elementOffset < pageOffset + window.innerHeight
        ) {
          return true;
        }

        $("html,body").scrollTop(elementOffset);
      }
    });
  }

  const form = $("form");
  scrollToInvalid(form);

  const hoverButtons = document.getElementsByClassName("hover-follow");

  for (let i = 0; i < hoverButtons.length; i++) {
    const element = hoverButtons[i];

    element.addEventListener("mousemove", function (event) {
      const buttonRect = this.getBoundingClientRect();
      const buttonWidth = this.offsetWidth;
      const buttonHeight = this.offsetHeight;
      const buttonTop = buttonRect.top;
      const buttonLeft = buttonRect.left;

      if (!this.classList.contains("hovering")) {
        this.classList.add("hovering");
      }

      let xPos =
        buttonLeft -
        (buttonLeft + buttonWidth / 2) +
        (event.clientX - buttonLeft);
      let yPos =
        buttonTop -
        (buttonTop + buttonHeight / 2) +
        (event.clientY - buttonTop);

      if (Math.abs(xPos) > buttonWidth || Math.abs(yPos) > buttonHeight) {
        xPos = 0;
        yPos = 0;
        this.classList.remove("hovering");
      }

      this.style.transform = "translate3d(" + xPos + "px," + yPos + "px,0px)";
    });

    element.addEventListener("mouseout", function () {
      this.style.transform = "translate3d(0px,0px,0px)";
      this.classList.remove("hovering");
    });
    element.addEventListener("click", function () {
      this.style.transform = "translate3d(0px,0px,0px)";
      this.classList.remove("hovering");
    });
  }

  function animateProgress($progressBar, val, currentVal) {
    currentVal = currentVal || 0;

    const step = (val * 16) / 500;

    function animate(currentVal) {
      currentVal += step;

      $progressBar.val(currentVal);

      currentVal < val &&
        requestAnimationFrame(function () {
          animate(currentVal);
        });
    }

    function reverseAnimate(currentVal) {
      if (step > 0) {
        currentVal -= step;
        $progressBar.val(currentVal);
        currentVal >= val &&
          requestAnimationFrame(function () {
            reverseAnimate(currentVal);
          });
      } else if (currentVal > 0) {
        currentVal -= 2;
        $progressBar.val(currentVal);
        requestAnimationFrame(function () {
          reverseAnimate(currentVal);
        });
      }
    }

    if (currentVal < val) {
      animate(currentVal);
    } else if (currentVal > val) {
      reverseAnimate(currentVal);
    }
  }

  if ($(".why-kayan-features-slider").length > 0) {
    // eslint-disable-next-line no-undef
    const whyKayanSlider = tns({
      container: ".why-kayan-features-slider",
      autoplay: false,
      controls: false,
      pager: false,
      nav: false,
      mouseDrag: false,
      speed: 1000,
      loop: true,
      slideBy: 1,
      preventScrollOnTouch: "auto",
      preventActionWhenRunning: true,
      gutter: 20,
      edgePadding: 10,
      items: 1,
      responsive: {
        500: {
          items: 1,
        },
        650: {
          items: 2,
        },

        1200: {
          items: 3,
        },
      },
    });
    document.querySelector(".why-kayan-features-slider-next").onclick =
      function () {
        whyKayanSlider.goTo("next");
      };
    document.querySelector(".why-kayan-features-slider-prev").onclick =
      function () {
        whyKayanSlider.goTo("prev");
      };

    const updateProgress = (info, eventName) => {
      const totalSlides = Number(info.slideCount) - 1;

      const index = info.index;

      const progress =
        (((index + 1) % Number(info.slideCount)) / totalSlides) * 100;

      animateProgress(
        $("progress"),
        progress > 100 ? 0 : progress < 0 ? 100 : progress,
        $("progress").val()
      );
    };

    whyKayanSlider.events.on("indexChanged", updateProgress);

    whyKayanSlider.events.off("transitionEnd", updateProgress);
  }
  if ($(".why-kayan-features-slider-ar").length > 0) {
    // eslint-disable-next-line no-undef
    const whyKayanSlider = tns({
      container: ".why-kayan-features-slider-ar",
      startIndex: Number(
        $(".why-kayan-features-slider-ar").data("slides-count") * 2
      ),
      autoplay: false,
      controls: false,
      pager: false,
      nav: false,
      mouseDrag: false,
      speed: 1000,
      loop: true,
      slideBy: 1,
      preventScrollOnTouch: "auto",
      preventActionWhenRunning: true,
      gutter: 20,
      edgePadding: 10,
      items: 1,
      responsive: {
        500: {
          items: 1,
        },
        650: {
          items: 2,
        },

        1200: {
          items: 3,
        },
      },
    });
    document.querySelector(".why-kayan-features-slider-ar-next").onclick =
      function () {
        whyKayanSlider.goTo("next");
      };
    document.querySelector(".why-kayan-features-slider-ar-prev").onclick =
      function () {
        whyKayanSlider.goTo("prev");
      };
    const updateProgress = (info, eventName) => {
      const totalSlides = Number(info.slideCount) - 1;

      const index = info.index;

      const progress =
        100 - (((index + 1) % Number(info.slideCount)) / totalSlides) * 100;

      animateProgress(
        $("progress"),
        progress > 100 ? 0 : progress < 0 ? 100 : progress,
        $("progress").val()
      );
    };

    whyKayanSlider.events.on("indexChanged", updateProgress);

    whyKayanSlider.events.off("transitionEnd", updateProgress);
  }
});
