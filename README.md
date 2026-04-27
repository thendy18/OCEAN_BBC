# OCEAN Navigator

Internal BCA sales assistant and microlearning prototype built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build
npm run build

# Run tests
npm test
```

## Gemini AI

Create `.env.local` for real AI responses:

```bash
GEMINI_API_KEY=your_google_ai_studio_key
GEMINI_MODEL=gemini-2.5-flash
```

Without `GEMINI_API_KEY`, the app uses a safe demo fallback response.

## Project Structure

```text
src/
  app/              # Next.js app router pages and global styles
  config/           # App configuration
  types/            # TypeScript interfaces and types
  utils/            # Utility/helper functions
tests/              # Unit tests
next.config.ts      # Next.js configuration
postcss.config.mjs  # Tailwind PostCSS plugin
tailwind.config.ts  # Tailwind theme/content configuration
```
