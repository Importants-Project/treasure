export default function({ app, $axios }) {
    $axios.onRequest(config => {
      config.url = encodeURI(config.url);
      // config.headers["locale"] = app.i18n.locale;
    });
  }
  