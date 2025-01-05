# Inventory Management Website

## Description

This project is a full-stack application that handles user authentication. It consists of a backend built with Node.js, Express, and MongoDB, and a frontend built with React, Vite, and Redux. The backend features user registration, login, and the ability to retrieve user data after authentication. The frontend is designed to provide a seamless user experience with state management using Redux.

## Technologies Used

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB
  - bcryptjs (for password hashing)
  - jsonwebtoken (JWT for authentication)
  - express-async-handler (for handling asynchronous requests)

- **Frontend**:

  - React
  - Vite (for development build and server)
  - Redux (for state management)
  - Tailwind CSS (for styling)

- **Development Tools**:
  - npm (for running and managing dependencies)

## Features

- **User Registration**: Allows users to create an account by providing their name, email, and password. Passwords are hashed using bcryptjs for secure storage.
- **User Login**: Users can log in using their email and password. Upon successful login, a JWT token is generated and returned, allowing users to authenticate in future requests.
- **Get User Data**: After logging in, users can access their own data, including their name and email, using a private route secured by JWT token authentication.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

2. Install dependencies for both the frontend and backend:

   - **Backend**:

     ```bash
     cd backend
     npm install
     ```

   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```

3. Set up your environment variables for the backend in `.env`:

   ```
   JWT_SECRET=your-jwt-secret-key
   MONGO_URI=your-mongo-database-uri
   ```

   Make sure you have a running MongoDB instance or use MongoDB Atlas for a cloud database.

4. Run both the frontend and backend concurrently:

   - **Run Development Servers**:

     ```bash
     npm run dev
     ```

     This will run the backend server on `http://localhost:5000` and the frontend server on `http://localhost:5173`.

## API Endpoints

### 1. Register a New User

- **Route**: `POST /api/users`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "_id": "user_id",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "token": "jwt_token"
    }
    ```
  - **Error**:
    - `400`: Missing required fields or user already exists.

### 2. User Login

- **Route**: `POST /api/users/login`
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "_id": "user_id",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "token": "jwt_token"
    }
    ```
  - **Error**:
    - `400`: Invalid credentials.

### 3. Get User Data (Protected Route)

- **Route**: `GET /api/users/me`
- **Headers**:
  - `Authorization`: `Bearer <jwt_token>`
- **Response**:
  - **Success**:
    ```json
    {
      "id": "user_id",
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
    ```
  - **Error**:
    - `401`: Unauthorized access, invalid or missing token.

## Running the Application

To start the application in development mode:

1. **Start the backend** (Node.js + Express):

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend** (React + Vite):
   ```bash
   cd frontend
   npm run dev
   ```

The backend will be available at `http://localhost:5000`, and the frontend at `http://localhost:5173`. The application uses a proxy configuration to route API requests from the frontend to the backend.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
