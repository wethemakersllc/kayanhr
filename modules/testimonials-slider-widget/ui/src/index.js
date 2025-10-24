export default () => {
  apos.util.widgetPlayers["testimonials-slider"] = {
    selector: "[data-testimonials-slider-widget]",
    player: function (el) {
      // eslint-disable-next-line no-undef
      if ($(".testimonials-slider").length > 0) {
        // eslint-disable-next-line no-undef
        const testimonialsSlider = tns({
          container: ".testimonials-slider",
          items: 1,
          slideBy: "page",
          autoplay: false,
          controls: false,
          pager: false,
          nav: false,
          mouseDrag: false,
          speed: 1000,
          loop: true,
          gutter: 120,
          edgePadding: 5,
          preventActionWhenRunning: true,
        });
        document.querySelector(".testimonials-slider-next").onclick =
          function () {
            testimonialsSlider.goTo("next");
          };
        document.querySelector(".testimonials-slider-prev").onclick =
          function () {
            testimonialsSlider.goTo("prev");
          };
        document.querySelector(".testimonials-slider-mobile-next").onclick =
          function () {
            testimonialsSlider.goTo("next");
          };
        document.querySelector(".testimonials-slider-mobile-prev").onclick =
          function () {
            testimonialsSlider.goTo("prev");
          };
      }
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

          this.style.transform =
            "translate3d(" + xPos + "px," + yPos + "px,0px)";
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
    },
  };
};
