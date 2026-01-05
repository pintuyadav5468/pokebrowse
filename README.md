
# 🔍 PokéBrowse

A modern, responsive React application for searching and discovering Pokémon using the PokéAPI. Features real-time search with debouncing, type filtering, and beautiful card-based layouts.

## Features

- 🔎 Real-time Search : Debounced search (500ms) to minimize API calls
- 🏷️ Type Filtering : Filter Pokémon by their types (Fire, Water, Grass, etc.)
- 📱 Responsive Design : Works seamlessly on mobile, tablet, and desktop
- ⚡ Loading States : Animated Pokéball spinner during data fetching
- ❌ Error Handling : Clear error messages with retry functionality
- 🎨 Beautiful UI : Modern design with gradients, animations, and hover effects
- 🎯 Type-specific Colors : Each Pokémon card is colored based on its primary type

## API Information

This app uses the free [PokéAPI](https://pokeapi.co/) - no API key required!

- Base URL : https://pokeapi.co/api/v2
- Rate Limit : None for typical usage
- Documentation : https://pokeapi.co/docs/v2

## Tech Stack

- React 18 - UI library
- Vite - Build tool and dev server
- Axios - HTTP client for API requests
- CSS3 - Custom styling with CSS variables
- PokéAPI - Pokémon data source

### Prerequisites

- Node.js 16+ and npm installed


## Project Structure

pokebrowse/
├── src/
│   ├── components/       # React components
│   ├── services/         # API service layer
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build (generated)
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration

