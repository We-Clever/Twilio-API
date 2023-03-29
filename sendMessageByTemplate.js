const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    contentSid: "",
    from: "",
    contentVariables: JSON.stringify({
      1: "André",
      2: "Renato",
    }),
    body: "Ola {{1}}, boa tarde. Meu nome é {{2}}",
    to: "whatsapp:+5535999999999",
  })
  .then((message) => console.log(message.sid));
