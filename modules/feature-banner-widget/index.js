module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Feature Banner Widget",
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
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "ltr:text-left rtl:text-right SubHeading2 sm:Title1 xl:Title0 text-dark-gray4 mb-2 md:mb-4",
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
                  class:
                    "left SubHeading sm:SubHeading2 xl:Title1 text-dark-gray4 ltr:text-left rtl:text-right mb-4 md:mb-6",
                },
                {
                  tag: "span",
                  label: "Title",
                  class: "text-sky-blue",
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
                    "rtl:Tajawal text-[18px] ltr:text-left rtl:text-right w-[auto] text-dark-gray2 body",
                },
              ],
            },
          },
        },
      },
      featureCardTitle: {
        type: "area",
        label: "Feature Card Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "text-dark-gray7 caption3",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "text-dark-gray7 caption3",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "text-dark-gray7 caption3",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "text-dark-gray7 caption3",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "text-dark-gray7 caption3",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "text-dark-gray7 caption3",
                },
              ],
            },
          },
        },
      },
      featureCardSubtitle: {
        type: "area",
        label: "Feature Card Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-auto text-black caption2",
                },
              ],
            },
          },
        },
      },
      featureCardIcon: {
        type: "area",
        label: "Feature Card Icon",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "mx-auto",
            },
          },
        },
      },
    },
  },
};
