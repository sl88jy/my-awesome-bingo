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

## Key Files

- `src/data/questions.ts` - 24 questions (must be exactly 24)
- `src/hooks/useBingoGame.ts` - All state management + localStorage
- `src/utils/bingoLogic.ts` - Pure game rules (Fisher-Yates shuffle, win detection)
- `vite.config.ts` - GitHub Pages base path from `VITE_REPO_NAME` env var

## Deployment

Push to `main` → auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`

## Custom Agents

`.github/agents/` contains specialized workflows: `quiz-master`, `tdd-*`, `pixel-jam`, `ui-review`. See `.lab/GUIDE.md` for usage.
