# Lesson 6 - Best Practices

## Demo - Port & Adapters
- https://www.youtube.com/watch?v=4CEv4LyAUcY

## Demo - Run Serverless Application Locally
- https://www.youtube.com/watch?v=R1FB6KbtdMg
- https://www.youtube.com/watch?v=yZZgHK4KY58
- https://www.youtube.com/watch?v=NZ4qdlM9fKg
example to use local DynamoDB UI: http://localhost:8000/shell/
```
params = {
    TableName: "Groups-dev",
    Item: {
        id: "4",
        userId: "auth0|6016e159340285007160fe4c",
        name: "new local",
        description: "new group from local"
    }
};

docClient.put(params, function(err, data){
    if (err) ppJson(err); // an error occured
    else ppJson(data); //successful response
})
```
## Demo - Configure Canary Deployment
- https://www.youtube.com/watch?v=gZBf-HvZoUg
- https://www.youtube.com/watch?v=egQ5vAUhh2I

## Demo - Enable Distributed Tracing
- https://www.youtube.com/watch?v=QTlB32T6cVg
- https://www.youtube.com/watch?v=dv9EZRGhMX4

## Demo - Optimize Function Size
- https://www.youtube.com/watch?v=1SGDy6AH5wc
- https://www.youtube.com/watch?v=5ydc2zeipeU
- note: once `package.individual` is set to `true` more memory needs to be allocated
    - run in terminal: `export NODE_OPTIONS="--max-old-space-size=8192"`
- note: may need to update serverless-iam-roles-per-function
    - run: `npm i --save-dev serverless-iam-roles-per-function@next`

## Demo - Lambda Minimal Privileges
- https://www.youtube.com/watch?v=ArjHvku5w5A

## Exercises
- Porting an Existing Application: https://www.youtube.com/watch?v=ymbWVsq3O5k
- Rewrite One of the HTTP Handlers: https://www.youtube.com/watch?v=AXLzsMsYBw8

`Implementation`
In this exercise, you will see how we can run code written for the Express web framework in AWS Lambda. To do this, you need to update the handler that returns a list of groups in the getGroups.ts file.

Here are the steps that you need to follow:

`Install new dependencies`
In a folder with the serverless project run the following commands to add new dependencies:
```
npm install --save aws-serverless-express
npm install --save express
```
express - is a very popular Node.js web framework that we will use in this lesson
aws-serverless-express - is a library that allows using express with AWS Lambda

`Import new dependencies`
In the getGroups.ts you need to import the following dependencies:
```
import * as express from 'express'
import * as awsServerlessExpress from 'aws-serverless-express'
```
`Create an Express instance`
Once the dependencies are imported you need to create an Express application:
```
const app = express()
```

`Add a handler for a GET method`
To define how to process an incoming GET request, we need to use the app.get method and pass a function that will be called to process a request:
```
app.get('/groups', async (_req, res) => {
  // TODO: get all groups as before
  const groups = ...

  // Return a list of groups
  res.json({
    items: groups
  })
})
```
You can read more about how to use Express here.
To return a JSON response we use the .json() method on the response object.

`Export a Lambda handler`
Now the last thing that we need to do is to create a Lambda handler. To do this you can use the following code snippet:
```
// Create Express server
const server = awsServerlessExpress.createServer(app)
// Pass API Gateway events to the Express server
exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
```
`Preparations to test your function`
To test your function, you should do the following:

`Deploy the serverless application`
Start the web application

Deploying the serverless application
Just as in previous lessons, you need to ensure that S3 buckets have unique names. To ensure that your S3 buckets have unique names add a random string to the end of S3 bucket names in the serverless.yml file. Let's say you want to add a random string ab4fe. You would need to change the following section like this:
```
  environment:
    IMAGES_S3_BUCKET: serverless-udagram-images-ab4fe-${self:provider.stage}
    THUMBNAILS_S3_BUCKET: serverless-udagram-thumbnail-ab4fe-${self:provider.stage}
```
To deploy the whole project, you need to run the following commands:
```
npm install
sls deploy -v
```
Make sure that the serverless command is installed and configured to use correct IAM credentials.

`Start the web application`
To start the web application, you need to run the following commands:
```
npm install
npm run start
```
`Testing the result application`
To test the result application, go to the localhost:3000.

`Expected result`
Your application should display a list of groups just as before.


### Resources:
- Don't get locked up into avoiding lock-in: https://martinfowler.com/articles/oss-lockin.html
- Port & Adapters/Hexagonal Architecture: https://en.wikipedia.org/wiki/Hexagonal_architecture_(software
- Testing:
    - The Practical Test Pyramid: https://martinfowler.com/articles/practical-test-pyramid.html
    - Integrated Tests Are A Scam: https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam
    - Node & HS Testing Best Practices: https://yonigoldberg.medium.com/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347
- Local Serverless Execution:
    - invoke command: https://www.youtube.com/watch?v=uEbsyehbxFY
    - serverless-offline plugin: https://www.youtube.com/watch?v=ppaMytOg8Pk
        - https://github.com/dherault/serverless-offline
- Lambda Function Aliases: https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html
- Enabling Canary Deployment: https://www.youtube.com/watch?v=iP32ZWqt4Qc
- Non-AWS Observability Tools: https://aws.amazon.com/lambda/partners/?partner-solutions-cards.sort-by=item.additionalFields.partnerNameLower&partner-solutions-cards.sort-order=asc
    - filter for Security & Monitoring
- AWS X-Ray: https://aws.amazon.com/xray/
- serverless-plugin-warmup: https://github.com/juanjoDiaz/serverless-plugin-warmup
- AWS Lambda Best Practices: https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html
- AWS Lambda Power Tuning: https://github.com/alexcasalboni/aws-lambda-power-tuning
    -  It runs a provided Lambda function with different settings and tries to find an optimal memory size.
- AWS Lambda security: https://docs.aws.amazon.com/lambda/latest/dg/lambda-security.html
