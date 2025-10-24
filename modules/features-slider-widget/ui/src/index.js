export default () => {
  apos.util.widgetPlayers["features-slider"] = {
    selector: "[data-features-slider-widget]",
    player: function (el) {
      // eslint-disable-next-line no-undef
      if ($(".my-slider").length > 0) {
        // eslint-disable-next-line no-undef
        const featuresSlider = tns({
          container: ".my-slider",
          autoplay: false,
          controls: false,
          pager: false,
          nav: false,
          mouseDrag: false,
          speed: 1000,
          loop: false,
          responsive: {
            300: {
              items: 1,
              fixedWidth: 300,
              gutter: 10,
            },
            370: {
              items: 1,
              fixedWidth: 300,
              gutter: 30,
            },
            390: {
              items: 1,
              fixedWidth: 400,
              gutter: 20,
            },
            410: {
              items: 1,
              fixedWidth: 350,
              gutter: 30,
            },
            500: {
              items: 3,
              fixedWidth: 450,
              gutter: 10,
            },

            1200: {
              fixedWidth: 630,
              gutter: 30,
              items: 3,
            },
          },
        });
        document.querySelector(".slider-next").onclick = function () {
          featuresSlider.goTo("next");
        };
        document.querySelector(".slider-prev").onclick = function () {
          featuresSlider.goTo("prev");
        };
      }
      if ($(".my-slider-ar").length > 0) {
        // eslint-disable-next-line no-undef
        const featuresSlider = tns({
          container: ".my-slider-ar",
          autoplay: false,
          controls: false,
          pager: false,
          nav: false,
          startIndex: 100000,
          mouseDrag: false,
          speed: 1000,
          loop: false,
          preventActionWhenRunning: true,
          edgePadding: 10,
          responsive: {
            300: {
              items: 1,
              fixedWidth: 300,
              gutter: 10,
            },
            370: {
              items: 1,
              fixedWidth: 300,
              gutter: 30,
            },
            390: {
              items: 1,
              fixedWidth: 400,
              gutter: 20,
            },
            410: {
              items: 1,
              fixedWidth: 350,
              gutter: 30,
            },
            500: {
              items: 3,
              fixedWidth: 450,
              gutter: 10,
            },

            1200: {
              fixedWidth: 630,
              gutter: 30,
              items: 3,
            },
          },
        });
        document.querySelector(".slider-next").onclick = function () {
          featuresSlider.goTo("next");
        };
        document.querySelector(".slider-prev").onclick = function () {
          featuresSlider.goTo("prev");
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
