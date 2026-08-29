# Copilot Instructions — Vercel AI Cookbook

## Always
- Use Vercel AI SDK primitives only in recipes (`streamText`, `generateObject`, etc.)
- Make each recipe work with at least 2 provider adapters
- Include a `README.md` in every recipe directory
- Keep recipes self-contained — minimal dependencies

## Never
- Call provider SDKs directly in recipe code
- Add a recipe without a working end-to-end example
- Require more than 2 env vars per recipe
