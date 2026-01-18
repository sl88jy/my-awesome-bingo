interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-8 bg-mono-bg overflow-hidden">
      {/* Subtle geometric dot grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      <div className="relative text-center max-w-md space-y-12">
        {/* Title section with top border accent */}
        <div className="border-t-2 border-mono-border pt-8">
          <h1 className="text-7xl font-light text-mono-text mb-3 tracking-tight">Soc Ops</h1>
          <p className="text-sm text-mono-text-muted tracking-wide uppercase mb-4">Social Bingo</p>
          <p className="text-xs text-mono-text-muted tracking-wide">Perfect for team events and conferences</p>
        </div>
        
        {/* Instructions section with border frame */}
        <div className="border border-mono-border p-6 bg-mono-surface">
          <p className="text-xs text-mono-text-muted tracking-wide uppercase mb-4">How to Play</p>
          <div className="space-y-3 text-mono-text-muted text-sm">
            <p>Find people who match the questions</p>
            <p>Tap a square when you find a match</p>
            <p>Get 5 in a row to win</p>
          </div>
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
