# BDF Lab 01 — Node.js and Express Server

## Objective
Create a basic HTTP server with Node.js and an Express server with routes, JSON responses, a 404 handler, and response-status logging.

## Student Details
- Name: [Your Name]
- Registration number: [Your Registration Number]
- Section: [Your Section]

## Technologies
- Node.js
- Express
- JavaScript

## Installation and run
From the repository root, enter the lab folder and install dependencies:

```powershell
cd lab-01
npm install
```

Start the Express server:

```powershell
npm start
```

The server uses Render's `PORT` environment variable when available and otherwise listens on port `3000`.

The plain Node.js HTTP server also listens on port `3000`. To run it instead of Express, stop the Express server and use:

```powershell
npm run plain
```

Run only one server at a time because both use the same local port.

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/` | Returns a welcome message |
| GET | `/about` | Returns student name and section as JSON |
| GET | `/time` | Returns the current date and time |
| GET | Any unknown path | Returns HTTP 404 |

Express logs each completed request and its HTTP status code to the terminal.

## Screenshots

- Home: [screenshots/home.png](./screenshots/home.png)
- About: [screenshots/about.png](./screenshots/about.png)
- Time: [screenshots/time.png](./screenshots/time.png)
- Not found: [screenshots/not-found.png](./screenshots/not-found.png)

## Live deployment

Not deployed yet.

See the repository [LICENSE](../LICENSE).