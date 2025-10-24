module.exports = {
  // TODO: change config
  options: {
    from: "no-reply@wtmsrv.com",
    nodemailer: {
      host: "panel.wtmsrv.com",
      secure: true,
      auth: {
        user: "no-reply@wtmsrv.com",
        pass: "wtmSRV@020",
      },
    },
  },
};
