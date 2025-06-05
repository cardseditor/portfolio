# Agent Instructions

This repository uses OpenAI Codex. See <https://platform.openai.com/docs/codex/overview> for an overview of how the agent works.

## Workflow

- Install dependencies using **Bun** with `bun install`.
- Run the development server using `bun run dev`.
- Build the site with `bun run build`.
- Format code with `bun run format` and lint with `bun run lint`.
- Run the format and lint scripts before committing any changes.

## Code Style

- This project uses TypeScript with Prettier and ESLint.
- Keep commits concise and in English.
- Do not add new packages without discussing first.

## Testing

- There are currently no automated tests. Verify builds succeed with `bun run build` before committing.
