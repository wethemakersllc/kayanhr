module.exports = {
  fields: {
    add: {
      facebookUrl: {
        type: "url",
        label: "Facebook url",
      },
      instagramUrl: {
        type: "url",
        label: "Instagram url",
      },
      linkedinUrl: {
        type: "url",
        label: "Linkedin url",
      },
      email: {
        type: "email",
        label: "Contact email",
      },
      googlePlayUrl: {
        type: "url",
        label: "Google Play url",
      },
      appStoreUrl: {
        type: "url",
        label: "App Store url",
      },
      loginUrl: {
        type: "url",
        label: "Login url",
      },
      careersUrl: {
        type: "url",
        label: "Careers url",
      },
      // findMySolutionsUrl: {
      //   type: "url",
      //   label: "Find My Solutions url",
      // },
      apiUrl: {
        type: "url",
        label: "API url",
      },
      cta: {
        type: "area",
        label: "Call to action title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      ctaSubtitle: {
        type: "area",
        label: "Call to action subtitle",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-7 Title3 md:caption text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      partnerCta: {
        type: "area",
        label: "Partners Call to action title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "SubHeading2 sm:Title1 xl:Title0 text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      partnerCtaSubtitle: {
        type: "area",
        label: "Partners Call to action subtitle",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "mt-7 Title3 md:caption text-dark-gray4",
                },
              ],
            },
          },
        },
      },
      featuresNav: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "feature-nav": {},
          },
        },
      },
      injected: {
        type: "area",
        label: "Injected Iframe",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/html": {},
          },
        },
      },
      googleAnalytics: {
        type: "string",
        label: "Google Analytics",
        help: "example: UA-165848260-1",
      },
    },
    group: {
      basics: {
        label: "Socials",
        fields: ["facebookUrl", "instagramUrl", "linkedinUrl"],
      },
      appStores: {
        label: "App Stores",
        fields: ["googlePlayUrl", "appStoreUrl"],
      },
      externalLinks: {
        label: "External Links",
        fields: ["loginUrl", "careersUrl", "findMySolutionsUrl", "apiUrl"],
      },

      cta: {
        label: "Call To Action",
        fields: ["cta", "ctaSubtitle", "partnerCta", "partnerCtaSubtitle"],
      },
      contactInfo: {
        label: "Contact Info",
        fields: ["email"],
      },
      navigation: {
        label: "Features Navigation",
        fields: ["featuresNav"],
      },
      customCode: {
        label: "Custom Iframe",
        fields: ["injected"],
      },
      googleAnalytics: {
        label: "Google Analytics",
        fields: ["googleAnalytics"],
      },
    },
  },
};
