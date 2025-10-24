// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "contact-page",
        label: "Contact us",
      },
      {
        name: "feature-page",
        label: "Feature",
      },
      {
        name: "company-page",
        label: "company",
      },
      {
        name: "@apostrophecms/blog-page",
        label: "Blog Page",
      },
      { name: "partner-with-us-page", label: "Partner With us" },
      { name: "partners-page", label: "Partners" },
      { name: "why-kayan-page", label: "Why Kayan" },
      {
        name: "book-a-demo-page",
        label: "Book a Demo",
      },
      { name: "integration-page", label: "Integration" },
    ],
  },
};
