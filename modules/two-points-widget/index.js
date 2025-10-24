module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Two Points Widget",
  },
  fields: {
    add: {
      pointsInfo: {
        label: "Feature Module Points",
        type: "array",
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
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "h2",
                        label: "Heading (H2)",
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "h3",
                        label: "Heading (H3)",
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "h4",
                        label: "Heading (H4)",
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "h5",
                        label: "Heading (H5)",
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "h6",
                        label: "Heading (H6)",
                        class: "mb-4 Title2 text-black",
                      },
                      {
                        tag: "p",
                        label: "Paragraph (P)",
                        class: "mb-4 Title2 text-black",
                      },
                    ],
                  },
                },
              },
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
