# Architecture

## Recipe catalog

| Recipe | Path | Demonstrates |
|---|---|---|
| Streaming Chat | `recipes/streaming-chat/` | `streamText` + `useChat` |
| Tool Calls | `recipes/tool-calls/` | `generateText` with tools |
| Structured Objects | `recipes/structured-objects/` | `generateObject` + Zod |
| RAG | `recipes/rag/` | Retrieval + generation |
| Multi-Step Agent | `recipes/multi-step-agent/` | `maxSteps` + tool loop |
| Image Understanding | `recipes/vision/` | Multi-modal messages |

## Recipe structure
```
recipes/<name>/
  index.ts      # runnable entry point
  README.md     # what, when, caveats
  .env.example  # required vars (max 2)
```
