const serverless = require('serverless-http');
const dynamoDb = require('../../dynamoDb');
const app = require('../../app');

// getUser

const USERS_TABLE = process.env.USERS_TABLE;

app.get('/users/:userId', function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  }

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get user' });
    }
    if (result.Item) {
      const {userId, name} = result.Item;
      res.json({ userId, name });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
})

module.exports.handler = serverless(app);