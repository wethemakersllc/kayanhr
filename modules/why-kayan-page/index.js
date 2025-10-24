module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Why Kayan Page",
  },
  fields: {
    add: {
      _firstImage: {
        label: "First Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },

      _secondImage: {
        label: "Secondary Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      pageTitle: {
        type: "area",
        label: "Key Features Title",
        options: {
          max: 1,
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
      featureTitle1: {
        type: "area",
        label: "Feature 1 Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
              ],
            },
          },
        },
      },
      featureSubtitle1: {
        type: "area",
        label: "Feature 1 Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "text-dark-gray2 body mt-8 lg:w-[70%]",
                },
              ],
            },
          },
        },
      },
      featureTitle2: {
        type: "area",
        label: "Feature 2 Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "text-dark-gray4 SubHeading4 lg:Title1 leading-[50px] mt-4",
                },
              ],
            },
          },
        },
      },
      featureSubtitle2: {
        type: "area",
        label: "Feature 2 Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "text-dark-gray2 body mt-8 lg:w-[78%] ",
                },
              ],
            },
          },
        },
      },
      featureTitle3: {
        type: "area",
        label: "Feature 3 Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
              ],
            },
          },
        },
      },
      featureSubtitle3: {
        type: "area",
        label: "Feature 3 Subtitle",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-4 body text-dark-gray2 lg:w-[75%]",
                },
              ],
            },
          },
        },
      },
      featureTitle4: {
        type: "area",
        label: "Feature 4 Title",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (H1)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h2",
                  label: "Heading (H2)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h3",
                  label: "Heading (H3)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h4",
                  label: "Heading (H4)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h5",
                  label: "Heading (H5)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
                {
                  tag: "h6",
                  label: "Heading (H6)",
                  class:
                    "SubHeading4 lg:Title1 ltr:text-left rtl:text-right text-dark-gray4 relative",
                },
              ],
            },
          },
        },
      },
      featureSubtitle4: {
        type: "area",
        label: "Feature 4 Subtitle",
        options: {
          max: 1,
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
      featuresSlider: {
        label: "Features Slider",
        type: "array",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Title",
            },
            description: {
              type: "string",
              label: "Description",
            },
            icon: {
              type: "area",
              label: "icon",
              required: true,
              options: {
                max: 1,
                widgets: {
                  "@apostrophecms/image": {
                    className: "max-w-[36px]",
                  },
                },
              },
            },
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
      images: {
        label: "Images",
        fields: ["_firstImage", "_secondImage"],
      },
      text: {
        label: "Text",
        fields: [
          "pageTitle",
          "featureTitle1",
          "featureSubtitle1",
          "featureTitle2",
          "featureSubtitle2",
          "featureTitle3",
          "featureSubtitle3",
          "featureTitle4",
          "featureSubtitle4",
        ],
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
