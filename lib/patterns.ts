import { openai } from '@ai-sdk/openai';
import { groq } from '@ai-sdk/groq';
import { anthropic } from '@ai-sdk/anthropic';
import { generateText, streamText, generateObject, tool } from 'ai';
import { z } from 'zod';

// Pattern 1: Multi-Provider Fallback
export async function withFallback(prompt: string) {
  const providers = [
    { model: openai('gpt-4-turbo-preview'), name: 'OpenAI' },
    { model: groq('llama-3.3-70b-versatile'), name: 'Groq' },
    { model: anthropic('claude-3-opus-20240229'), name: 'Anthropic' },
  ];

  for (const provider of providers) {
    try {
      const result = await generateText({
        model: provider.model,
        prompt,
      });
      return { provider: provider.name, text: result.text };
    } catch (error) {
      console.log(`${provider.name} failed, trying next...`);
    }
  }
  throw new Error('All providers failed');
}

// Pattern 2: Streaming with Tools
export async function streamingWithTools(messages: any[]) {
  const result = streamText({
    model: openai('gpt-4-turbo-preview'),
    messages,
    tools: {
      search: tool({
        description: 'Search for information',
        parameters: z.object({
          query: z.string().describe('Search query'),
        }),
      }),
      calculate: tool({
        description: 'Perform calculation',
        parameters: z.object({
          expression: z.string().describe('Math expression'),
        }),
      }),
    },
    maxSteps: 3,
  });

  return result.toAIStreamResponse();
}

// Pattern 3: Structured Output
export async function structuredOutput(text: string) {
  const result = await generateObject({
    model: openai('gpt-4-turbo-preview'),
    schema: z.object({
      summary: z.string().describe('Brief summary'),
      sentiment: z.enum(['positive', 'negative', 'neutral']),
      confidence: z.number().min(0).max(1),
      keywords: z.array(z.string()),
    }),
    prompt: `Analyze this text: ${text}`,
  });

  return result.object;
}

// Pattern 4: Error Handling with Retry
export async function withRetry(
  fn: () => Promise<any>,
  options = { maxRetries: 3, backoff: 1000 }
) {
  for (let attempt = 0; attempt < options.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === options.maxRetries - 1) throw error;
      await new Promise(r => setTimeout(r, options.backoff * Math.pow(2, attempt)));
    }
  }
}

// Pattern 5: Cost-Optimized Model Selection
export function selectModel(task: 'simple' | 'complex' | 'reasoning') {
  switch (task) {
    case 'simple': return groq('llama-3.3-70b-versatile');
    case 'complex': return openai('gpt-4-turbo-preview');
    case 'reasoning': return anthropic('claude-3-opus-20240229');
  }
}