# OpenBlogs : A Place To Share Your Thoughts

Developed a full-stack web application using the MERN stack . Leveraged Cloudinary for robust image storage and seamlessly integrated user authentication, role-based access control, and advanced MongoDB capabilities.

Live Deployed Link :- https://open-blogs-a-place-to-share-your-thoughts-mern-cloudinary.vercel.app/

## ChatBuddy UI


## Admin Page ScreenShot


## Group Section



<!-- [Watch the demo video](link_to_demo_video) -->

## Features

- **Real-time Messaging**: Utilizes Socket.io for instant messaging between users.
- **Image Storage**: Cloudinary integration for robust image storage and retrieval.
- **State Management**: Redux ensures proper state management throughout the application.
- **Admin Panel**: Includes an admin panel for managing users and content.

## Installation

To run ChatBuddy locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdityaGoel0320/MERN-CHAT-APP-WITH-SOCKET-IO.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd ChatBuddy/frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following configurations:

   ```plaintext
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ffsn2re.mongodb.net/MernChatApp?retryWrites=true&w=majority
   JWT_SECRET=<your_jwt_secret_key>
   ADMIN_SECRET_KEY=<your_admin_secret_key>
   NODE_ENV=DEVELOPMENT
   CLIENT_URL=http://localhost:5173
   PORT=1111
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

4. Create a `.env` file in the frontend directory and add the following configuration:

   ```plaintext
   VITE_SERVER=http://localhost:1111
   ```

5. Run the backend server:

   ```bash
   cd ../backend
   npm start
   ```

6. Run the frontend application:

   ```bash
   cd ../frontend
   npm run dev
   ```

7. Access ChatBuddy in your browser at `http://localhost:5173`.

## Usage

Once the application is up and running, users can sign up, log in, and start messaging with other users in real-time. The admin panel allows administrators to manage users and content efficiently.

Live Deployed Link :- https://open-blogs-a-place-to-share-your-thoughts-mern-cloudinary.vercel.app/

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Cloudinary

---

© 2024 Aditya Goel. All Rights Reserved.

[website](https://aditya-goel-portfolio-website.vercel.app/) | [GitHub](https://github.com/AdityaGoel0320) | [LinkedIn](https://www.linkedin.com/in/aditya-goel-286245239/)
