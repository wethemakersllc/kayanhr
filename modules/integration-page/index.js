module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "company-page",
  },
  fields: {
    add: {
      titleOne: {
        type: "area",
        label: "Banner Title",
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
      bannerSubtitle: {
        type: "area",
        label: "Banner Subtitle",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class:
                    " text-[#26262] rtl:Tajawal text-[15px] lg:caption ltr:text-left rtl:text-right lg:text-center leading-[24px] ltr:lg:pl-[1px]  rtl:lg:pr-[1px] ",
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
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class:
                    " text-[#696969] xl:pl-[250px] xl:pr-[250px] body ltr:text-left rtl:text-right lg:text-center pt-[40px] lg:pt-[63px] ",
                },
              ],
            },
          },
        },
      },
      ssoTitle: {
        type: "area",
        label: "SSO Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      ssoDescription: {
        type: "area",
        label: "SSO Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class: "mt-4 body text-dark-gray2",
                },
              ],
            },
          },
        },
      },

      posTitle: {
        type: "area",
        label: "POS Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      posDescription: {
        type: "area",
        label: "POS Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class: "mt-4 body text-dark-gray2",
                },
              ],
            },
          },
        },
      },

      connectorTitle: {
        type: "area",
        label: "Connector Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      connectorDescription: {
        type: "area",
        label: "Connector Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class: "mt-4 body text-dark-gray2",
                },
              ],
            },
          },
        },
      },
      sparkTitle: {
        type: "area",
        label: "Connector Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "heading (h1)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h2",
                  label: "heading (h2)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h3",
                  label: "heading (h3)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h4",
                  label: "heading (h4)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h5",
                  label: "heading (h5)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
                {
                  tag: "h6",
                  label: "heading (h6)",
                  class:
                    "Title2 sm:Title1 ltr:text-left rtl:text-right text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      sparkDescription: {
        type: "area",
        label: "Connector Description",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (p)",
                  class: "mt-4 body text-dark-gray2",
                },
              ],
            },
          },
        },
      },

      _ssoImage: {
        label: "SSO Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _posImage: {
        label: "POS Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _connectorImage: {
        label: "Connector Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _sparkImage: {
        label: "Connector Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title"],
      },
      banner: {
        label: "Banner",
        fields: ["titleOne", "bannerSubtitle", "bannerDescription"],
      },
      sso: {
        label: "SSO",
        fields: ["ssoTitle", "ssoDescription", "_ssoImage"],
      },
      pos: {
        label: "POS",
        fields: ["posTitle", "posDescription", "_posImage"],
      },
      connector: {
        label: "Connector",
        fields: ["connectorTitle", "connectorDescription", "_connectorImage"],
      },
      spark: {
        label: "Spark",
        fields: ["sparkTitle", "sparkDescription", "_sparkImage"],
      },
    },
  },
};
