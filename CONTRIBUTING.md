# Contributing to Avinyaa26

Welcome to the team! This guide will help you get started.

## 🚀 Getting Started

### 1. Clone & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd Avinyaa26

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/layout/    # Shared Header, Footer, Layout
├── pages/               # Individual page components
├── router/              # Route configuration
├── App.jsx              # Root component
└── index.css            # Global styles
```

---

## 📄 Page Assignments

| Page    | File                    | Route      | Owner |
| ------- | ----------------------- | ---------- | ----- |
| Home    | `src/pages/Home.jsx`    | `/`        | TBD   |
| Events  | `src/pages/Events.jsx`  | `/events`  | TBD   |
| About   | `src/pages/About.jsx`   | `/about`   | TBD   |
| Contact | `src/pages/Contact.jsx` | `/contact` | TBD   |

---

## 🔄 Daily Workflow

### Before Starting Work

```bash
# Get latest changes from main
git checkout main
git pull origin main
```

### Create Your Feature Branch

```bash
git checkout -b feature/your-page-name
# Example: git checkout -b feature/events-page
```

### While Working

```bash
# Check your changes
git status

# Stage and commit frequently
git add .
git commit -m "Add: description of what you did"
```

### When Done

```bash
# Push your branch
git push origin feature/your-page-name

# Then create a Pull Request on GitHub
```

---

## 💡 Commit Message Format

Use these prefixes:

- `Add:` - New feature or content
- `Fix:` - Bug fixes
- `Update:` - Changes to existing features
- `Style:` - CSS/styling changes
- `Refactor:` - Code restructuring

Examples:

```
Add: hero section to Events page
Fix: navigation link not highlighting
Update: contact form validation
Style: improve mobile responsiveness
```

---

## 🎨 Styling Guidelines

- We use **Tailwind CSS v4**
- Keep styles consistent with existing pages
- Mobile-first approach (use `md:` and `lg:` breakpoints)
- Use the indigo/purple color scheme

---

## ⚠️ Important Rules

1. **Don't edit shared components** (Header, Footer, Layout) without team discussion
2. **Always pull before starting** to avoid merge conflicts
3. **Test on mobile** before pushing
4. **Create PRs** - don't push directly to main

---

## 🆘 Need Help?

- Check the `README.md` for project overview
- Ask in the team chat
- Review existing page code for examples

Happy coding! 🎉
