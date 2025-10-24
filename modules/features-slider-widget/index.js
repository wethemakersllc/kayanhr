module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Features Slider Widget",
  },
  fields: {
    add: {
      cards: {
        label: "Feature Cards",
        type: "array",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Card Title",
              required: true,
            },
            subtitle: {
              type: "string",
              label: "Card Subtitle",
              required: true,
            },
            _feature: {
              max: 1,
              label: "Feature",
              type: "relationship",
              withType: "feature",
              required: true,
            },
            _backgroundImage: {
              label: "Background Image",
              type: "relationship",
              withType: "@apostrophecms/image",
              max: 1,
              required: true,
            },
            buttonText: {
              type: "string",
              label: "Link Text",
              required: true,
            },
            buttonType: {
              type: "select",
              label: "Link Type",
              required: true,
              choices: [
                {
                  label: "Arrow",
                  value: "arrow",
                },
                {
                  label: "Button",
                  value: "button",
                },
              ],
            },
            textColor: {
              type: "select",
              label: "Text Color",
              required: true,
              choices: [
                {
                  label: "Black",
                  value: "#262626",
                },
                {
                  label: "White",
                  value: "#FFFFFF",
                },
              ],
            },
            buttonTextColor: {
              type: "select",
              label: "Link Text Color",
              required: true,
              choices: [
                {
                  label: "Gold",
                  value: "#FBD671",
                },
                {
                  label: "White",
                  value: "#FFFFFF",
                },
                {
                  label: "Blue",
                  value: "#0F69B0",
                },
              ],
            },
            buttonBackgroundColor: {
              type: "select",
              label: "Button Background Color",
              required: true,
              choices: [
                {
                  label: "Gold",
                  value: "#F9D067",
                },
                {
                  label: "Orange",
                  value: "#FB9448",
                },
              ],
            },
          },
        },
      },
    },
  },
};
