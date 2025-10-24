module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Three Images Left Widget",
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
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "text-dark-gray4 lg:ltr:text-left rtl:text-right md:leading-[50px] left SubHeading2 md:Title1",
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
                    "text-dark-gray2 lg:ltr:text-left rtl:text-right lg:w-[510px] leading-[32px] body mt-4 md:mt-12 ltr:pr-8 rtl:pl-8",
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
                "xl:min-w-full xl:min-h-full shadow-md three-images-left",
            },
          },
        },
      },
      featureIcon1: {
        type: "area",
        label: "First Feature Icon",
        options: {
          max: 1,

          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "lg:w-[50px] xl:w-[79px]",
            },
          },
        },
      },

      featureTitle1: {
        type: "area",
        label: "First Feature Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "lg:caption xl:SubHeading3 text-sky-blue",
                },
              ],
            },
          },
        },
      },
      featureIcon2: {
        type: "area",
        label: "Second Feature Icon",
        options: {
          max: 1,

          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "lg:w-[50px] xl:w-[79px]",
            },
          },
        },
      },
      featureTitle2: {
        type: "area",
        label: "Second Feature Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "lg:caption xl:SubHeading3 text-sky-blue",
                },
              ],
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
