const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.content.v1
  .contents("")
  .fetch()
  //.then(content => console.log(content.friendlyName));
  .then((content) => console.log(content));
