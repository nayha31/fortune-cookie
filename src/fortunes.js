const fortunes = [
  // MOMENTUM
  { text: "What you have been building in the dark is about to catch the light.", cat: "momentum", author: null },
  { text: "The effort quietly accumulates. A tipping point is near.", cat: "momentum", author: null },
  { text: "A door is about to open where you only saw wall.", cat: "momentum", author: null },
  { text: "It always seems impossible until it is done.", cat: "momentum", author: "Nelson Mandela" },
  { text: "The climb you have been on will reveal its view sooner than you think.", cat: "momentum", author: null },

  // COURAGE
  { text: "You have been through harder things than this. The record speaks for itself.", cat: "courage", author: null },
  { text: "A quiet yes is making its way toward you. Move toward it.", cat: "courage", author: null },
  { text: "You don't have to see the whole staircase. Just take the first step.", cat: "courage", author: "Martin Luther King Jr." },
  { text: "The room is more ready for you than it appears.", cat: "courage", author: null },
  { text: "Courage is not the absence of fear. It is deciding something else is more important.", cat: "courage", author: "Ambrose Redmoon" },

  // REST
  { text: "Even fire rests between its flames.", cat: "rest", author: null },
  { text: "A softer season is on its way to you.", cat: "rest", author: null },
  { text: "The field that lies fallow is gathering, not giving up.", cat: "rest", author: null },
  { text: "Almost everything will work again if you unplug it for a few minutes. Including you.", cat: "rest", author: "Anne Lamott" },
  { text: "Relief is not as far as it feels from where you stand.", cat: "rest", author: null },

  // PERSPECTIVE
  { text: "Not all those who wander are lost.", cat: "perspective", author: "J.R.R. Tolkien" },
  { text: "What looks like a detour is often the road itself.", cat: "perspective", author: null },
  { text: "The obstacle is the path.", cat: "perspective", author: "Zen proverb" },
  { text: "Something you once let go of will circle back, improved.", cat: "perspective", author: null },
  { text: "We do not see things as they are. We see them as we are.", cat: "perspective", author: "Anaïs Nin" },

  // CONNECTION
  { text: "A conversation long overdue will soon find its moment.", cat: "connection", author: null },
  { text: "The hand you extend today will return to you when you need it.", cat: "connection", author: null },
  { text: "Someone near you is about to show you what loyalty looks like.", cat: "connection", author: null },
  { text: "No person is an island. A root system is forming beneath you.", cat: "connection", author: null },
  { text: "An unexpected ally is watching your work with great interest.", cat: "connection", author: null },

  // GROWTH
  { text: "The seed you planted in doubt will flower in full view.", cat: "growth", author: null },
  { text: "What you dismissed as ordinary in yourself, another will call extraordinary.", cat: "growth", author: null },
  { text: "The oyster does not enjoy the grain of sand. Yet.", cat: "growth", author: null },
  { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through.", cat: "growth", author: "Maya Angelou" },
  { text: "What is pressing down on you now is shaping something strong.", cat: "growth", author: null },

  // HARD DAYS
  { text: "Dawn has never once forgotten to arrive. Tonight is no exception.", cat: "hard days", author: null },
  { text: "The storm is moving. You will feel it before you see it.", cat: "hard days", author: null },
  { text: "An unexpected kindness is already on its way to you today.", cat: "hard days", author: null },
  { text: "In the middle of difficulty lies opportunity.", cat: "hard days", author: "Albert Einstein" },
  { text: "Even the longest storm carries seeds for what comes after.", cat: "hard days", author: null },

  // CREATIVITY
  { text: "You can't use up creativity. The more you use, the more you have.", cat: "creativity", author: "Maya Angelou" },
  { text: "An idea that has been quietly waiting is ready to be found.", cat: "creativity", author: null },
  { text: "The words you are about to say will land better than you expect.", cat: "creativity", author: null },
  { text: "Creativity is intelligence having fun.", cat: "creativity", author: "Albert Einstein" },
  { text: "What feels half-formed today will crystallise sooner than you think.", cat: "creativity", author: null },
];

function getRandomFortune() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

module.exports = { fortunes, getRandomFortune };
