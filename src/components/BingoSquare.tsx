import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border transition-all duration-200 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-mono-marked border-mono-marked text-mono-surface shadow-sm'
      : 'bg-mono-marked border-mono-marked text-mono-surface'
    : 'bg-mono-surface text-mono-text border-mono-border hover:border-mono-text-muted active:bg-mono-bg';

  const freeSpaceClasses = square.isFreeSpace ? 'font-semibold text-sm border-mono-text' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
    </button>
  );
}
