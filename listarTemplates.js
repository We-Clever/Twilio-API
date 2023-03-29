const axios = require("axios");

async function listarTemplates() {
  const response = await axios.get(
    "https://content.twilio.com/v1/Content?PageSize=1000",
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

  console.log(response.data.contents);
}

listarTemplates();
