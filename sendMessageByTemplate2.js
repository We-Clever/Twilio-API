const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    contentSid: "",
    from: "",
    contentVariables: JSON.stringify({
      1: "André",
      2: "library-logo-resource2x.width-1000.png",
    }),
    body: "O mundo é bom {{1}}!!!",
    to: "whatsapp:+5535999054793",
    media: "[https://twilio-cms-prod.s3.amazonaws.com/images/{{2}}]",
  })
  .then((message) => console.log(message.sid));
