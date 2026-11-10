# AI Use Policy

This document describes how our team uses generative AI tools (such as Claude or ChatGPT) on this project. We will keep it updated as the project goes on.

## Policy

**We only use AI for documentation.**

AI is not used to write game code, design the game's decisions or endings, choose stat values, or produce research findings. That work is done by the team.

## What counts as documentation

Examples of documentation where AI may be used:

- This AI policy document
- Instructions on how to play the game
- README and setup instructions
- Formatting and cleanup of existing docs in `docs/` (for example, turning our notes into tables or Markdown)

## What AI is not used for

- Game source code (`src/`), styles (`css/`), and tests (`tests/`)
- Game content: scenes, choices, endings, and stat effects in the decision tree
- Climate facts and sources in `research-notes.md` (these come from the sources we cite, not from AI)
- Playtesting results

## How we use it responsibly

- A team member reviews and edits all AI-assisted text before it is committed.
- AI output is checked against our own work so the docs describe the game accurately.
- The team is responsible for everything in the repository, whether or not AI helped write it.

## Chat logs

Every AI conversation used to work on a document is saved as a `.txt` file in [`docs/ai-chats/`](ai-chats/). Name each file after what it produced, for example `aiPolicyGenerationChat.txt`.

## Log of AI use

Add a row each time AI is used on a document.

| Date | Document | Tool | What AI helped with | Chat log | Reviewed by |
| ---- | -------- | ---- | ------------------- | -------- | ----------- |
| 2026-11-09 | `docs/ai-policy.md` | Claude | Drafted this policy | [`aiPolicyGenerationChat.txt`](ai-chats/aiPolicyGenerationChat.txt) | |
