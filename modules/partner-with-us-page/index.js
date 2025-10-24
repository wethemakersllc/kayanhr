module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Partner With us Page",
  },
  fields: {
    add: {
      partnerForm: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/form": {
              options: {
                max: 1,
              },
            },
          },
        },
      },
      bannerTitle: {
        type: "area",
        label: "Banner Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class: "text-dark-gray4 caption",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class: "text-dark-gray4 caption",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class: "text-dark-gray4 caption",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class: "text-dark-gray4 caption",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class: "text-dark-gray4 caption",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class: "text-dark-gray4 caption",
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
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class:
                    "text-dark-gray4 SubHeading4 sm:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "span",
                  label: "Blue Text",
                  class: "text-sky-blue",
                },
              ],
            },
          },
        },
      },
      points: {
        label: "Points",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "partners-points": {},
          },
        },
      },
      featuredPartners: {
        label: "Featured Partners",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "featured-partners": {},
          },
        },
      },
      testimonials: {
        label: "Testimonials",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "testimonials-slider": {},
          },
        },
      },
      clients: {
        label: "Clients",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "clients-carousel": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "partnerForm"],
      },
      banner: {
        label: "Banner",
        fields: ["bannerTitle", "bannerSubtitle", "points"],
      },
      featuredPartners: {
        label: "Featured Partners",
        fields: ["featuredPartners"],
      },
      testimonials: {
        label: "Testimonials",
        fields: ["testimonials"],
      },
    },
  },
};
