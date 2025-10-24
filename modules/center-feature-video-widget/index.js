module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Center Feature Video Widget",
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
      youtubeVideoId: {
        label: "Youtube Video ID",
        type: "string",
        help: "example: https://www.youtube.com/watch?v=PoCha0UuvvI&t=4s --> PoCha0UuvvI",
      },
      _videoSectionBackground: {
        label: "Video Section Background",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
    },
  },
};
