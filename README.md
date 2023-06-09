# Blogging Website
## This is a blogging website built with Node.js, Express.js, EJS, and MongoDB. It provides a simple and intuitive interface for users to read and create blog posts. The website allows users to browse the home page to explore a collection of blog posts, read individual posts, and navigate to the About and Contact pages. Users can also compose their blog posts and submit them for publishing.
### [Click here](https://my-blog-4awg.onrender.com) to visit the website.

### The application provides the following features:

- Home Page: Displays a list of existing blog posts with their titles and a brief preview of the content.
- Blog Post Page: Shows the full content of a selected blog post.
- Compose Page: Allows users to create new blog posts by providing a title and content.
- About Page: Provides information about the author of the blog.
- Contact Page: Allows users to get in touch with the author.

## Technologies Used
The application utilizes the following technologies:

- EJS: EJS is a JavaScript templating engine that enables dynamic HTML generation on the server side. It allows embedding JavaScript code within HTML templates, making it easier to generate dynamic content.
- Express: Express is a minimalistic web application framework for Node.js that simplifies the process of building web applications.
- MongoDB: MongoDB is a popular NoSQL database that provides a flexible schema and scalable data storage.
- Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies interacting with MongoDB by providing a structured schema and validation for data.

## Setup and Usage

- Clone the repository to your local machine.
- Install the required dependencies by running the command: npm install.
- Set up a MongoDB Atlas account and obtain the connection URL.
- Replace <MongoDB Atlas URL> in the code with your MongoDB Atlas connection URL.
- Start the server by running the command: npm start.
- Open a web browser and navigate to http://localhost:3000 to access the application.
  
## Available Routes
 The application provides the following routes:

- /: The home page that displays existing blog posts.
- /about The about page that provides information about the author.
- /contact: The contact page for getting in touch with the author.
- /compose: The compose page for creating new blog posts.
- /posts/:blogID: The individual blog post page that shows the full content of a selected blog post.
  
 ## Contributing
Contributions to the project are welcome. If you find any issues or want to add new features, please submit a pull request.
