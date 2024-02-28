const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/mynewdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connected successfully'))
  .catch((err) => { console.error(err); });

const schema = new mongoose.Schema({
  name: String,
  email: String,
  id: Number
});

const Document = mongoose.model('Document', schema);

app.use(bodyParser.json());

// Insert
app.post('/create', async (req, res) => {
  try {
    const document = new Document(req.body);
    await document.save();
    res.send('Document created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating document');
  }
});

// Read
app.get('/read', async (req, res) => {
  try {
    const documents = await Document.find({});
    res.json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading documents');
  }
});

// Update
app.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Document.findByIdAndUpdate(id, req.body);
    res.send('Document updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating document');
  }
});

// Delete
app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Document.findByIdAndDelete(id);
    res.send('Document deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting document');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
