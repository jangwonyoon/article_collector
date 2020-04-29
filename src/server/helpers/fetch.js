const https = require("https");

async function retrieveArticle(url) {
  // TODO: retrieve the html string from given url and return as promise

  return new Promise((resolve, reject) => {
    try {
      let body = "";
      https.get(url, (res) => {
        res
          .on("data", (chunk) => {
            body = body + chunk.toString();
          })
          .on("end", () => {
            resolve(body);
          });
      });
    } catch (error) {
      reject("this is error", error);
    }
  });
}

module.exports = {
  retrieveArticle,
};
