const crypto = require("crypto");
const { getRandomFortune } = require("../src/fortunes");

function verifySlackSignature(req, rawBody) {
  const slackSignature = req.headers["x-slack-signature"];
  const timestamp = req.headers["x-slack-request-timestamp"];
  if (!slackSignature || !timestamp) return false;
  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 5;
  if (parseInt(timestamp) < fiveMinutesAgo) return false;
  const sigBaseString = `v0:${timestamp}:${rawBody}`;
  const mySignature = "v0=" + crypto
    .createHmac("sha256", process.env.SLACK_SIGNING_SECRET)
    .update(sigBaseString, "utf8")
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(mySignature, "utf8"),
    Buffer.from(slackSignature, "utf8")
  );
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = JSON.stringify(req.body);
  if (!verifySlackSignature(req, rawBody)) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  const fortune = getRandomFortune();

  return res.status(200).json({
    response_type: "ephemeral",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `🥠  *Your fortune:*\n\n_${fortune.text}_`,
        },
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: fortune.cat }],
      },
    ],
  });
};
