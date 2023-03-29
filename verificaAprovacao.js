const axios = require("axios");

let sid = [""];

async function verificaAprovacao(sid) {
  const response = await axios.get(
    "https://content.twilio.com/v1/Content/" + sid + "/ApprovalRequests/",
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

sid.forEach((element) => {
  verificaAprovacao(element);
});
