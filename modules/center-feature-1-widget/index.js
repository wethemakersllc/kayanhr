module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Center Feature 1 Widget",
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
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "text-dark-gray4 SubHeading2 sm:Title1 xl:Title0",
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
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "text-dark-gray4 Button3 sm:caption mt-2",
                },
              ],
            },
          },
        },
      },
      description: {
        type: "area",
        label: "Description",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class:
                    "body text-dark-gray1 xl:pl-[190px] xl:pr-[190px] mt-8 md:mt-14",
                },
              ],
            },
          },
        },
      },
      image: {
        type: "area",
        label: "Image",
        options: {
          max: 1,

          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className:
                "xl:min-w-full xl:min-h-full shadow-md center-feature-1 rounded-xl",
            },
          },
        },
      },
      shadowDisabled: {
        type: "boolean",
        label: "Disable Image Shadow",
      },
      smallImage: {
        type: "boolean",
        label: "Smaller Image",
      },
    },
  },
};
