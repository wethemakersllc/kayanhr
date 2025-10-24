module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Center Feature 2 Widget",
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
                  class: "caption3 md:heading text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "caption3 md:heading text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "caption3 md:heading text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "caption3 md:heading text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "caption3 md:heading text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "caption3 md:heading text-dark-gray4",
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
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "Title3 md:caption text-dark-gray4 mx-[20px] rtl:md:mr-[25px] ltr:md:ml-[25px] text-center rtl:md:text-right ltr:md:text-left",
                },
              ],
            },
          },
        },
      },
      emoji: {
        type: "area",
        label: "Emoji",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "hidden md:block w-[35px]",
            },
          },
        },
      },
      primaryImage: {
        type: "area",
        label: "Primary image",
        options: {
          max: 1,

          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className:
                "min-w-full min-h-full rounded-xl shadow-md center-feature-2",
            },
          },
        },
      },
      secondaryImage: {
        type: "area",
        label: "Secondary image",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className:
                "xl:min-h-full xl:min-w-full shadow-md center-feature-2",
            },
          },
        },
      },
      shadowDisabled: {
        type: "boolean",
        label: "Disable Image Shadow",
      },
    },
  },
};
