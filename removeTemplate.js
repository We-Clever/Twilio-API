
const accountSid = '';
const authToken = '';

const client = require('twilio')(accountSid, authToken);

console.log(client.content.v1.contents('').remove());
