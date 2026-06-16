import { useState, useEffect } from 'react';
import StartScreen from './StartScreen';
import GameHub from './GameHub';
import GameOver from './GameOver';
import Victory from './Victory';
import { loadGame, saveGame } from '@/lib/gameEngine';
import { DEFAULT_LANGUAGE, getLanguage } from '@/lib/i18n';

const SCREENS = {
  START: 'start',
  PLAYING: 'playing',
  GAMEOVER: 'gameover',
  VICTORY: 'victory'
};

export default function Game() {
  const [screen, setScreen] = useState(SCREENS.START);
  const [player, setPlayerState] = useState(null);
  const [language, setLanguageState] = useState(() => getLanguage(localStorage.getItem('wildpath_language') || DEFAULT_LANGUAGE));

  // Load saved game on mount
  useEffect(() => {
    const saved = loadGame();
    if (saved && saved.started && !saved.gameOver) {
      setPlayerState(saved);
      setScreen(SCREENS.PLAYING);
    }
  }, []);

  const setPlayer = (newPlayer) => {
    setPlayerState(newPlayer);
    saveGame(newPlayer);
    if (newPlayer.gameOver) {
      setScreen(SCREENS.GAMEOVER);
    }
  };

  const setLanguage = (nextLanguage) => {
    const safeLanguage = getLanguage(nextLanguage);
    setLanguageState(safeLanguage);
    localStorage.setItem('wildpath_language', safeLanguage);
  };

  const handleStart = (newPlayer) => {
    setPlayerState(newPlayer);
    saveGame(newPlayer);
    setScreen(SCREENS.PLAYING);
  };

  const handleContinue = () => {
    const saved = loadGame();
    if (saved) {
      setPlayerState(saved);
      setScreen(SCREENS.PLAYING);
    }
  };

  const handleGameOver = (finalPlayer) => {
    setPlayerState(finalPlayer);
    setScreen(SCREENS.GAMEOVER);
  };

  const handleVictory = (finalPlayer) => {
    setPlayerState(finalPlayer);
    setScreen(SCREENS.VICTORY);
  };

  const handleRestart = () => {
    setPlayerState(null);
    setScreen(SCREENS.START);
  };

  if (screen === SCREENS.START) {
    return <StartScreen onStart={handleStart} onContinue={handleContinue} language={language} setLanguage={setLanguage} />;
  }

  if (screen === SCREENS.PLAYING && player) {
    return (
      <GameHub
        player={player}
        setPlayer={setPlayer}
        onGameOver={handleGameOver}
        onVictory={handleVictory}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  if (screen === SCREENS.GAMEOVER) {
    return <GameOver player={player} onRestart={handleRestart} />;
  }

  if (screen === SCREENS.VICTORY) {
    return <Victory player={player} onRestart={handleRestart} />;
  }

  return <StartScreen onStart={handleStart} onContinue={handleContinue} language={language} setLanguage={setLanguage} />;
}
