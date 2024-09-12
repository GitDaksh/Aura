# Aura

Aura is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes user registration, login functionality, and a user management interface where administrators can view and delete users.

## Features

- **User Registration:** Allows users to create a new account.
- **User Login:** Allows users to log in to their account.
- **User Management:** View and delete users (admin functionality).

## Project Structure

- **Backend**: 
  - `app.js`: Main server file with Express.js routes for user management.
  - `models/user.js`: Mongoose model for User.
  - `routes/users.js`: API routes for user operations.
  - `middleware/auth.js`: Middleware for authentication (if implemented).

- **Frontend**:
  - `src/pages/Home.js`: Home page with navigation links to login and register.
  - `src/pages/Login.js`: Login page with a form to authenticate users.
  - `src/pages/Register.js`: Registration page with a form to create a new user.
  - `src/pages/UserList.js`: User management page to view and delete users.

## Installation

### Backend

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

## API Endpoints

### User Endpoints

- **POST /users**: Register a new user.
- **GET /users**: Retrieve a list of users.
- **GET /users/:id**: Retrieve a specific user by ID.
- **PUT /users/:id**: Update a user by ID.
- **DELETE /users/:id**: Delete a user by ID.

## Styling

The application uses basic styling with a dark purple background and light buttons. The `src/styles.css` file contains global styles, while individual pages have their own styling files.

## Troubleshooting

- **Login Issues**: Ensure that the backend server is running and accessible at `http://localhost:3000`. Check the network tab in the browser's developer tools for detailed error messages.
- **User Deletion**: Make sure that the user ID being sent in the delete request is valid and that the backend server is properly connected to the MongoDB database.

## Contributing

Feel free to open issues and submit pull requests. Contributions to improve the functionality, code quality, and styling of the project are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or further information, you can contact me at [your-email@example.com](mailto:your-email@example.com).

