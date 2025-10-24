module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Center Text Widget",
  },
  fields: {
    add: {
      title: {
        type: "area",
        label: "Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "text-dark-gray4 SubHeading1",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "text-dark-gray4 SubHeading2",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "text-dark-gray4 SubHeading3",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "text-dark-gray4 SubHeading4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "text-dark-gray4 SubHeading5",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "text-dark-gray4 SubHeading6",
                },
              ],
            },
          },
        },
      },
    },
  },
};
