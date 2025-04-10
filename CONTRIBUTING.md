# Contributing to Travel Buddy 🧳

Thank you for considering contributing! Before you begin:

---

## ✨ Workflow

- Create a branch using the format:
  - `feature/your-feature-name`
  - `fix/bug-description`
  - `chore/task-name`
- Ensure your code:
  - Follows linting rules (`npm run lint`)
  - Is formatted (`npm run format`)
  - Includes tests (if applicable)
  - Passes `npm run test` and has 80%+ coverage

---

## 🚀 Submitting a Pull Request

- PRs must target the `main` branch
- CI must pass before merging
- At least one reviewer approval is required
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages (commitizen is available)

---

## 🔒 Environment Setup

Duplicate the `.env-sample` file as `.env` and fill in your keys.

```env
VITE_PEXELS_API_KEY=your-key
VITE_BASE_URL=https://your-api-url
```

## 🤝 Questions?

Feel free to open an issue or reach out!