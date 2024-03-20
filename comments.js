// Create Web Server
// Create an API to handle comments
// 1. Create a new comment
// 2. Get all comments
// 3. Get a comment by id
// 4. Update a comment by id
// 5. Delete a comment by id

const express = require('express');
const app = express();
app.use(express.json());

let comments = [
    { id: 1, author: 'John', content: 'Hello World!' },
    { id: 2, author: 'Jane', content: 'Hello World!' }
];

// 2. Get all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// 3. Get a comment by id
app.get('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.json(comment);
});

// 1. Create a new comment
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,