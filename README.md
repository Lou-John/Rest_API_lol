## Blog Web App | Node.js, Express, MongoDB

**Description:**

This project implements a fully functional blog web application built with Node.js, Express, and MongoDB. It offers comprehensive features for creating, managing, and sharing blog posts, user registration, authentication, and commenting.

**Key Features:**

* **Blog Post Management:**
    * Create, edit, and delete blog posts with rich text content.
    * Upload and manage images for posts.
    * View all published posts with pagination.
    * View individual post details and comments.
* **User Authentication:**
    * Register new user accounts with secure password hashing.
    * Login and logout functionality with session management.
    * Authorization checks for protected actions.
* **Commenting System:**
    * View and add comments to published posts.
    * Optionally require user login for commenting.

**Technologies:**

* **Frontend:** Edge templating engine for flexible views.
* **Backend:**
    * Node.js for server-side execution.
    * Express for building the REST API and routing.
    * MongoDB for NoSQL data storage with Mongoose ODM.
    * Express-fileupload for image uploads.
    * Express-session for managing user sessions.
    * Connect-flash for displaying temporary messages.

**Usage:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blog-app.git
   ```
2. **Install dependencies:**
   ```bash
   cd blog-app
   npm install
   ```
3. **Configure MongoDB connection:**
   Update the `mongoUrl` setting in `app.js` with your MongoDB connection string.
4. **Start the server:**
   ```bash
   npm start
   ```
5. **Access the app:**
   Open http://localhost:3000 in your browser.

**Additional Notes:**

* This is a basic implementation and can be extended with features like image resizing, user profiles, email notifications, etc.
* The project adheres to security best practices, including password hashing and session management.
* Refer to the source code for further details and customization options.
* 
![image](https://user-images.githubusercontent.com/80677312/234567668-1c394643-0694-4d19-8cea-6b5593949d7d.png)
_____
![image](https://user-images.githubusercontent.com/80677312/234568193-c5a32bff-6f86-4d01-a9dc-a8e9d3a40194.png)

