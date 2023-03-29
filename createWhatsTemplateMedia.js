const axios = require("axios");

async function createTemplate() {
  const response = await axios.post(
    "https://content.twilio.com/v1/Content",
    {
      friendly_name: "abordagem_10032023",
      language: "pt_BR",
      variables: {
        1: "name",
        2: "link",
      },
      types: {
        "twilio/media": {
          body: "O mundo é bom {{1}}!!!",
          media: ["https://twilio-cms-prod.s3.amazonaws.com/{{2}}"],
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
  console.log(response);
}

createTemplate();
