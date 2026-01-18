interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col justify-center min-h-full p-8 bg-mono-bg">
      <div className="max-w-4xl space-y-20">
        <div className="space-y-6">
          <p className="text-xs text-mono-text-muted tracking-wide uppercase">Social Icebreaker Game</p>
          <h1 className="text-9xl font-light text-mono-text tracking-tight leading-none">Soc Ops</h1>
          <p className="text-2xl text-mono-text-muted font-light tracking-tight">Break the ice in minutes</p>
        </div>
        
        <div className="space-y-4 text-mono-text-muted text-base max-w-md">
          <p>Find people who match the questions on your board.</p>
          <p>Tap a square when you find a match.</p>
          <p>Get 5 in a row to win.</p>
        </div>

        <div className="space-y-4 max-w-md">
          <p className="text-xs text-mono-text-muted tracking-wide uppercase">Ready to play?</p>
          <button
            onClick={onStart}
            className="border-2 border-mono-text text-mono-text font-medium py-4 px-8 text-base tracking-wide uppercase hover:bg-mono-text hover:text-mono-surface active:bg-mono-marked transition-all duration-200"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
