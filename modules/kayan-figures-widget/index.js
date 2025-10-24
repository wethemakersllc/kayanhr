module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Kayan Figures Widget",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
      },
      subtitle: {
        type: "string",
        label: "Subtitle",
        required: true,
      },
      figures: {
        type: "array",
        label: "Figures",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Title",
              required: true,
            },
            value: {
              type: "integer",
              label: "Value",
              required: true,
            },
            plus: {
              type: "boolean",
              label: "Plus Icon",
            },
          },
        },
      },
    },
  },
};
