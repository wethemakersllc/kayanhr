module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Features Grid Widget",
  },
  fields: {
    add: {
      features: {
        label: "Features",
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
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "h2",
                        label: "Heading (H2)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "h3",
                        label: "Heading (H3)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "h4",
                        label: "Heading (H4)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "h5",
                        label: "Heading (H5)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "h6",
                        label: "Heading (H6)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                      {
                        tag: "p",
                        label: "Paragraph (P)",
                        class:
                          "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                      },
                    ],
                  },
                },
              },
            },
            description: {
              type: "string",
              label: "Description",
              required: true,
            },
            shadowDisabled: {
              type: "boolean",
              label: "Disable Image Shadow",
            },
          },
        },
      },
    },
  },
};
