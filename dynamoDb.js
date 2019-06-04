const AWS = require('aws-sdk');

const IS_OFFLINE = 'true'; // process.env.IS_OFFLINE

let dynamoDb;
if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'test',
    secretAccessKey: 'test'
  })
  console.log(dynamoDb);
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
};

module.exports = dynamoDb;