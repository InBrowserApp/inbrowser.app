# Utils

This directory contains pure utility packages that provide core business logic and algorithms. These packages are framework-agnostic and contain no Vue.js dependencies, making them reusable across different contexts.

## Overview

The `utils/` directory contains pure TypeScript/JavaScript logic that powers the tools in the `tools/` directory. These packages focus solely on:

- Core algorithms and computations
- Data processing and validation
- Format conversions
- File processing

## Design Principles

### Framework Agnostic

All utility packages are pure TypeScript/JavaScript with no framework dependencies. This allows them to be:

- Used in different environments (Node.js, web workers, etc.)
- Tested independently
- Reused in future projects with different frameworks

### Web Worker Compatible

Many utilities support Web Worker execution for:

- CPU-intensive operations (image optimization, PDF processing)
- Non-blocking user interface
- Better performance for large files

### Type Safe

Full TypeScript support with:

- Comprehensive type definitions
- Exported types for consumers
- Strict type checking

## Testing

Utility packages should include comprehensive unit tests since they contain the core business logic. Tests should cover:

- Algorithm correctness
- Edge cases and error handling
- Performance characteristics
- Cross-browser compatibility
