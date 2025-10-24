module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Integration Widget",
  },
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
      integrations: {
        label: "Integrations",
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
