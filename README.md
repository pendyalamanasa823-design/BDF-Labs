# BDF Labs – Node.js and Express Server

## Student Details
- **Name:** Pendyala Manasa
- **Registration Number:** 252U1R1191
- **Section:** CSE-1D (214)

## Objective
To create a basic HTTP server using Node.js and develop an Express server with multiple routes to handle HTTP requests and responses.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Git and GitHub

## Project Structure

```text
BDF-Labs/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
├── app.js
├── plain-server.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/pendyalamanasa823-design/BDF-Labs.git
```

### 2. Navigate to the Project Folder

```bash
cd BDF-Labs
```

### 3. Install Dependencies

```bash
npm install
```

## Running the Application

Start the Express server using:

```bash
npm start
```

The server runs at:

`http://localhost:3000`

## API Endpoints

| HTTP Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | `/` | Displays a welcome message | 200 OK |
| GET | `/about` | Displays student information in JSON format | 200 OK |
| GET | `/time` | Displays the current date and time | 200 OK |
| GET | `/unknown` | Displays a 404 error message for unknown routes | 404 Not Found |

## Screenshots

The following screenshots demonstrate the application endpoints.

### 1. Home Page
Displays the welcome message from the Express server.

![Home Page](screenshots/home.png)

### 2. About Endpoint
Displays student information in JSON format.

![About Endpoint](screenshots/about.png)

### 3. Time Endpoint
Displays the current date and time.

![Time Endpoint](screenshots/time.png)

### 4. 404 Not Found
Displays an error message when an unknown route is requested.

![404 Not Found](screenshots/not-found.png)

## Learning Outcomes

- Learned how to create an HTTP server using Node.js.
- Learned how to configure an Express.js application.
- Practiced defining GET routes and handling HTTP requests.
- Understood HTTP status codes, including 200 and 404.
- Learned how to organize project files and manage source code using Git and GitHub.

## Repository

GitHub Repository: https://github.com/pendyalamanasa823-design/BDF-Labs

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
