/**
 * Levenshtein distance between two strings.
 */
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (__, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/['']/g, "'")
    .replace(/[^a-z0-9\s']/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Returns true if the player's input is close enough to any accepted answer.
 * Allows 1 typo for short answers, 2 for medium, and up to 3 for long answers.
 */
export function isCorrectAnswer(input, question) {
  if (!input || !input.trim()) return false;

  const normalizedInput = normalize(input);
  const candidates = [question.answer, ...(question.accepted || [])].map(normalize);

  for (const candidate of candidates) {
    if (normalizedInput === candidate) return true;

    // Partial match: if user typed the key word(s) that appear in the answer
    if (candidate.split(' ').every((word) => normalizedInput.includes(word))) return true;

    const maxAllowed = candidate.length <= 5 ? 1 : candidate.length <= 12 ? 2 : 3;
    if (levenshtein(normalizedInput, candidate) <= maxAllowed) return true;
  }

  return false;
}
