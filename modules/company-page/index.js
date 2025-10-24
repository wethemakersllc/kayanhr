module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "company-page",
  },
  fields: {
    add: {
      widgets: {
        type: "area",
        label: "Widgets",
        options: {
          widgets: {
            "two-points-gray": {},
            "center-feature-video": {},
            "contact-us": {},
            "whatsapp-button": {},
          },
        },
      },
      firstDescription: {
        type: "area",
        label: "First Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class:
                    " text-[#26262] rtl:Tajawal text-[15px] lg:caption ltr:text-left rtl:text-right lg:text-center leading-[24px] ltr:lg:pl-[1px] rtl:lg:pr-[1px] ",
                },
              ],
            },
          },
        },
      },

      secondDescription: {
        type: "area",
        label: "second Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class:
                    " text-[#696969] xl:pl-[390px] xl:pr-[390px] body ltr:text-left rtl:text-right lg:text-center pt-[40px] lg:pt-[63px] ",
                },
              ],
            },
          },
        },
      },
      thirdDescription: {
        type: "area",
        label: "Third Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class: "body text-[#727272]",
                },
              ],
            },
          },
        },
      },
      titleOne: {
        type: "area",
        label: "Title One",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "text-[#26262] rtl:Tajawal text-[40px] lg:Title0 pt-[10px]",
                },
              ],
            },
          },
        },
      },
      titleTwo: {
        type: "area",
        label: "Title Two",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "rtl:Tajawal text-[25px] lg:Title1 leading-[50px] text-[#262626] ltr:text-left rtl:text-right mb-[25px]",
                },
              ],
            },
          },
        },
      },
      imageOne: {
        type: "area",
        label: "image One",
        options: {
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
      imageTwo: {
        type: "area",
        label: "image Two",
        options: {
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
      imageThree: {
        type: "area",
        label: "image Three",
        options: {
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
      imageWithTitle: {
        type: "area",
        label: "image Title",
        options: {
          widgets: {
            "@apostrophecms/image": {},
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
        fields: ["imageOne", "imageTwo", "imageThree"],
      },
      content: {
        label: "Content",
        fields: [
          "titleOne",
          "firstDescription",
          "titleTwo",
          "secondDescription",
          "thirdDescription",
          "imageWithTitle",
        ],
      },
      widgets: {
        label: "Widgets",
        fields: ["widgets"],
      },
    },
  },
};
