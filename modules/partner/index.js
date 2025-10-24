module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Partner",
    seoCanonicalTypes: ["@apostrophecms/page"],
  },
  fields: {
    add: {
      featureType: { type: "string", label: "Feature Type", required: true },
      cardTitle: { type: "string", label: "Card title", required: true },
      cardDescription: {
        type: "string",
        label: "Card description",
        required: true,
      },
      partnerLogo: {
        type: "area",
        label: "Partner logo",
        required: true,
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "max-w-[82px]",
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["featureType", "cardTitle", "cardDescription", "partnerLogo"],
      },
    },
  },
};
