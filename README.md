# Eneba Homework Assignment – Game List Search

This repository contains my completed homework assignment: a small full-stack web application that matches the provided UI screenshot and supports searching games via a public API.

## What’s included

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL (SQL)
- **API:** `/list` and `/list?search=<gamename>`
- **AI prompt history:** included in `AI_PROMPTS.md`

---

## Live Demo

- **Frontend:** https://voluble-liger-aa1503.netlify.app/
- **Backend API:** https://assignment-eneba.onrender.com/list

### ⚠️ Render Free Tier note (Backend sleep)

The backend is deployed on **Render free tier**, so it may **go to sleep** after some inactivity.

If the frontend loads with no results at first, please **wake up the backend** by opening this URL once:

- https://assignment-eneba.onrender.com/list

After that, refresh the frontend page — it will fetch data normally.

---

## Features

- Displays a grid of game cards (image, platform, region, price, discount, cashback, likes)
- Search bar with:
  - click search icon to search
  - press **Enter** to search
  - clear button to reset results
- Backend supports search via query param:
  - `/list` → returns all games
  - `/list?search=<gamename>` → filtered results using case-insensitive partial match (`ILIKE '%query%'`)

---

## API Endpoints

### `GET /list`

Returns all games from the database.

### `GET /list?search=<gamename>`

Returns games filtered by title (case-insensitive partial search).

## Run locally

#### Clone the repository

```bash
git clone https://github.com/KestutisRuockus/assignment-eneba.git
cd assignment-eneba
```

#### Backend setup (Express + PostgreSQL)

```bash
cd backend
npm install
```

#### Create backend/.env file

- DATABASE_URL=your_postgres_connection_string
- CORS_ORIGINS=http://localhost:5173

#### Run backend

```bash
npm run dev
```

#### Backend runs on:

- http://localhost:3000

#### Frontend setup (React + Vite)

```bash
cd frontend
npm install
```

#### Create frontend/.env file

- VITE_API_URL=http://localhost:3000

#### Run frontend

```bash
npm run dev
```

#### Frontend runs on:

- http://localhost:5173
