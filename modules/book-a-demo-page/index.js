module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Book A Demo Page",
  },
  fields: {
    add: {
      bannerTitle: {
        type: "area",
        label: "Banner Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      bannerSubtitle: {
        type: "area",
        label: "Banner Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "mt-4 Title3 md:caption text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      bannerDescription: {
        type: "area",
        label: "Banner Description",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "body text-dark-gray1 mt-[35px] md:mt-[70px]",
                },
              ],
            },
          },
        },
      },
      bookDemoForm: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/form": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: [
          "title",
          "bannerTitle",
          "bannerSubtitle",
          "bannerDescription",
          "bookDemoForm",
        ],
      },
    },
  },
};
