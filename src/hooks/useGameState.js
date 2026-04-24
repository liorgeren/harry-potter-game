import { useReducer, useCallback } from 'react';
import { ROUNDS } from '../data/questions';

export const SCREENS = {
  TITLE: 'TITLE',
  AVATAR_SELECT: 'AVATAR_SELECT',
  ROUND_INTRO: 'ROUND_INTRO',
  QUESTION: 'QUESTION',
  ROUND_RESULT: 'ROUND_RESULT',
  GAME_OVER: 'GAME_OVER',
};

const STARTING_DIAMONDS = 50;
const WINNER_DIAMONDS = 100;
const LOSER_DIAMONDS = 20;
const HINT_COST = 10;

function initialState() {
  return {
    screen: SCREENS.TITLE,
    playerAvatar: null,
    currentRound: 0,         // 0-indexed
    currentQuestion: 0,      // 0-indexed within round
    playerDiamonds: STARTING_DIAMONDS,
    aiDiamonds: STARTING_DIAMONDS,
    roundsWon: 0,            // player rounds won
    roundsLost: 0,
    // Per-question results for the current round
    questionResults: [],     // [{ playerCorrect, aiCorrect, hintUsed }]
    // Per-round summary
    roundSummaries: [],      // [{ roundIndex, playerScore, aiScore, playerWon, diamondsEarned }]
  };
}

function countScores(results) {
  return results.reduce(
    (acc, r) => {
      if (r.playerCorrect) acc.player++;
      if (r.aiCorrect) acc.ai++;
      return acc;
    },
    { player: 0, ai: 0 }
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'START_GAME':
      return { ...initialState(), screen: SCREENS.AVATAR_SELECT };

    case 'SELECT_AVATAR':
      return { ...state, playerAvatar: action.avatar, screen: SCREENS.ROUND_INTRO };

    case 'BEGIN_ROUND':
      return {
        ...state,
        screen: SCREENS.QUESTION,
        currentQuestion: 0,
        questionResults: [],
      };

    case 'RECORD_QUESTION_RESULT': {
      const newResults = [...state.questionResults, action.result];
      const isLastQuestion = state.currentQuestion >= ROUNDS[state.currentRound].questions.length - 1;
      if (isLastQuestion) {
        return { ...state, questionResults: newResults, screen: SCREENS.ROUND_RESULT };
      }
      return {
        ...state,
        questionResults: newResults,
        currentQuestion: state.currentQuestion + 1,
        screen: SCREENS.QUESTION,
      };
    }

    case 'USE_HINT': {
      if (state.playerDiamonds < HINT_COST) return state;
      return { ...state, playerDiamonds: state.playerDiamonds - HINT_COST };
    }

    case 'FINISH_ROUND': {
      const { player, ai } = countScores(state.questionResults);
      const playerWon = player > ai;
      const playerEarned = playerWon ? WINNER_DIAMONDS : LOSER_DIAMONDS;
      const aiEarned = playerWon ? LOSER_DIAMONDS : WINNER_DIAMONDS;

      const summary = {
        roundIndex: state.currentRound,
        playerScore: player,
        aiScore: ai,
        playerWon,
        diamondsEarned: playerEarned,
        questionResults: state.questionResults,
      };

      const isLastRound = state.currentRound >= ROUNDS.length - 1;

      return {
        ...state,
        playerDiamonds: state.playerDiamonds + playerEarned,
        aiDiamonds: state.aiDiamonds + aiEarned,
        roundsWon: state.roundsWon + (playerWon ? 1 : 0),
        roundsLost: state.roundsLost + (playerWon ? 0 : 1),
        roundSummaries: [...state.roundSummaries, summary],
        currentRound: isLastRound ? state.currentRound : state.currentRound + 1,
        screen: isLastRound ? SCREENS.GAME_OVER : SCREENS.ROUND_INTRO,
      };
    }

    case 'RESTART':
      return initialState();

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  const startGame = useCallback(() => dispatch({ type: 'START_GAME' }), []);
  const selectAvatar = useCallback((avatar) => dispatch({ type: 'SELECT_AVATAR', avatar }), []);
  const beginRound = useCallback(() => dispatch({ type: 'BEGIN_ROUND' }), []);
  const recordQuestionResult = useCallback(
    (result) => dispatch({ type: 'RECORD_QUESTION_RESULT', result }),
    []
  );
  const useHint = useCallback(() => dispatch({ type: 'USE_HINT' }), []);
  const finishRound = useCallback(() => dispatch({ type: 'FINISH_ROUND' }), []);
  const restart = useCallback(() => dispatch({ type: 'RESTART' }), []);

  const currentRoundData = ROUNDS[state.currentRound];
  const currentQuestionData =
    currentRoundData ? currentRoundData.questions[state.currentQuestion] : null;

  const canUseHint = state.playerDiamonds >= HINT_COST;

  return {
    ...state,
    currentRoundData,
    currentQuestionData,
    canUseHint,
    HINT_COST,
    startGame,
    selectAvatar,
    beginRound,
    recordQuestionResult,
    useHint,
    finishRound,
    restart,
  };
}
