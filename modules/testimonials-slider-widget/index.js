module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Testimonials Slider Widget",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
      },
      testimonials: {
        label: "Testimonials",
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
            _image: {
              label: "Image",
              type: "relationship",
              withType: "@apostrophecms/image",
              max: 1,
            },
            name: {
              type: "string",
              label: "Name",
              required: true,
            },
            moreInfo: {
              type: "string",
              label: "More Info",
              help: "position - company",
              required: true,
            },
          },
        },
      },
    },
  },
};
