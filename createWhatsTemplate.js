const axios = require("axios");

async function createTemplate() {
  const response = await axios.post(
    "https://content.twilio.com/v1/Content",
    {
      friendly_name: "nome",
      language: "pt_BR",
      variables: {},
      types: {
        "twilio/text": {
          body: "O mundo é bom Sebastião",
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "",
        password: "",
      },
    }
  );
}

createTemplate();
