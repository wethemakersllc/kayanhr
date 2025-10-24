require("apostrophe")({
  shortName: "kayanhr-website",
  baseUrl: process.env.BASE_URL,
  bundles: ["@apostrophecms/blog"],
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    "@apostrophecms/rich-text-widget": {
      options: {
        className: "text",
      },
    },
    "@apostrophecms/image-widget": {
      options: {
        className: "image",
      },
    },
    "@apostrophecms/blog": {},
    "@apostrophecms/blog-page": {},
    "@apostrophecms/video-widget": {
      options: {
        className: "video",
      },
    },

    "@apostrophecms/seo": {},
    "@apostrophecms/open-graph": {},
    "@apostrophecms/global": {
      options: {
        seoGoogleAnalytics: true,
        seoGoogleTagManager: true,
      },
    },
    "early-redirect": {},
    // The main form module
    "@apostrophecms/form": {},
    // The form widget module, allowing editors to add forms to content areas
    "@apostrophecms/form-widget": {},
    // Form field widgets, used by the main form module to build forms.
    "@apostrophecms/form-text-field-widget": {},
    "@apostrophecms/form-textarea-field-widget": {},
    "@apostrophecms/form-select-field-widget": {},
    "@apostrophecms/form-radio-field-widget": {},
    "@apostrophecms/form-file-field-widget": {},
    "@apostrophecms/form-checkboxes-field-widget": {},
    "@apostrophecms/form-boolean-field-widget": {},
    "@apostrophecms/form-conditional-widget": {},
    // sitemap
    "@apostrophecms/sitemap": {
      options: { baseUrl: "https://kayanhr.com" },
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    localization: {},
    "contact-page": {},
    "partner-with-us-page": {},
    "partners-page": {},
    "book-a-demo-page": {},
    "feature-banner-widget": {},
    "three-points-widget": {},
    "two-points-widget": {},
    "two-points-gray-widget": {},
    "partners-points-widget": {},
    "two-images-right-widget": {},
    "one-image-right-widget": {},
    "one-image-left-widget": {},
    "three-images-left-widget": {},
    "center-feature-1-widget": {},
    "center-feature-2-widget": {},
    "company-page": {},
    "integration-page": {},
    "form-group-separator-widget": {},
    partner: {},
    "featured-partners-widget": {},
    "partners-listing-widget": {},
    "feature-nav-widget": {},
    feature: {},
    "feature-page": {},
    "why-kayan-page": {},
    "why-kayan-slider-widget": {},
    "testimonials-slider-widget": {},
    "clients-carousel-widget": {},
    "kayan-figures-widget": {},
    "our-benefits-widget": {},
    "integration-widget": {},
    "features-slider-widget": {},
    "features-grid-widget": {},
    "center-feature-video-widget": {},
    "center-text-widget": {},
    "contact-us-widget": {},
    "whatsapp-button-widget": {},
    "@apostrophecms/redirect": {
      options: {
        withType: "feature",
        statusCode: 301,
      },
    },
  },
});
