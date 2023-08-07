# Blog Post Web Service
This is a simple blog application RESTful API built with Node.js, Express.js, TypeScript, and PostgreSQL. The API allows you to perform CRUD operations on blog posts and store them in a PostgreSQL database. 
## Pre-requisites

- Install [Node v19.5+](https://nodejs.org/en/download/)
## Project setup

- Clone the repository and navigate to the project directory.
- Perform `npm install` at command line.
- Create an empty postgres database.
- Define the environment variables in a `.env` file like below:
```
DB_NAME=<database name to connect to>
DB_USER=<username to be used for database>
DB_PASS=<password to be used for database>
DB_HOST=<hostname to connect to for database>
DB_PORT=<port to connect to database>
PORT=<port to run the application on>
```
- Run the command `npm run start` to run migrations, seed the database and start the server in development mode. This starts `nodemon`, which restarts the server for any changes in the source files.
## Usage
### Create a Blog Post

Creates a Blog Post

- **URL**: `/posts`
- **Method**: `POST`
- **Request  Body**:
  - `title`: Title of the Blog Post. Example: `Sample Title`
  - `content`: Content of the Blog Post. Example: `Lorem Ipsum ....`
  - `category`: Category of the Blog Post. Example: `Technology`

#### Response

A JSON object containing the created blog post.

Example Response:

```json
{
    "id": 2,
    "title": "Sample Title",
    "content": "Lorem Ipsum ....",
    "category": "Technology",
    "createdAt": "2023-08-07T14:59:22.830Z",
    "updatedAt": "2023-08-07T14:59:22.830Z"
}
```
### Get All Blog Posts

Retrieves a list of all blog posts. Supports sorting based on either created date or title of blog and filters based on category.

- **URL**: `/posts`
- **Method**: `GET`
- **Query Parameters**:
  - `sort`: Optional. Sorts the blog posts based on either created date or blog title. Example: `sort=date,name`
  - `category`: Optional. Filters the blog posts based on the specified category. Example: `category=Technology`

#### Response

A JSON array containing a list of blog posts.

Example Response:

```json
[
  {
    "id": 1,
    "title": "Sample Title 1",
    "content": "Lorem ipsum dolor sit amet...",
    "createdAt": "2023-08-07T12:00:00Z",
    "updatedAt": "2023-08-07T12:00:00Z",
    "category": "Technology"
  },
  {
    "id": 2,
    "title": "Sample Title 2",
    "content": "Another blog post content...",
    "createdAt": "2023-08-06T10:30:00Z",
    "updatedAt": "2023-08-06T10:30:00Z",
    "category": "Food",
  }
]
```
### Get Blog Post By ID

Retrieves a blog post by it's ID

- **URL**: `/posts/:id`
- **Method**: `GET`
- **Path Variables**:
  - `id`: ID of the blog

#### Response

A JSON object containing the blog post.

Example Response:

```json
{
    "id": 2,
    "title": "demo",
    "content": "demo text",
    "category": "demo",
    "createdAt": "2023-08-07T14:59:22.830Z",
    "updatedAt": "2023-08-07T14:59:22.830Z"
}
```
### Update a Blog Post

Updates a Blog Post By ID

- **URL**: `/posts/:id`
- **Method**: `PUT`
- **Path Variables**:
  - `id`: ID of the blog
- **Request  Body**:
  - `title`: Title of the Blog Post. Example: `Sample Title 2`
  - `content`: Content of the Blog Post. Example: `Lorem Ipsum ....`
  - `category`: Category of the Blog Post. Example: `Technology`

#### Response

A JSON object containing the updated blog post.

Example Response:

```json
{
    "id": 2,
    "title": "Sample Title 2",
    "content": "Lorem Ipsum ....",
    "category": "Technology",
    "createdAt": "2023-08-07T14:59:22.830Z",
    "updatedAt": "2023-08-07T14:59:22.830Z"
}
```
### Delete a Blog Post

Deletes a Blog Post By ID

- **URL**: `/posts/:id`
- **Method**: `DELETE`
- **Path Variables**:
  - `id`: ID of the blog

#### Response

A JSON object containing the deleted blog post.

Example Response:

```json
{
    "id": 2,
    "title": "Sample Title 2",
    "content": "Lorem Ipsum ....",
    "category": "Technology",
    "createdAt": "2023-08-07T14:59:22.830Z",
    "updatedAt": "2023-08-07T14:59:22.830Z"
}
```
