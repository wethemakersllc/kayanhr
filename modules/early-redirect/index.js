module.exports = {
  middleware(self) {
    return {
      earlyRedirect: {
        before: "@apostrophecms/redirect",
        middleware(req, res, next) {
          // redirect /features to /
          if (req.url.includes("//features/kayan-hunt")) {
            return res.redirect(
              "/features/kayan-hunt-elevate-your-career-site-kayanhr"
            );
          }
          if (req?.url?.match(/features$/)) {
            return res.redirect("/");
          } else if (req?.url?.includes("blogs")) {
            return res.redirect("/blog/" + req?.url?.split("blogs")[1]);
          } else {
            return next();
          }
        },
      },
    };
  },
};
