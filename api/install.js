module.exports = async function handler(req, res) {
  const clientId = process.env.SLACK_CLIENT_ID;

  const slackInstallUrl =
    `https://slack.com/oauth/v2/authorize` +
    `?client_id=${clientId}` +
    `&scope=commands` +
    `&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fortune Cookie for Slack</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #1C1040;
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .card {
      background: #2A1F58;
      border-radius: 24px;
      padding: 3rem 2.5rem;
      max-width: 480px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    .emoji { font-size: 72px; margin-bottom: 1.5rem; display: block; }
    h1 { font-size: 28px; font-weight: 700; margin-bottom: 0.75rem; }
    .tagline {
      font-size: 16px;
      color: #C8B8FF;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .fortune-preview {
      background: #1C1040;
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 2rem;
      font-style: italic;
      color: #FAC775;
      font-size: 15px;
      line-height: 1.6;
    }
    .add-to-slack {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #fff;
      color: #1a1a1a;
      font-weight: 600;
      font-size: 16px;
      padding: 14px 28px;
      border-radius: 10px;
      text-decoration: none;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .add-to-slack:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .slack-logo { width: 24px; height: 24px; }
    .fine-print {
      margin-top: 1.5rem;
      font-size: 12px;
      color: #7B6B9E;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="emoji">🥠</span>
    <h1>Fortune Cookie</h1>
    <p class="tagline">
      A daily fortune for women at work.<br/>
      Type <strong>/fortunecookie</strong> whenever you need one.
    </p>
    <div class="fortune-preview">
      "What you have been building in the dark is about to catch the light."
    </div>
    <a href="${slackInstallUrl}" class="add-to-slack">
      <svg class="slack-logo" viewBox="0 0 122 122" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6 76.2a12.8 12.8 0 1 1-12.8-12.8h12.8v12.8zm6.4 0a12.8 12.8 0 0 1 25.6 0v32a12.8 12.8 0 0 1-25.6 0v-32z" fill="#E01E5A"/>
        <path d="M45.8 25.6a12.8 12.8 0 1 1 12.8-12.8v12.8H45.8zm0 6.4a12.8 12.8 0 0 1 0 25.6H13.8a12.8 12.8 0 0 1 0-25.6h32z" fill="#36C5F0"/>
        <path d="M96.2 45.8a12.8 12.8 0 1 1 12.8 12.8H96.2V45.8zm-6.4 0a12.8 12.8 0 0 1-25.6 0v-32a12.8 12.8 0 0 1 25.6 0v32z" fill="#2EB67D"/>
        <path d="M76 96.2a12.8 12.8 0 1 1-12.8 12.8V96.2H76zm0-6.4a12.8 12.8 0 0 1 0-25.6h32a12.8 12.8 0 0 1 0 25.6H76z" fill="#ECB22E"/>
      </svg>
      Add to Slack
    </a>
    <p class="fine-print">
      Free forever · No data stored · Only you see your fortune
    </p>
  </div>
</body>
</html>
  `;

  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(html);
};
