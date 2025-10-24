module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Form Group Separator",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Form Group Title",
      },
    },
  },
};
