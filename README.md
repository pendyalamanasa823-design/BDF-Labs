# BDF Lab 01: Node.js and Express Server

## Student Details

- **Name:** Pendyala Manasa
- **Registration Number:** 252U1R1191
- **Section:** CSE-1D (214)
- **Lab:** Backend Development Fundamentals (BDF) — Lab 01

---

## Table of Contents

1. [Objective](#objective)
2. [Introduction](#introduction)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation and Setup](#installation-and-setup)
6. [Explanation of `package.json` Fields](#explanation-of-packagejson-fields)
7. [Environment Variables](#environment-variables)
8. [API Endpoints](#api-endpoints)
9. [Screenshots](#screenshots)
10. [Deployment on Render](#deployment-on-render)
11. [Problems Faced and Solutions](#problems-faced-and-solutions)
12. [Learning Outcomes](#learning-outcomes)
13. [Conclusion](#conclusion)

---

## 1. Objective

The objective of this laboratory exercise is to understand the fundamentals of backend development using Node.js and Express.js. The experiment focuses on creating an HTTP server, defining routes, returning responses, handling invalid URLs, managing project dependencies, and deploying the application on a cloud hosting platform.

---

## 2. Introduction

Node.js is a JavaScript runtime environment that allows JavaScript code to execute outside a web browser. Express.js is a lightweight web framework for Node.js that simplifies the development of web servers and APIs.

In this experiment, an Express server is created with routes for the home page, About page, and current date and time. A default route handles requests to undefined URLs by returning a 404 response.

The application is deployed using Render, making it accessible through a public URL.

---

## 3. Technologies Used

- **JavaScript:** Programming language used to implement the server.
- **Node.js:** Runtime environment for executing JavaScript on the server.
- **Express.js:** Framework used to create the server and define routes.
- **npm:** Package manager used to install and manage dependencies.
- **Git:** Version control system used to track changes.
- **GitHub:** Platform used to host the project repository.
- **Render:** Cloud platform used to deploy the application.
- **Visual Studio Code:** Code editor used for development.

---

## 4. Project Structure

```text
BDF-Labs/
├── lab-01/
│   ├── screenshots/
│   │   ├── home.png
│   │   ├── about.png
│   │   ├── time.png
│   │   └── not-found.png
│   ├── .gitignore
│   ├── LICENSE
│   ├── README.md
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── plain-server.js
├── LICENSE
└── README.md
```

**Note:** This structure represents the expected organization of the project. Keep the screenshot files in the `lab-01/screenshots/` directory and ensure that the filenames match the README references.

---

## 5. Installation and Setup

### Prerequisites

Install the following tools before running the application:

- Node.js
- npm
- Visual Studio Code
- Git

### Step 1: Clone the repository

```bash
git clone https://github.com/pendyalamanasa823-design/BDF-Labs.git
```

### Step 2: Navigate to the project directory

```bash
cd BDF-Labs/lab-01
```

### Step 3: Install dependencies

```bash
npm install
```

This command installs the dependencies specified in `package.json`.

### Step 4: Start the server

```bash
npm start
```

If the `start` script is configured to execute `node app.js`, this command starts the Express application.

### Step 5: Open the application

Open the following address in your browser:

```text
http://localhost:3000
```

The home page should display:

```text
Welcome to Node.js and Express Server
```

---

## 6. Explanation of `package.json` Fields

The `package.json` file contains important metadata and configuration for a Node.js project. It identifies the application, defines scripts, and specifies its dependencies.

| Field | Description |
|---|---|
| `name` | Specifies the project name. |
| `version` | Represents the current version of the application. |
| `description` | Provides a short description of the project. |
| `main` | Specifies the main application file, such as `app.js`. |
| `scripts` | Defines commands that can be executed using npm. |
| `dependencies` | Lists the packages required for the application to run. |
| `devDependencies` | Lists packages used mainly during development and testing. |
| `license` | Specifies the license under which the project is distributed. |

### Example

```json
{
  "name": "bdf-lab-01",
  "version": "1.0.0",
  "description": "Node.js and Express Server",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "license": "MIT"
}
```

**Note:** This is an illustrative example. Keep the dependency versions and other values consistent with your actual `package.json` file.

### Important npm files

- **`package.json`:** Stores project metadata, scripts, and dependency declarations.
- **`package-lock.json`:** Records the resolved dependency versions to help produce consistent installations.
- **`node_modules/`:** Contains installed packages and is generally excluded from Git using `.gitignore`.

---

## 7. Environment Variables

Environment variables allow an application to read configuration values from its execution environment instead of hardcoding them in the source code.

For a deployed Node.js application, the hosting platform may assign a port dynamically. Therefore, the server should use `process.env.PORT`.

### Example

```javascript
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Explanation

- `process.env.PORT` reads the port number supplied by the hosting platform.
- `3000` is the fallback port used when no environment port is defined, such as during local development.
- `0.0.0.0` allows the server to listen on available network interfaces in the deployment environment.

### Environment variables on Render

Render can provide environment variables to the application automatically. The application reads the assigned port through `process.env.PORT`.

If additional configuration is needed, environment variables can be added through the service's Environment settings.

Sensitive information, such as passwords, API keys, and database credentials, should be stored in environment variables rather than committed to GitHub.

---

## 8. API Endpoints

The application provides the following HTTP GET endpoints.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Displays the home page welcome message. |
| GET | `/about` | Returns information about the student as JSON. |
| GET | `/time` | Displays the current date and time. |
| GET | `/xyz` | Demonstrates the 404 response for an undefined route. |

### 8.1 Home Endpoint

**URL:** `/`

**Purpose:** Displays a welcome message when a user visits the root URL.

**Expected response:**

```text
Welcome to Node.js and Express Server
```

### 8.2 About Endpoint

**URL:** `/about`

**Purpose:** Returns information about the student in JSON format.

**Example response:**

```json
{
  "name": "Pendyala Manasa",
  "section": "CSE-1D (214)"
}
```

The actual response depends on the values configured in `app.js`.

### 8.3 Time Endpoint

**URL:** `/time`

**Purpose:** Displays the current server date and time.

**Example response:**

```text
Current Date and Time: Wed Oct 29 2026 15:00:00 GMT+0530
```

The output changes according to the actual date, time, and server timezone.

### 8.4 Invalid Route / 404 Endpoint

**URL:** `/xyz`

**Purpose:** Demonstrates how the server responds when a requested route does not exist.

**Expected response:**

```text
404 - Page Not Found
```

The response depends on the fallback route implemented in `app.js`.

---

## 9. Screenshots

Screenshots of the application endpoints are included below.

### 9.1 Home Page

![Home Page](screenshots/home.png)

### 9.2 About Page

![About Page](screenshots/about.png)

### 9.3 Date and Time Endpoint

![Time Endpoint](screenshots/time.png)

### 9.4 Invalid Route / 404 Response

![404 Page](screenshots/not-found.png)

**Note:** These images must exist in the `screenshots` folder for GitHub to display them. If your screenshots use different filenames, update the paths above.

---

## 10. Deployment on Render

The application is deployed on Render and is accessible through a public URL.

**Live Application:** https://bdf-lab-1-h0by.onrender.com/

### Deployment configuration

| Setting | Value |
|---|---|
| Service type | Web Service |
| Repository | `pendyalamanasa823-design/BDF-Labs` |
| Branch | `main` |
| Root Directory | `lab-01` |
| Build Command | `npm install` |
| Start Command | `npm start` |

### Deployment process

1. Push the project files to GitHub.
2. Create a Web Service on Render.
3. Connect the GitHub repository.
4. Set the Root Directory to `lab-01`.
5. Configure the build and start commands.
6. Deploy the latest commit.
7. Open the public URL and test each endpoint.

### Live endpoint URLs

- Home: https://bdf-lab-1-h0by.onrender.com/
- About: https://bdf-lab-1-h0by.onrender.com/about
- Time: https://bdf-lab-1-h0by.onrender.com/time
- Invalid route: https://bdf-lab-1-h0by.onrender.com/xyz

---

## 11. Problems Faced and Solutions

### Problem 1: Render could not find `package.json`

**Error:**

```text
npm error code ENOENT
Could not read package.json
```

**Cause:** The `package.json` file was located inside the `lab-01` directory, while Render initially attempted to find it in the repository root.

**Solution:** Set the Render Root Directory to `lab-01`, allowing Render to locate the package configuration and install the required dependencies.

### Problem 2: Configuring the correct start command

**Cause:** A Node.js application requires an appropriate command to start its server.

**Solution:** Configure the `start` script in `package.json` as follows:

```json
"scripts": {
  "start": "node app.js"
}
```

Then configure the Render Start Command as `npm start`.

### Problem 3: Handling the deployment port

**Cause:** Cloud hosting platforms may assign a port dynamically, so relying only on a fixed port can prevent the server from starting correctly.

**Solution:** Use `process.env.PORT || 3000` in the application.

### Problem 4: Verifying the deployed endpoints

**Cause:** A successful deployment of the home page does not automatically confirm that every route works correctly.

**Solution:** Test `/`, `/about`, `/time`, and an undefined route such as `/xyz` individually.

---

## 12. Learning Outcomes

After completing this experiment, the following concepts were understood:

1. Fundamentals of Node.js and server-side JavaScript execution.
2. Creating an HTTP server using Express.js.
3. Defining routes and handling HTTP GET requests.
4. Returning text and JSON responses.
5. Handling undefined routes with a 404 response.
6. Understanding `package.json` and npm dependency management.
7. Using environment variables for deployment configuration.
8. Managing source code using Git and GitHub.
9. Deploying a Node.js application on Render.
10. Identifying and resolving common deployment configuration errors.

---

## 13. Conclusion

This experiment provided practical experience in developing a basic backend application using Node.js and Express.js. It demonstrated how to create an HTTP server, define multiple routes, return appropriate responses, and handle invalid requests.

The experiment also introduced npm project configuration, environment variables, GitHub repository management, and cloud deployment using Render. Resolving the `package.json` path issue provided practical experience in troubleshooting deployment configuration errors.

Overall, the experiment established a foundation for developing, testing, and deploying backend applications using Node.js and Express.js.

---

## Repository

GitHub Repository: https://github.com/pendyalamanasa823-design/BDF-Labs

## License

This project is distributed under the MIT License. Refer to the `LICENSE` file for details.
