# ef-api

## Models and mock data
- https://my-json-server.typicode.com/alecarg/ef-api (using this repo's db.json)

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
- [NOT SURE] Auth via Okta? https://scotch.io/tutorials/build-simple-authentication-in-express-in-15-minutes
- [NOT SURE] Auth via Passport.js? http://www.passportjs.org/docs/

## Implementation (Serverless and Dynamodb)
For latest, follow these steps:
1) Pull repo and `cd` into it
2) Install packages with `yarn install`
3) Install the DB with `sls dynamodb install`
4) Run serverless offline and dynamodb with `sls offline start`

Based on the following two articles (the first one is just a dependency on the second one)
- https://serverless.com/framework/docs/providers/aws/guide/credentials/
- https://serverless.com/blog/serverless-express-rest-api/
