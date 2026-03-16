# Cocktail Recipe Finder

A modern web application to discover drink recipes based on ingredients and categories.
Users can explore cocktails, shots, and coffee-based drinks, save their favorites, and even generate new drink recipes using AI.

## Live Demo

[https://rombococktail.netlify.app/]

## Features

* Search drink recipes by **ingredient**
* Filter recipes by **category** (cocktail, shot, coffee, etc.)
* View detailed drink recipes
* **Favorites management** (add/remove drinks)
* **AI-powered drink recipe generator**
* Persistent favorites stored with **localStorage**
* Responsive UI and modal-based recipe visualization

## Tech Stack

* **React** – UI library
* **TypeScript** – static typing
* **Axios** – HTTP client for API requests
* **Zustand** – global state management
* **Slice Pattern** – modular store architecture
* **React Router** – client-side routing
* **Zod** – runtime validation of API responses
* **LocalStorage** – persistence of user favorites
* **AI APIs** – generation of new drink recipes

## Architecture Highlights

### State Management

Global state is managed with **Zustand** using a **slice-based architecture**:

* `recipesSlice` – recipe search and API data
* `favoritesSlice` – user favorites
* `IASlice` – AI recipe generation
* `notificationSlice` – UI notifications

This modular approach improves **scalability and separation of concerns**.

### API Validation

External API responses are validated using **Zod schemas** to ensure type-safe data handling and prevent runtime errors.

### Services Layer

API calls are encapsulated in a **services layer**:

* `RecipeService` – recipe search
* `IAService` – AI recipe generation

This keeps networking logic separate from UI components.

## Project Structure

```text
src
 ├── components        # Reusable UI components
 ├── layouts           # Application layouts
 ├── services          # API communication
 ├── stores            # Zustand store slices
 ├── utils             # Utility functions and schemas
 ├── types             # Global TypeScript types
 ├── views             # Application pages
 ├── router.tsx        # Application routing
 └── main.tsx          # Application entry point
```

## Installation

Clone the repository:

```bash
git clone https://github.com/jordirofu/cocktail-recipe-finder.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Future Improvements

* User authentication
* Cloud-synced favorites
* Advanced filtering (alcoholic / non-alcoholic / glass type)
* Improved AI recipe customization

## Author

Developed by **Jordi Romero**.
