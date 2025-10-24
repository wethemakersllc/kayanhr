import counterUp from "counterup2";
export default () => {
  apos.util.widgetPlayers["kayan-figures"] = {
    selector: "[data-kayan-figures-widget]",
    player: function (el) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target.children[0];
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 16,
            });
            el.classList.replace("hidden", "is-visible");
          }
        });
      };
      const IO = new IntersectionObserver(callback, { threshold: 1 });
      const counters = document.querySelectorAll(".counter-wrapper");
      for (const el of counters) {
        IO.observe(el);
      }
    },
  };
};
