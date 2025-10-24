module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Our Benefits Widget",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true,
      },
      description: {
        type: "string",
        label: "Description",
        required: true,
      },
      footer: {
        type: "area",
        label: "Footer",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class:
                    "pb-16 mx-auto mt-4 body text-black max-w-3xl ltr:text-left rtl:text-right rtl:lg:text-center ltr:lg:text-center w-full lg:w-[80%]",
                },
                {
                  tag: "span",
                  label: "link",
                  class:
                    "text-sky-blue underline transition-opacity duration-300 opacity-100 hover:opacity-70",
                },
              ],
            },
          },
        },
      },
      benefits: {
        label: "Benefits",
        type: "array",
        fields: {
          add: {
            _image: {
              label: "Image",
              type: "relationship",
              withType: "@apostrophecms/image",
              required: true,
              max: 1,
            },
            title: {
              type: "string",
              label: "Title",
              required: true,
            },
            description: {
              type: "string",
              label: "Description",
              required: true,
            },
          },
        },
      },
    },
  },
};
