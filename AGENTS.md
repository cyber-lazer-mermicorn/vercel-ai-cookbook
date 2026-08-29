# Vercel AI Cookbook — Agent Doctrine

## What this repo is
Runnable Vercel AI SDK recipes: streaming, tool calls, structured objects, agents, RAG, multi-step reasoning.
By Cherry Shanaley (Chan), AI Solutions Engineer.

## Tech stack
- TypeScript strict, Next.js 15, Vercel AI SDK, multiple provider adapters

## Coding rules
- Each recipe is a self-contained directory in `recipes/` with its own README
- Every recipe must run with `npm run recipe -- <name>`
- Recipes use only Vercel AI SDK primitives — no raw provider SDK calls
- All recipes work with at least 2 providers (show adapter portability)
- Recipe README must include: what it demonstrates, when to use it, caveats
- No placeholder recipes — every recipe must be runnable end-to-end

## Commands
```bash
npm install
npm run recipe -- streaming-chat
npm run recipe -- tool-calls
npm run recipe -- rag
npm run test
```

## Do not
- Add a recipe without a README
- Use raw provider SDKs inside recipes
- Add a recipe that requires > 2 env vars to run
