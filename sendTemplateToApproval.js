let sid = "";
let friendly_name = "nome";

const axios = require("axios");

async function sendToApproval(sid, friendly_name) {
  const response = await axios.post(
    "https://content.twilio.com/v1/Content/" +
      sid +
      "/ApprovalRequests/whatsapp",
    {
      name: friendly_name,
      category: "Marketing",
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
  console.log(response.data);
}

sendToApproval(sid, friendly_name);
