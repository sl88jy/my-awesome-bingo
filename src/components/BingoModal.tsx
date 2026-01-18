interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50 animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-mono-surface border-2 border-mono-text p-8 max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-4xl font-light text-mono-text mb-3 tracking-tight">BINGO</h2>
        <p className="text-mono-text-muted mb-8 text-sm">You completed a line</p>
        
        <button
          onClick={onDismiss}
          className="w-full border border-mono-text text-mono-text font-medium py-3 px-6 text-sm tracking-wide uppercase hover:bg-mono-text hover:text-mono-surface active:bg-mono-marked transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
