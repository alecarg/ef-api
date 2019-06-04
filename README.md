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
Follow these two to set up a local environment:
- https://serverless.com/framework/docs/providers/aws/guide/credentials/
- https://serverless.com/blog/serverless-express-rest-api/
