module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Why Kayan Slider Widget",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
      },
      slides: {
        label: "Slides",
        type: "array",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Title",
              required: true,
            },
            description: {
              type: "string",
              label: "Description",
              required: true,
            },
          },
        },
      },
    },
  },
};
