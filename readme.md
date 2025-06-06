
# 🗂️ Project Directory Structure

This repository contains multiple game-based learning projects, each organized in its own folder. Each project has:

- A playable **`index.html`** to launch the project
- An **`assets/`** folder for images, sounds, etc.
- A main project script (e.g., `flappybird.js`)
- Activity files:
  - `P` files: Project task scaffolds
  - `L` files: Learning/enrichment experiments

---
## 📁 Directory Overview
```


flappybird/
├── assets/ # Game images & sounds
├── index.html # Launch page for Flappy Bird
├── flappybird.js # Main project file
└── lesson and project files

fruitninja/
├── assets/ # Game images & sounds
├── index.html # Launch page for Fruit Ninja
├── fruitninja.js # Main project file
└── lesson and project files

geometrydash/
├── assets/ # Game images & sounds
├── stages/ # Level data
├── index.html # Launch page for Geometry Dash
├── geometrydash.js # Main project file
└── lesson and project files

teacher_solution/
├── flappybird/
│ ├── assets/ # Game images & sounds
| ├── index.html # Launch page for Flappy Bird
│ ├── flappybird.js # Main project file
│ └── lesson and project files
├── fruitninja/
│ ├── assets/ # Game images & sounds
| ├── index.html # Launch page for Fruit Ninja
│ ├── fruitninja.js # Main project file
│ └── lesson and project files
├── geometrydash/
│ ├── assets/ # Game images & sounds
| ├── stages/ # Level data
| ├── index.html # Launch page for Geometry Dash
│ ├── geometrydash.js # Main project file
│ └── lesson and project files
└── 
index.html
readme.md
```
## 🔤 File Naming Convention

| Prefix | File Type        | Purpose                                                                 |
|--------|------------------|-------------------------------------------------------------------------|
| `Pxx_` | Project Scaffold  | Step-by-step task files for students to complete and merge into project |
| `Lxx_` | Lesson Activity   | Enrichment/demonstration activities (non-essential to main game)        |
| `Axx_` | Addtional Resources| Resources for teachers/ Not seen by students. Concept explaining.      |

---

## 📁 File Type Structure
- All files not in the teacher solution are **used by students** during lessons.
- Inside each file, you’ll find **activity prompts** such as:

```
  // Activity: Move left while holding LEFT key
  // Activity: Move up when SPACE is pressed
  // Challenge: Return to centre when keys are released.
```

### `P` Files – **Project Scaffolds**

Files beginning with **`P`** (e.g., `P01.js`, `P02.js`) are **broken-up parts** of the main project.

* Students write their code only in the marked activity areas.

* Once working, they can copy and paste their code into the main project file to assemble the full solution.

* These files double as test beds and guided worksheets.

### L Files – **Learning & Enrichment***
Files beginning with L (e.g., L01.js, L02.js) are learning labs or experimentation demos.

They contain self-contained examples that explore concepts not directly required for the project, but essential to understanding how things work.
## 🧪 Teacher Solutions

Each game also has a **complete teacher version** inside the `teacher_solution/` folder. These contain:

- All `L` and `P` files with completed code
- Identical assets and structure as the student project
- The same `index.html` for testing solutions directly

---

## 🚀 Launching Projects

- Run the root-level `index.html` to access a **landing page** with links to each project.
- Open any individual `index.html` in a project folder to preview or test that game directly.

---

## 📚 Projects Included

- **Flappy Bird**
- **Fruit Ninja**
- **Geometry Dash**
