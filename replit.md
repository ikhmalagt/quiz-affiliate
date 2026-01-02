# AGT Affiliate Training Quiz Application

## Overview

This is a full-stack web application for AGT (Absolute Genetic Technologies) affiliate training quiz system. The application allows users to take an 18-question multiple-choice quiz to assess their knowledge of AGT Genetics solutions for childhood development, nutrition, and health. It includes a user-facing quiz interface with registration, results visualization with performance analytics, and an admin dashboard for viewing submissions and analytics.

The application is built with a React frontend using Vite and an Express backend, with PostgreSQL for data persistence. It's designed for mobile-first usage (70-80% mobile traffic expected) and features tier-based scoring (Excellent, Good, Pass, Needs Improvement).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and UI animations
- **Charts**: Recharts for radar charts and data visualization
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **Session Management**: express-session with MemoryStore (development) or connect-pg-simple (production)
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type-safe request/response validation

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts - defines submissions table with user info, answers, scores, and category breakdowns
- **Migrations**: Drizzle Kit for database schema management (migrations/ directory)

### Authentication
- **Admin Auth**: Session-based authentication using HTTP-only cookies
- **Credentials**: Hardcoded admin credentials (AGT_BD / AGT248 per architecture docs)
- **Protected Routes**: Middleware checks session for admin dashboard access

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (shadcn/ui + custom)
│   │   ├── hooks/        # Custom React hooks (auth, quiz, submissions)
│   │   ├── pages/        # Route pages (home, quiz, results, admin)
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between frontend/backend
│   ├── schema.ts     # Drizzle database schema
│   ├── routes.ts     # API route definitions with Zod schemas
│   └── questions.ts  # Quiz questions data
```

### Key Design Patterns
- **Shared Types**: API contracts defined once in shared/routes.ts, used by both client and server
- **Storage Abstraction**: IStorage interface in server/storage.ts for database operations
- **Component Library**: shadcn/ui components in client/src/components/ui/ with Radix UI primitives

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Components
- **Radix UI**: Headless UI primitives (dialogs, dropdowns, forms, etc.)
- **shadcn/ui**: Pre-built component library using Radix + Tailwind

### Third-Party Libraries
- **TanStack Query**: Server state management and caching
- **Zod**: Runtime type validation for API requests/responses
- **Framer Motion**: Animation library for UI transitions
- **Recharts**: Chart library for performance visualizations
- **date-fns**: Date formatting utilities

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across the entire codebase

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Secret key for session encryption (optional, has default)