module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Feature Navigation Widget",
  },
  fields: {
    add: {
      _peopleManagement: {
        label: "People Management Features",
        type: "relationship",
        withType: "feature",
      },
      _engagement: {
        label: "Engagement Features",
        type: "relationship",
        withType: "feature",
      },
      _compensation: {
        label: "Compensation Features",
        type: "relationship",
        withType: "feature",
      },
      _talentManagement: {
        label: "Talent Management Features",
        type: "relationship",
        withType: "feature",
      },
    },
  },
};
