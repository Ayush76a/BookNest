# Book Nest
Book Nest is a Library Management System designed to facilitate easy and organized management of library resources. It offers role-based access for three user roles: Admin, Librarian, and Members. Each role has unique permissions to efficiently manage the library inventory and transactions.

Admins, librarians, and members each have specific permissions to manage books, issue them, and track borrowed resources. Admins can oversee the entire library, librarians can manage book loans, and members can borrow and return books effortlessly. Book Nest provides a smooth, organized approach to library management with an easy-to-use interface for efficient library operation.


## Live Demo
- App Link: [BookNest-App](https://booknest-app.netlify.app/)

## Features
- *Role-based Access*:
  - *Admin*: Can manage books, add/remove users, and oversee overall operations.
  - *Librarian*: Can view books, issue books to members, and manage borrowed books.
  - *Member*: Can browse books, borrow, and return them as needed.
- *Book Management*: Add, view, and delete books with a user-friendly interface.
- *Middlewares*: 2 middlewares Protect(for Token authentication) and Verify Role(for Role Based Access and Security).
- *Authentication*: Secure login and role management for admins, librarians, and members using JWT.
- *Search*: Easily search books by title.

## Technologies Used
- *Frontend*: React, Material UI, Netlify for deployment
- *Backend*: Node.js, Express, MongoDB, Render for deployment
- *Database*: MongoDB 
- *Authentication*: JWT-based role management
- *Image Hosting*: Cloudinary for book images

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js (>= 12.x)
- npm or yarn
- MongoDB Atlas or local MongoDB setup

### Installation
1. Clone the repository:

   git clone https://github.com/Ayush76a/BookNest.git
    
3. Navigate to the project directory:
   
   cd BookNest
   
4. Install dependencies for both frontend and backend:
   
   cd frontend
   
   npm install
   
   cd ../backend
   
   npm install
   

### Configuration
1. Create a .env file in the frontend and backend directories.
2. Add the following environment variables:
   - For frontend:
     env
      REACT_APP_BACKEND_URL=
     
   - For backend:
     env

       PORT= 
       MONGO_URI=
       JWT_SECRET=
       CLOUDINARY_CLOUD_NAME=
       CLOUDINARY_API_KEY=
       CLOUDINARY_API_SECRET=
       FRONTEND_URL=
     

## Usage
### Running the Frontend

cd frontend

npm start

### Running the Backend

cd backend

npm start

The frontend will be available at http://localhost:3000 and the backend at http://localhost:8080.

## Contributing
Contributions are welcome! Feel free to open an issue or create a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
Distributed under the MIT License. See LICENSE for more information.
