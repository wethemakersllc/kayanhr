module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Partners Page",
  },
  fields: {
    add: {
      partners: {
        label: "partners",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "partners-listing": {},
          },
        },
      },
      testimonials: {
        label: "Testimonials",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "testimonials-slider": {},
          },
        },
      },
      clients: {
        label: "Clients",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "clients-carousel": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title"],
      },

      partners: {
        label: "Partners",
        fields: ["partners"],
      },
      testimonials: {
        label: "Testimonials",
        fields: ["testimonials"],
      },
      clients: {
        label: "Clients",
        fields: ["clients"],
      },
    },
  },
};
