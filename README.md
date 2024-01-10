
---

# MERN Stack Library Management System

## Project Overview

This repository contains the backend and frontend code for a Library Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The backend handles RESTful API requests for book operations, while the frontend offers a user-friendly interface to interact with the library system.

## Backend Architecture

### Models

- **Book Schema**: Defined using Mongoose for MongoDB, containing fields for title, author, and publish year.

### Backend Routes

- **Express.js Routes**: Define CRUD operations for books:
  - `POST /books`: Add a new book to the database.
  - `GET /books`: Retrieve all books in the database.
  - `GET /books/:id`: Retrieve a specific book by ID.
  - `PUT /books/:id`: Update a book's information.
  - `DELETE /books/:id`: Delete a book from the database.

### Backend Deployment

- **Deployment**: Backend deployed on AWS EC2 instances using self-hosted Linux runners via GitHub Actions for automation.

## Frontend Architecture

### Technologies Used

- **Vite + React**: Building the user interface for seamless interactions with the library system.

### Frontend Features

- **User Interface**: Provides functionalities for browsing, searching, borrowing, and returning books.
- **Intuitive Design**: Designed for easy navigation and efficient interaction with the library catalog.

## Deployment Automation

- **GitHub Actions**: Automation for deployment, ensuring continuous deployment for both backend and frontend components.

## Technologies and Tools

- **Backend**: Node.js, Express.js, MongoDB, Mongoose for the API and database.
- **Frontend**: Vite, React for the user interface.
- **Deployment**: AWS EC2 instances, GitHub Actions for deployment automation.

## Conclusion

This MERN Stack Library Management System integrates powerful backend functionalities with a user-friendly frontend interface. Leveraging Node.js, Express.js, MongoDB, and React.js, it offers a robust platform for managing books in a library setting. The deployment automation through GitHub Actions ensures efficient deployment and updates of both backend and frontend components.

---

Feel free to tailor and expand upon this project to highlight additional details, specific features, or any unique aspects of project's architecture or functionality.
