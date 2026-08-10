# Vercel AI SDK Cookbook
## Solves: "How do I use AI SDK in production?"

The #1 bottleneck for Vercel: **AI SDK examples are too simple**. This shows real patterns.

**Live:** https://vercel-ai-cookbook.vercel.app

---

## The Problem

Vercel AI SDK docs show hello-world examples. Developers need production patterns:
- Multi-provider fallback
- Streaming with tools
- Structured output
- Error handling

## The Solution

Real production patterns. Copy-paste into your app. Works in 5 minutes.

---

## What's Included

### 1. Multi-Provider Fallback
```typescript
// Automatic failover: OpenAI → Groq → Anthropic
const model = withFallback([
  openai('gpt-5.6'),
  groq('llama-4'),
  anthropic('claude-opus-5'),
]);
```

### 2. Streaming with Tools
```typescript
// Stream responses with tool calling
const result = streamText({
  model,
  tools: { search, calculate, fetch },
  maxSteps: 5,
});
```

### 3. Structured Output
```typescript
// Guaranteed JSON output with zod
const result = generateObject({
  model,
  schema: z.object({
    summary: z.string(),
    confidence: z.number(),
  }),
});
```

### 4. Error Handling
```typescript
// Graceful degradation
const result = await withRetry(
  () => generateText({...}),
  { maxRetries: 3, backoff: 'exponential' }
);
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/cyber-lazer-mermicorn/vercel-ai-cookbook.git

# Install dependencies
npm install

# Run
npm run dev
```

---

## Why This Matters for Vercel

**The bottleneck:** Developers try AI SDK, hit complexity, give up.

**The fix:** Production patterns they can copy-paste. No learning curve.

**The result:** More AI SDK adoption, less churn to competitors.

---

## Patterns Included

| Pattern | Complexity | Use Case |
|---------|------------|----------|
| Multi-provider fallback | Easy | Production resilience |
| Streaming with tools | Medium | Interactive AI |
| Structured output | Easy | Data extraction |
| Error handling | Easy | Reliability |
| Caching | Medium | Cost reduction |
| Rate limiting | Medium | API protection |

---

## Contact

**Cherry Shanaley (Chan)** — cyber.lazer.mermicorn@gmail.com

*Built this to solve Vercel AI SDK adoption*