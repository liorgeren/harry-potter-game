// House colours used for avatar borders
const HOUSE_COLORS = {
  gryffindor: { primary: '#740001', secondary: '#D3A625', text: '#FFD700' },
  slytherin: { primary: '#1A472A', secondary: '#AAAAAA', text: '#C0C0C0' },
  hufflepuff: { primary: '#EEE117', secondary: '#000000', text: '#000' },
  ravenclaw: { primary: '#0E1A40', secondary: '#946B2D', text: '#7CA7D8' },
  other: { primary: '#4a0e4e', secondary: '#e6b800', text: '#e6b800' },
};

// The 15 AI avatars in round order (matching the plan)
export const AI_AVATARS = [
  { name: 'Draco Malfoy',          initials: 'DM', house: 'slytherin',  emoji: '🐍' },
  { name: 'George Weasley',        initials: 'GW', house: 'gryffindor', emoji: '🎆' },
  { name: 'Fred Weasley',          initials: 'FW', house: 'gryffindor', emoji: '🧨' },
  { name: 'Mr. Weasley',           initials: 'AW', house: 'gryffindor', emoji: '🔌' },
  { name: 'Prof. McGonagall',      initials: 'MM', house: 'gryffindor', emoji: '🐱' },
  { name: 'Mrs. Weasley',          initials: 'MW', house: 'gryffindor', emoji: '🧶' },
  { name: 'Remus Lupin',           initials: 'RL', house: 'gryffindor', emoji: '🐺' },
  { name: 'Lily Potter',           initials: 'LP', house: 'gryffindor', emoji: '🌸' },
  { name: 'James Potter',          initials: 'JP', house: 'gryffindor', emoji: '🦌' },
  { name: 'Hagrid',                initials: 'RH', house: 'other',      emoji: '🌲' },
  { name: 'Voldemort',             initials: 'LV', house: 'slytherin',  emoji: '💀' },
  { name: 'Albus Dumbledore',      initials: 'AD', house: 'gryffindor', emoji: '⚡' },
  { name: 'Ron Weasley',           initials: 'RW', house: 'gryffindor', emoji: '♟️' },
  { name: 'Hermione Granger',      initials: 'HG', house: 'gryffindor', emoji: '📚' },
  { name: 'Harry Potter',          initials: 'HP', house: 'gryffindor', emoji: '⚡' },
];

// Player-selectable avatars (same list, player picks one at game start)
export const PLAYER_AVATARS = [
  { name: 'Harry Potter',     initials: 'HP', house: 'gryffindor', emoji: '⚡' },
  { name: 'Hermione Granger', initials: 'HG', house: 'gryffindor', emoji: '📚' },
  { name: 'Ron Weasley',      initials: 'RW', house: 'gryffindor', emoji: '♟️' },
  { name: 'Neville Longbottom', initials: 'NL', house: 'gryffindor', emoji: '🌿' },
  { name: 'Luna Lovegood',    initials: 'LL', house: 'ravenclaw',  emoji: '🌙' },
  { name: 'Ginny Weasley',    initials: 'GW', house: 'gryffindor', emoji: '🔥' },
  { name: 'Draco Malfoy',     initials: 'DM', house: 'slytherin',  emoji: '🐍' },
  { name: 'Cedric Diggory',   initials: 'CD', house: 'hufflepuff', emoji: '🏆' },
  { name: 'Cho Chang',        initials: 'CC', house: 'ravenclaw',  emoji: '🦅' },
  { name: 'Fred Weasley',     initials: 'FW', house: 'gryffindor', emoji: '🧨' },
];

export function getHouseColors(house) {
  return HOUSE_COLORS[house] || HOUSE_COLORS.other;
}
