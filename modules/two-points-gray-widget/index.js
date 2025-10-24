module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Two Points Widget",
  },
  fields: {
    add: {
      pointsInfo: {
        label: "Why Kayan Points",
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
          },
        },
      },
      title: {
        type: "area",
        label: "Title",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "h1",
                  label: "Heading (h1)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
                {
                  tag: "h2",
                  label: "Heading (h2)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
                {
                  tag: "h3",
                  label: "Heading (h3)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
                {
                  tag: "h4",
                  label: "Heading (h4)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
                {
                  tag: "h5",
                  label: "Heading (h5)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
                {
                  tag: "h6",
                  label: "Heading (h6)",
                  class:
                    " Title1 text-[#262626]  leading-[50px] ltr:pr-[7px] rtl:pl-[7px] ",
                },
              ],
            },
          },
        },
      },
      image: {
        type: "area",
        label: "Image",
        options: {
          max: 1,

          widgets: {
            "@apostrophecms/image": {
              size: "one-half",
              className: "w-[19px] h-[19px] ml-[7px]",
            },
          },
        },
      },
    },
  },
};
