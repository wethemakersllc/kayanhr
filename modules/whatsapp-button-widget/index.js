module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "WhatsApp button Widget",
  },
  fields: {
    add: {
      link: {
        type: "url",
        required: true,
        label: "Link",
        help: "example: https://wa.me/5491131234567",
      },
    },
  },
};
