module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Partners Listing Widget",
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
                  class: "captionpartners md:heading",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "captionpartners md:heading",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "captionpartners md:heading",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "captionpartners md:heading",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "captionpartners md:heading",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "captionpartners md:heading",
                },
              ],
            },
          },
        },
      },
      subtitle: {
        type: "area",
        label: "Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "Title3 md:caption mt-2",
                },
              ],
            },
          },
        },
      },
      _partners: {
        label: "Partners",
        type: "relationship",
        withType: "partner",
      },
    },
  },
};
