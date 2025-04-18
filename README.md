![CI](https://github.com/LloydTDavies/travel-buddy/actions/workflows/main.yml/badge.svg)

# ✈️ Trip Companion App

A lightweight and intuitive app to help you manage and organize your travel plans in one place.

## ✨ Features

- 📌 **Trip Management**: Add and view details about upcoming trips
- 🛫 **Trip Details**: Store flight, hotel, points of interest, and travel dates
- ☁️ **Weather Integration**: View weather forecasts for your destination (coming soon!)
- ✅ **Packing Checklist**: Track essential items to pack like passports and boarding passes

## 📦 Tech Stack

- ⚛️ React with TypeScript
- 🎯 Vite for fast development
- 🧪 Vitest & Testing Library for integration tests
- 💅 Tailwind CSS for styling
- 🧠 ESLint & Prettier for code consistency

## 🚀 Getting Started

### 🛠️ Environment Setup

This project uses environment variables to manage sensitive information like API keys.

#### Step 1: Create your own `.env` file

Copy the example template:

```bash
cp .env.sample .env
```

Then, update the values with your actual configuration:

```env
# Get your API key from https://pexels.com/api
VITE_PEXELS_API_KEY=your-key-here

# Base API URL for backend services (e.g., localhost or deployed endpoint)
VITE_BASE_URL=https://your-api-endpoint.com
```

> ✅ Note: All environment variables prefixed with `VITE_` are exposed to the client (as per Vite’s convention).

#### Step 2: Keep your secrets safe

Make sure your `.env` file is **never committed** to version control. This project uses a `.gitignore` rule to ignore it:

```bash
# In .gitignore
.env
```

Install dependencies and start the development server.

```bash
npm ci
npm run dev
npm run mock:api
```

## ✅ Tests

Run the test suite to validate core functionality.

```bash
npm run test
npm run test:coverage
```

Gotcha! Here's that same content again, **fully ready to copy and paste** directly into your `.md` file — no formatting issues:

---

## 💬 Commit Conventions & Commitizen

This project uses **Conventional Commits** to keep a consistent commit history and power changelogs, versioning, and CI workflows.

To help with formatting your commit messages, we've set up **[Commitizen](https://github.com/commitizen/cz-cli)** for interactive prompts.

### 🔧 Setup (already configured)

Commitizen is installed and configured. No additional setup needed.

### 🚀 How to make a commit

Instead of using `git commit -m`, run:

`npx cz`

You’ll be guided through prompts like:

- **type** – e.g. `feat`, `fix`, `docs`, `chore`
- **scope** – the part of the codebase (optional)
- **description** – a short summary of the change

Example commit message it will generate:

`feat(trip): add ability to save flight details`

### 📘 Commit Types

| Type       | Description                                 |
| ---------- | ------------------------------------------- |
| `feat`     | A new feature                               |
| `fix`      | A bug fix                                   |
| `docs`     | Documentation-only changes                  |
| `style`    | Code style changes (formatting, no logic)   |
| `refactor` | Code change that isn’t a bug fix or feature |
| `perf`     | Performance improvement                     |
| `test`     | Adding or updating tests                    |
| `chore`    | Changes to tooling or build process         |

---

All ready for pasting! Want to add a quick section for **GitHub Actions** setup next?

## ⬆️ Upcoming Features

- Weather API integration for real-time trip forecasts
- Categorized trip entries
- Reminder and notification system
- Responsive mobile-first design

## 📄 License

MIT
