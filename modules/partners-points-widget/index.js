module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Partners Points Widget",
  },
  fields: {
    add: {
      pointsInfo: {
        label: "Partners Points",
        type: "array",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Title",
            },
            description: {
              type: "string",
              label: "Description",
            },
          },
        },
      },
    },
  },
};
