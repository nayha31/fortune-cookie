const { getRandomFortune } = require("../src/fortunes");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const fortune = getRandomFortune();
  const fortuneText = fortune.author
    ? `"${fortune.text}"\n— ${fortune.author}`
    : fortune.text;

  return res.status(200).json({
    response_type: "ephemeral",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `🥠\n\n_${fortuneText}_`,
        },
      },
    ],
  });
};
