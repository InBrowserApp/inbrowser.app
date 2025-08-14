# Tools

This directory contains the implementation of various browser-based tools. Each subdirectory represents a complete tool package with its own UI components, pages, routes, and business logic.

## Overview

The `tools/` directory contains complete tool implementations that combine:

- Vue.js components and pages
- Routing configuration
- Internationalization (i18n) messages
- Tool metadata and registration
- Integration with core utilities from `utils/`

## Architecture

Each tool package follows a consistent structure:

```
@tools/[tool-name]/
├── src/
│   ├── components/     # Tool-specific Vue components
│   ├── [tool-feature]/ # Individual tool implementations
│   │   ├── *.vue      # Vue components/pages
│   │   ├── i18n.ts    # Internationalization
│   │   ├── index.ts   # Tool registration
│   │   └── routes.ts  # Routing (if applicable)
│   ├── index.ts       # Main tool exports
│   └── routes.ts      # Tool routing configuration
└── package.json       # Package dependencies and metadata
```

## Tool Registration

Each tool implements the `ToolInfo` interface from `@shared/tools`:

```typescript
export const toolInfo: ToolInfo = {
  toolID: 'uuid-v4-generator',
  meta: {
    // Internationalized name and description
  },
  icon: UuidIcon,
  path: '/tools/uuid/v4',
  tags: ['uuid', 'generator'],
  features: ['offline'],
}
```

## Development

Tools are designed to be:

- **Self-contained**: Each tool package includes everything needed for that tool
- **Composable**: Tools use shared components from `@shared/ui`
- **Internationalized**: All user-facing text supports multiple languages
- **Offline-capable**: Most tools work without internet connectivity
- **Type-safe**: Full TypeScript support throughout

## Usage

Tools are automatically discovered and integrated into the main application through the tools collection system. Each tool provides:

- User interface components
- Route definitions for navigation
- Metadata for search and categorization
- Internationalization support
