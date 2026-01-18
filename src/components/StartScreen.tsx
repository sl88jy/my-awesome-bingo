interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 bg-mono-bg">
      <div className="text-center max-w-md space-y-12">
        <div>
          <h1 className="text-6xl font-light text-mono-text mb-3 tracking-tight">Soc Ops</h1>
          <p className="text-sm text-mono-text-muted tracking-wide uppercase">Social Bingo</p>
        </div>
        
        <div className="space-y-3 text-mono-text-muted text-sm">
          <p>Find people who match the questions</p>
          <p>Tap a square when you find a match</p>
          <p>Get 5 in a row to win</p>
        </div>

        <button
          onClick={onStart}
          className="w-full border-2 border-mono-text text-mono-text font-medium py-4 px-8 text-base tracking-wide uppercase hover:bg-mono-text hover:text-mono-surface active:bg-mono-marked transition-all duration-200"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
