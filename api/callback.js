module.exports = async function handler(req, res) {
  const { code, error } = req.query;

  // User declined the install
  if (error) {
    return res.redirect("/api/install?error=cancelled");
  }

  if (!code) {
    return res.status(400).send("Missing code parameter");
  }

  try {
    // Exchange the temporary code for an access token
    const response = await fetch("https://slack.com/api/oauth.v2.access", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code,
        redirect_uri: process.env.SLACK_REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Slack OAuth error:", data.error);
      return res.redirect("/api/install?error=oauth_failed");
    }

    // Installation successful — redirect to success page
    // Note: for a slash command only app, we don't need to store the token
    // Slack handles routing the slash command to your endpoint automatically
    return res.redirect("/api/success");

  } catch (err) {
    console.error("OAuth callback error:", err);
    return res.status(500).send("Something went wrong. Please try again.");
  }
};
