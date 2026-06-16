# 🥠 /fortunecookie — Slack Bot

A slash command that delivers oracular, forward-facing fortunes for women at work.
Ephemeral — only the person who types `/fortunecookie` sees the message.

---

## How it works

1. User types `/fortunecookie` in any Slack channel or DM
2. Slack sends a POST request to your Vercel endpoint
3. The bot picks a random fortune and returns it as an ephemeral message
4. Only the user who invoked the command sees it

---

## Deploy in 4 steps

### Step 1 — Deploy to Vercel

```bash
# Install Vercel CLI if you don't have it
npm i -g vercel

# From the project folder:
vercel deploy --prod
```

Copy the production URL — it will look like:
`https://fortunecookie-abc123.vercel.app`

Your slash command endpoint will be:
`https://fortunecookie-abc123.vercel.app/api/fortunecookie`

---

### Step 2 — Create your Slack app

1. Go to https://api.slack.com/apps → **Create New App** → **From scratch**
2. Name it `Fortune Cookie` and pick your workspace
3. Go to **Slash Commands** → **Create New Command**
   - Command: `/fortunecookie`
   - Request URL: `https://your-vercel-url.vercel.app/api/fortunecookie`
   - Short description: `Crack open a fortune for your day`
   - Usage hint: (leave blank)
4. Go to **OAuth & Permissions** → add these Bot Token Scopes:
   - `commands`
5. Click **Install to Workspace**

---

### Step 3 — Add your signing secret to Vercel

1. In your Slack app settings → **Basic Information** → copy the **Signing Secret**
2. In your Vercel project dashboard → **Settings** → **Environment Variables**
3. Add:
   - Key: `SLACK_SIGNING_SECRET`
   - Value: (paste the signing secret)
4. Redeploy: `vercel deploy --prod`

---

### Step 4 — Test it

In any Slack channel in your workspace, type:
```
/fortunecookie
```

You should see a private ephemeral message with your fortune. 🥠

---

## Adding more fortunes

Edit `src/fortunes.js` — add new objects to the array:

```js
{ text: "Your fortune text here.", cat: "category-name" }
```

Categories: `self-doubt`, `ambition`, `burnout`, `boundaries`, `workplace`, `wins`, `hard days`, `sisterhood`

Then redeploy: `vercel deploy --prod`

---

## Submitting to the Slack App Directory

Once your bot is working in your own workspace:

1. Go to your app settings → **Manage Distribution**
2. Toggle on **Activate Public Distribution**
3. Fill in the **App Directory Listing**:
   - Icon: 1024×1024 PNG (design a fortune cookie icon)
   - Short description: `A daily fortune for women at work`
   - Long description: explain the categories, the ephemeral nature, the vibe
   - Screenshots: grab 2–3 from your workspace
4. Submit for review — Slack typically takes 1–3 weeks

---

## Project structure

```
fortunecookie/
├── api/
│   └── fortunecookie.js   # Vercel serverless function (slash command handler)
├── src/
│   └── fortunes.js        # Fortune bank — edit this to add/change fortunes
├── .env.example           # Copy to .env.local for local dev
├── .gitignore
├── package.json
└── vercel.json
```
