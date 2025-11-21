# Mustage Test Task

A full-stack task management application built with NestJS (backend) and Next.js (frontend).

## Screenshots

### Main Dashboard
![Main Dashboard](docs/images/main-dashboard.png)
The main task management interface showing all tasks in a grid layout with search and filter functionality.

### Task List with Filter
![Task List with Filter](docs/images/task-list-filtered.png)
Filtered view showing completed tasks with search functionality.

### Create Task Modal
![Create Task Modal](docs/images/create-task-modal.png)
Modal dialog for creating new tasks with title and description fields.

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Docker and Docker Compose
- PostgreSQL (via Docker)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd mustage-test-task
```

### 2. Set up the Backend

#### 2.1. Navigate to the backend directory

```bash
cd backend
```

#### 2.2. Create environment file

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL="postgresql://mustage:randompassword@localhost:5432/mydb?schema=public"
```

#### 2.3. Start the database

Make sure Docker is running, then start the PostgreSQL database:

```bash
docker-compose -f docker-compose.yml.dev up -d
```

#### 2.4. Install dependencies

```bash
npm install
```

#### 2.5. Run database migrations

```bash
npx prisma migrate dev
```

#### 2.6. Generate Prisma Client

```bash
npx prisma generate
```

#### 2.7. Start the backend server

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The backend API will be available at `http://localhost:9000`.

### 3. Set up the Frontend

#### 3.1. Navigate to the frontend directory

Open a new terminal and navigate to the frontend:

```bash
cd next
```

#### 3.2. Create environment file (optional)

Create a `.env.local` file in the `next` directory if you need to customize the backend URL:

```env
NEXT_PUBLIC_BE_URL=http://localhost:9000
```

#### 3.3. Install dependencies

```bash
npm install
# or
pnpm install
```

#### 3.4. Start the development server

```bash
npm run dev
# or
pnpm dev
```

The frontend will be available at `http://localhost:3000` (Next.js default port).

**Note**: Make sure the backend is running on port 9000 before starting the frontend.

## Project Structure

```
mustage-test-task/
├── backend/          # NestJS backend API
│   ├── src/         # Source code
│   ├── prisma/      # Database schema and migrations
│   └── test/        # Tests
├── next/            # Next.js frontend
│   ├── app/         # Next.js app directory
│   ├── components/  # UI components
│   ├── features/    # Feature modules
│   └── shared/      # Shared utilities
└── eletron/         # Electron desktop app (optional)
```

## Available Scripts

### Backend

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## API Endpoints

- `GET /tasks` - Get all tasks (supports `?search=query` and `?done=true/false`)
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Technologies

- **Backend**: NestJS, Prisma, PostgreSQL
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form, Zod

## Troubleshooting

### Database connection issues

Make sure Docker is running and the PostgreSQL container is up:

```bash
docker ps
docker-compose -f backend/docker-compose.yml.dev up -d
```

### Port conflicts

If port 3000 is already in use, you can:
- Change the backend port in `backend/src/main.ts`
- Change the frontend port: `npm run dev -- -p 3001`

### Prisma issues

If you encounter Prisma-related errors:

```bash
cd backend
npx prisma generate
npx prisma migrate reset  # WARNING: This will delete all data
```

## License

Private project

