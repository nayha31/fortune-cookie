const { getRandomFortune } = require("../src/fortunes");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { response_url } = req.body;

  // Respond to Slack immediately to avoid timeout
  res.status(200).send("");

  // Send the fortune asynchronously
  const fortune = getRandomFortune();

  await fetch(response_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      response_type: "ephemeral",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `🥠  *Your fortune:*\n\n_${fortune.text}_`,
          },
        },
    
      ],
    }),
  });
};
