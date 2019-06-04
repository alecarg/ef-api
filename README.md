# ef-api

## Models and mock data
- https://my-json-server.typicode.com/alecarg/ef-api

## API requirements
### For all users
- events/
- events/{eventId}
- users/{userId}/promotions/
- promotions/{promotionId}/rewards/

### For "organiser" users
- users/{userId}/events/
- events/{eventId}/promotions/

## Roadmap
- [NOT SURE] Document in swagger: https://app.swaggerhub.com/apis/Ale1/EFApi/1.0.0
- Implement API requirements via Serverless and Dynamodb

## Implementation (Serverless and Dynamodb)
For latest, follow these steps:
1) Pull repo and `cd` into it
2) Install packages with `yarn install`
3) Install the DB with `sls dynamodb install`
4) Run serverless offline and dynamodb with `sls offline start`

Based on the following two articles (the first one is just a dependency on the second one)
- https://serverless.com/framework/docs/providers/aws/guide/credentials/
- https://serverless.com/blog/serverless-express-rest-api/
