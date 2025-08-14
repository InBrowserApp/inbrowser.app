# Apps

This directory contains the main applications of the InBrowser Web project.

## Structure

- **`web/`** - The main web application that provides the user interface for all the browser-based tools

## Overview

The `apps/` directory follows the standard monorepo pattern where each subdirectory represents a deployable application. Currently, we have:

### @apps/web

The primary Vue.js application that serves as the frontend for the InBrowser tool collection. This application:

- Provides the main user interface and navigation
- Integrates all tools from the `tools/` directory
- Uses shared components from `shared/ui`
- Handles routing and application-level state management
- Serves as the entry point for end users

## Development

To start the web application in development mode:

```bash
pnpm -F @apps/web dev
```

To build the web application for production:

```bash
pnpm -F @apps/web build
```

## Dependencies

The web application depends on:

- `@shared/*` packages for shared components and utilities
- `@tools/*` packages for tool implementations
- `@utils/*` packages for core business logic
