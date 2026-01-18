interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-mono-bg">
      <article className="max-w-2xl w-full space-y-16">
        
        {/* Hero Section */}
        <header className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-7xl font-light text-mono-text tracking-tight leading-[0.95]">
              Break the ice. Build connections.
            </h1>
            <p className="text-lg text-mono-text-muted tracking-tight">
              The social bingo game that turns awkward small talk into genuine conversations.
            </p>
          </div>
        </header>

        {/* Value Proposition Section */}
        <section className="space-y-8 border-t border-mono-border pt-12">
          <div>
            <h2 className="text-xs text-mono-text-muted tracking-wide uppercase mb-6">Why This Works</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-mono-text tracking-tight">
                  Everyone gets involved
                </h3>
                <p className="text-mono-text-muted leading-relaxed">
                  No more wallflowers. The game structure gives everyone a reason to mingle and share their stories.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-mono-text tracking-tight">
                  Discover surprising connections
                </h3>
                <p className="text-mono-text-muted leading-relaxed">
                  Find out your colleague speaks three languages, or your new hire has been skydiving. Real stories beat rehearsed introductions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-mono-text tracking-tight">
                  Perfect for any gathering
                </h3>
                <p className="text-mono-text-muted leading-relaxed" aria-label="Use cases: Team offsites, Conference icebreakers, Networking events, First week at the office">
                  Team offsites <span aria-hidden="true">•</span> Conference icebreakers <span aria-hidden="true">•</span> Networking events <span aria-hidden="true">•</span> First week at the office
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-6">
          <h2 className="text-xs text-mono-text-muted tracking-wide uppercase">How to Play</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="text-2xl font-light text-mono-text-muted tracking-tight">01</span>
              <div className="flex-1 pt-1">
                <p className="text-mono-text leading-relaxed">
                  Get your bingo board with 24 unique prompts plus a free space
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl font-light text-mono-text-muted tracking-tight">02</span>
              <div className="flex-1 pt-1">
                <p className="text-mono-text leading-relaxed">
                  Mingle and find people who match each square's description
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl font-light text-mono-text-muted tracking-tight">03</span>
              <div className="flex-1 pt-1">
                <p className="text-mono-text leading-relaxed">
                  Mark squares as you make connections—five in a row wins
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="space-y-4 pt-8">
          <button
            onClick={onStart}
            className="w-full border-2 border-mono-text text-mono-text font-medium py-5 px-8 text-base tracking-wide uppercase hover:bg-mono-text hover:text-mono-surface transition-all duration-200"
          >
            Start Playing
          </button>
          <p className="text-center text-sm text-mono-text-muted" aria-label="Game duration: Takes 15 to 20 minutes, Works on any device, No signup required">
            Takes 15–20 minutes <span aria-hidden="true">•</span> Works on any device <span aria-hidden="true">•</span> No signup required
          </p>
        </section>

      </article>
    </div>
  );
}
