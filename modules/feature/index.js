module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Feature",
    seoCanonicalTypes: ["@apostrophecms/page", "feature"],
  },
  fields: {
    add: {
      banner: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "feature-banner": {},
          },
        },
      },
      content: {
        type: "area",
        options: {
          widgets: {
            "three-points": {},
            "two-points": {},
            "two-images-right": {},
            "one-image-right": {},
            "one-image-left": {},
            "three-images-left": {},
            "center-feature-1": {},
            "center-feature-2": {},
            "features-grid": {},
            "center-feature-video": {},
            "center-text": {},
            "whatsapp-button": {},
          },
        },
      },
      beta: {
        type: "boolean",
        label: "Beta",
      },
      displayTitle: {
        type: "string",
        label: "Displayed Title",
      },
      disableNavigation: {
        type: "boolean",
        label: "Disable Navigation",
      },
      schemaDescription: {
        type: "string",
        label: "Schema Description (used for SEO Schema Markup)",
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: [
          "title",
          "displayTitle",
          "category",
          "beta",
          "disableNavigation",
          "schemaDescription",
        ],
      },
      widgets: {
        label: "Widgets",
        fields: ["banner", "content"],
      },
    },
  },
};
