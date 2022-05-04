const { OAuth2Client } = require("google-auth-library");

require("dotenv").config();
const http = require("http");
const url = require("url");
const open = require("open");
const destroyer = require("server-destroy");
const keys = require("../keys.json");

// acquire pre autheneticated oauth2 client
async function main() {
  // make request to people api
  getAuthenticatedClient();
  const url = "https://people.googleapis.com/v1/people/me?personFields=names";
  // const client = createServer();
  // const res = await client.request({ url });
  // console.log(res.data);

  // // check access token info when acquired
  // const tokenInfo = await oAuth2Client.getTokenInfo(
  //   oAuth2Client.credentials.access_token
  // );
  // console.log(tokenInfo);
}

let oAuth2Client;
let authorizeUrl;

// create a new oauth2 client, returns full client to cb
function getAuthenticatedClient() {
  console.log("in authenticate client func");

  oAuth2Client = new OAuth2Client(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0]
  );
  console.log(oAuth2Client);

  // generates url for consent dialogue
  authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    prompt: "consent",
  });
  console.log(authorizeUrl);
}

// destroyer(server);

function createServer(req, res, next) {
  // open an http server to accept oauth callback
  console.log("in crate server outer");
  const server = http
    .createServer(async (req, res) => {
      console.log(req.body);
      try {
        if (req.url.indexOf("/auth/redirect") > -1) {
          console.log("in url indexOf");
          const qs = new url.URL(req.url, "https://localhost:6000")
            .searchParams;
          const code = qs.get("code");
          console.log(`Code is: ${code}`);
          res.end("Auth successful! Please return to console");
          server.destroy();

          // use code to acquire tokens
          const r = await oAuth2Client.getToken(code);
          oAuth2Client.setCredentials(r.tokens);
          console.info("Tokens acquired.");
          return oAuth2Client;
        }
      } catch (e) {
        console.error(e);
      }
    })
    .listen(6000, () => {
      open(authorizeUrl, { wait: false }).then((cp) => cp.unref());
    });
}

// main().catch(console.error);

module.exports = {
  main,
  createServer,
};
