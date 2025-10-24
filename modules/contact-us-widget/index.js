module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Contact Us Widget",
  },
  fields: {
    add: {
      contactForm: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/form": {},
          },
        },
      },
      bannerDescription: {
        type: "area",
        label: "Banner description",
        default:
          "Our team is available throughout the week to answer your calls and inquiries. Please check and schedule an appointment for free.",
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
      telephone: {
        type: "area",
        label: "Telephone",
        default: "Telephone: +962-6-5693999",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "caption2 revert-unicode-bidi",
                },
                {
                  tag: "span",
                  label: "Title",
                  class: "Title4 revert-unicode-bidi",
                },
              ],
            },
          },
        },
      },
      fax: {
        type: "area",
        label: "Fax",
        default: "Fax: +962-6-5693998",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "caption2 revert-unicode-bidi",
                },
                {
                  tag: "span",
                  label: "Title",
                  class: "Title4 revert-unicode-bidi",
                },
              ],
            },
          },
        },
      },
      email: {
        type: "area",
        label: "email",
        default: "info@kayanhr.com",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "caption2",
                },
              ],
            },
          },
        },
      },
      workingDays: {
        type: "area",
        label: "Working days",
        default: "Sun – Thu",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "Title4",
                },
              ],
            },
          },
        },
      },
      workingHours: {
        type: "area",
        label: "Working hours",
        default: "8:30 AM - 5:00 PM",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "caption2",
                },
              ],
            },
          },
        },
      },
      address: {
        type: "area",
        label: "Address",
        default:
          "Anshasi Square #28, Al-Husari St. Al Shumaisani, Amman 11194 - P.O.Box 942181",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                  class: "caption2",
                },
              ],
            },
          },
        },
      },
      googleMap: {
        type: "url",
        label: "Google map",
        default:
          "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ63QDhuShHBURCey0ZP8jIak&key=AIzaSyDBPQ8JbJA4SvEURihFa7UZFqki9tRpt4A",
      },
    },
  },
};
