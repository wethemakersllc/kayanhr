module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Clients Carousel Widget",
  },
  fields: {
    add: {
      clients: {
        label: "Clients",
        type: "array",
        fields: {
          add: {
            _image: {
              label: "Image",
              type: "relationship",
              withType: "@apostrophecms/image",
              required: true,
              max: 1,
            },
          },
        },
      },
    },
  },
};
