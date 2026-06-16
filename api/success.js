module.exports = async function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fortune Cookie — Installed!</title>
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
    .subtitle {
      font-size: 16px;
      color: #C8B8FF;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .instruction {
      background: #1C1040;
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 15px;
      color: #FAC775;
      line-height: 1.6;
    }
    .instruction code {
      background: #2A1F58;
      padding: 2px 8px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 14px;
    }
    .fine-print {
      margin-top: 1.5rem;
      font-size: 12px;
      color: #7B6B9E;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="emoji">🥠</span>
    <h1>You're all set!</h1>
    <p class="subtitle">Fortune Cookie has been added to your Slack workspace.</p>
    <div class="instruction">
      Open any channel and type <code>/fortunecookie</code> to crack your first cookie.
    </div>
    <p class="fine-print">Only you will see your fortune. No data is stored.</p>
  </div>
</body>
</html>
  `;

  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(html);
};
