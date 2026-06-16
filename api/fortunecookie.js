const { getRandomFortune } = require("../src/fortunes");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
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
