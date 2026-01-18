import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-mono-bg">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-mono-surface border-b border-mono-border">
        <button
          onClick={onReset}
          className="text-mono-text-muted text-sm px-2 py-1 hover:text-mono-text transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-light text-mono-text tracking-tight">Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-mono-text-muted text-xs py-4 px-4 tracking-wide">
        Tap a square when you find someone who matches it
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-mono-marked text-mono-surface text-center py-3 font-light text-sm tracking-wide uppercase">
          Bingo — You got a line
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-6">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
