// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Create a route to handle database requests
app.get('/api/data', async (req, res) => {
  try {
    const client = new MongoClient('<your-mongodb-connection-string>');
    await client.connect();
    const db = client.db('<your-database-name>');
    const data = await db.collection('<your-collection-name>').find().toArray();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
