const fortunes = [
  // self-doubt
  { text: "A door is about to open where you only saw wall.", cat: "self-doubt" },
  { text: "The proof you have been waiting for is already forming.", cat: "self-doubt" },
  { text: "Soon, someone will say exactly what you needed to hear about yourself.", cat: "self-doubt" },
  { text: "The seed you planted in doubt will flower in full view.", cat: "self-doubt" },
  { text: "What you dismissed as ordinary in yourself, another will call extraordinary.", cat: "self-doubt" },

  // ambition
  { text: "The table you seek is being set. Your seat is already there.", cat: "ambition" },
  { text: "A quiet yes is making its way toward you.", cat: "ambition" },
  { text: "The climb you have been on will reveal its view sooner than you think.", cat: "ambition" },
  { text: "What you have been building in the dark is about to catch the light.", cat: "ambition" },
  { text: "An unexpected ally is watching your work with great interest.", cat: "ambition" },

  // burnout
  { text: "A stretch of open water is waiting just past this current.", cat: "burnout" },
  { text: "The rest you take today will become tomorrow's fuel.", cat: "burnout" },
  { text: "A softer season is on its way to you.", cat: "burnout" },
  { text: "Relief is not as far as it feels from where you stand.", cat: "burnout" },

  // boundaries
  { text: "The line you draw today will become the ground others stand on.", cat: "boundaries" },
  { text: "What you protect now will flourish quietly and then all at once.", cat: "boundaries" },
  { text: "A relationship that honours your edges is closer than you think.", cat: "boundaries" },

  // workplace
  { text: "The words you are about to say will land better than you expect.", cat: "workplace" },
  { text: "A conversation long overdue will soon find its moment.", cat: "workplace" },
  { text: "Something you once let go of will circle back, improved.", cat: "workplace" },
  { text: "The room is more ready for you than it appears.", cat: "workplace" },

  // wins
  { text: "A win you almost didn't count is being counted by someone else.", cat: "wins" },
  { text: "What felt like a small step was, in fact, the turning point.", cat: "wins" },
  { text: "Something you worked for is about to land somewhere it matters.", cat: "wins" },
  { text: "The effort quietly accumulates. A tipping point is near.", cat: "wins" },

  // hard days
  { text: "Dawn has never once forgotten to arrive. Tonight is no exception.", cat: "hard days" },
  { text: "The storm is moving. You will feel it before you see it.", cat: "hard days" },
  { text: "What is pressing down on you now is shaping something strong.", cat: "hard days" },
  { text: "An unexpected kindness is already on its way to you today.", cat: "hard days" },

  // sisterhood
  { text: "A woman who needs exactly what you carry is about to find you.", cat: "sisterhood" },
  { text: "The hand you extend today will return to you when you need it.", cat: "sisterhood" },
  { text: "Someone near you is about to show you what loyalty looks like.", cat: "sisterhood" },
];

function getRandomFortune() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

module.exports = { fortunes, getRandomFortune };
