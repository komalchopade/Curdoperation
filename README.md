# MongoDB CRUD Operations Project

This project implements CRUD (Create, Read, Update, Delete) operations using MongoDB, Express.js, and Mongoose.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Make sure MongoDB is running on your local machine (`mongodb://localhost:27017/mynewdb`).

## Usage

1. Start the server using `npm start`.
2. Access the API endpoints to perform CRUD operations on the MongoDB database.

## API Endpoints

- `POST /create`: Create a new document.
- `GET /read`: Read all documents.
- `PUT /update/:id`: Update a document by ID.
- `DELETE /delete/:id`: Delete a document by ID.

## MongoDB Schema

```javascript
const schema = new mongoose.Schema({
  name: String,
  email: String,
  id: Number
});
Technologies Used
Node.js
Express.js
Mongoose
MongoDB
