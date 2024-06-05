# OpenBlogs: A Place To Share Your Thoughts

OpenBlogs is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application designed to empower users to share their thoughts and ideas with the world. It incorporates user authentication and authorization using JWT (JSON Web Tokens) for secure access to the platform. The application features two types of users: authors and readers. Authors have access to a private dashboard where they can create, update, delete, and maintain their blog posts, along with visual representations through charts.

**Live Deployed Link:** https://open-blogs-a-place-to-share-your-thoughts-mern-cloudinary.vercel.app/

## Features

- **User Authentication**: Utilizes JWT for secure user authentication and authorization.
- **Author Dashboard**: Provides authors with a private dashboard to manage their blog posts.
- **CRUD Operations**: Enables authors to create, read, update, and delete blog posts.
- **Image Upload**: Integrates Cloudinary for efficient image storage and retrieval.
- **Responsive Design**: Ensures optimal viewing experience across various devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Image Storage**: Cloudinary

## Installation

To run OpenBlogs locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdityaGoel0320/OpenBlogs_A_Place_To_Share_Your_Thoughts_MERN_CLOUDINARY.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd ../frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following configurations:

   ```plaintext
   FRONTEND_URL=
   CLOUDINARY_CLIENT_NAME=
   CLOUDINARY_CLIENT_API=
   CLOUDINARY_CLIENT_SECRET=
   PORT=
   JWT_EXPIRES=
   JWT_SECRET_KEY=
   COOKIE_EXPIRE=
   MONGO_URI=
   ```

4. Start the frontend and backend servers:

   ```bash
   # Frontend
   cd ../frontend
   npm start

   # Backend
   cd ../backend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access OpenBlogs locally.

