# Soc Ops - AI Coding Instructions

## ⚠️ Mandatory Development Checklist

Before committing changes, verify:
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes (21 tests)

## Architecture

**Stack:** React 19 + TypeScript + Tailwind v4 + Vite  
**Pattern:** Single hook (`useBingoGame`) → Pure logic (`bingoLogic.ts`) → Presentational components

**Data Flow:**
```
useBingoGame (state + localStorage)
  └─ bingoLogic.ts (generateBoard, toggleSquare, checkBingo)
      └─ Components (no business logic)
```

## Critical Patterns

**Immutability:** Always return new arrays/objects, never mutate:
```typescript
return board.map(sq => sq.id === id ? {...sq, isMarked: !sq.isMarked} : sq)
```

**localStorage Versioning:** Increment `STORAGE_VERSION` in `useBingoGame.ts` when changing `StoredGameData` interface.

**Tailwind v4 Theme:** Define colors in `index.css` using `@theme`, reference as `bg-marked`, `border-marked-border`.

**Testing:** Pure logic in `utils/` requires `.test.ts` with 100% coverage. Use Vitest + Testing Library.

## Design System: Minimalist Mono

**Philosophy:** Refined monochromatic aesthetic using subtle contrast, sophisticated typography hierarchy, precise spacing, and minimal visual noise.

**Color Palette:**
- `mono-bg`: #fafafa (page background)
- `mono-surface`: #ffffff (cards, squares)
- `mono-border`: #e5e5e5 (subtle borders)
- `mono-text`: #171717 (primary text)
- `mono-text-muted`: #737373 (secondary text)
- `mono-marked`: #262626 (marked state, winning state)

**Typography:**
- **Hierarchy:** Use `font-light` for large titles (text-4xl+), `font-medium` for buttons/emphasis
- **Spacing:** `tracking-tight` for headings, `tracking-wide` for small/uppercase text
- **Scale:** Favor larger sizes with lighter weights over bold treatments

**Interactive Elements:**
- **Buttons:** Border-only style (`border-2 border-mono-text`), invert on hover (`hover:bg-mono-text hover:text-mono-surface`)
- **Squares:** Thin borders, no rounded corners, inverted when marked (black bg/white text)
- **States:** Use subtle shadow only on winning squares (`shadow-sm`)

**Spacing:**
- **Generous padding:** p-4 to p-8 for containers, p-6 minimum for breathing room
- **Minimal gaps:** gap-0.5 for tight grids, space-y-12 for major sections
- **Typography spacing:** mb-3 for title/subtitle pairs, mb-8 for section breaks

**Animation:**
- **Minimal motion:** fadeIn (0.2s) for modals, no bounce/scale effects
- **Smooth transitions:** duration-200 for all interactive states
- **Subtle feedback:** Avoid exuberant celebrations, use understated typography

## Key Files

- `src/data/questions.ts` - 24 questions (must be exactly 24)
- `src/hooks/useBingoGame.ts` - All state management + localStorage
- `src/utils/bingoLogic.ts` - Pure game rules (Fisher-Yates shuffle, win detection)
- `vite.config.ts` - GitHub Pages base path from `VITE_REPO_NAME` env var

## Deployment

Push to `main` → auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`

## Custom Agents

`.github/agents/` contains specialized workflows: `quiz-master`, `tdd-*`, `pixel-jam`, `ui-review`. See `.lab/GUIDE.md` for usage.
