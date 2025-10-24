module.exports = {
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
      bannerDescription: {
        label: "Banner Description",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-4 body text-dark-gray2 md:w-4/5",
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

      // Video Section
      _videoSectionBackground: {
        label: "Video Section Primary Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _videoSectionImage: {
        label: "Video Section Secondary Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      videoSectionTitle: {
        label: "Video Section Title",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "Title2 md:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
              ],
            },
          },
        },
      },
      videoSectionSubTitle: {
        label: "Video Section Subtitle",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-4 body text-dark-gray2",
                },
              ],
            },
          },
        },
      },
      whyKayanSlider: {
        label: "Why Kayan Slider",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "why-kayan-slider": {},
          },
        },
      },
      kayanFigures: {
        label: "Kayan Figures",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "kayan-figures": {},
          },
        },
      },
      ourBenefits: {
        label: "Our Benefits",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "our-benefits": {},
          },
        },
      },
      integration: {
        label: "Integration",
        type: "area",
        options: {
          max: 1,
          widgets: {
            integration: {},
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
      featuresSlider: {
        label: "Features Slider",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "features-slider": {},
          },
        },
      },
      appDescription: {
        label: "App Section Description",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-12 mb-4 body text-white leading-loose",
                },
              ],
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title"],
      },
      banner: {
        label: "Banner",
        fields: ["bannerDescription"],
      },
      videoSection: {
        label: "Video Section",
        fields: [
          "youtubeVideoId",
          "_videoSectionBackground",
          "_videoSectionImage",
          "videoSectionTitle",
          "videoSectionSubTitle",
        ],
      },
      whyKayanSlider: {
        label: "Why Kayan Slider",
        fields: ["whyKayanSlider"],
      },
      kayanFigures: {
        label: "Kayan Figures",
        fields: ["kayanFigures"],
      },
      ourBenefits: {
        label: "Our Benefits",
        fields: ["ourBenefits"],
      },
      integration: {
        label: "Integration",
        fields: ["integration"],
      },
      testimonials: {
        label: "Testimonials",
        fields: ["testimonials"],
      },
      clients: {
        label: "Clients",
        fields: ["clients"],
      },
      featuresSlider: {
        label: "Features Slider",
        fields: ["featuresSlider"],
      },
      appDescription: {
        label: "Mobile App Section Description",
        fields: ["appDescription"],
      },
    },
  },
};
