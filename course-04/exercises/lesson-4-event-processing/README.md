# Lesson 4 - Event Processing

## Demo - Create an S3 Bucket
- https://www.youtube.com/watch?v=2Tu5jfiHXyI

## Demo - Return a Presigned URL
- https://www.youtube.com/watch?v=G8zI1KEj9AQ

## Demo - Uploading a File
- https://www.youtube.com/watch?v=Xv23jpAiBFE

## Demo - Process S3 Notifications
- https://www.youtube.com/watch?v=TwZ9e87qPrY
    - Update: https://www.serverless.com/framework/docs/providers/aws/events/s3/#using-existing-buckets

## Demo - Store a List of Connections
- https://www.youtube.com/watch?v=CiIE-2vTlo0

## Demo - WebSocket Notifications
- https://www.youtube.com/watch?v=7qybvK6y6k8

## Demo - Enable a DynamoDB Stream
- https://www.youtube.com/watch?v=f5Wq9n6mtEk

## Demo - Create an Elasticsearch Cluster
- https://www.youtube.com/watch?v=fXkJ3XPRRMU
    - Restrict access to a Kibana dashboard: https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html

## Demo - Full-text Search
- https://www.youtube.com/watch?v=wGeY16sOWrg

## Demo - SNS Notifications
- https://www.youtube.com/watch?v=hlXAMO6L2B0

## Exercise - Resize a File Uploading
- https://www.youtube.com/watch?v=bTa3p4IKTG0
    ```
    `Implementation`
    In this exercise, you will have to implement a Lambda function that processes newly uploaded images, creates a smaller version of the same image, and uploads an image to a different S3 bucket. It is important to upload an image to a different bucket; otherwise, a smaller image will trigger your Lambda function again.

    `Add an event sources for the "ResizeImage" function`
    The function should be connected to the same SNS topic as the `SendUploadNotifications` function

    `Import "S3EventRecord" type`
    It might be handy to import `S3EventRecord` type that represents a single S3 event.

    `Process SNS events in the Lambda function`
    To implement the function, you would have to process SNS events.

    `Get a key of an uploaded image in S3`
    To download a newly uploaded image, we first need to get its key.

   ` Download an image`
    Now when we have a key of a new S3 object, we can download it.
    Hint: The body of a downloaded object will be of a type Buffer which is used to work with an array of bytes.

   ` Resize an image`
    Now once we have a body of an image, we can resize it.
    Hint: Use the `Jimp` library
        - The main reason why we use the Jimp library in this exercise is because it is implemented in pure JavaScript and does not rely on any native dependencies (libraries compiled to machine code). Native libraries can be used with AWS Lambda, but they are tricker to build (especially if you are using a non-Linux environment). You can read more about building a native binary package for AWS Lambda here.


    `Write an image to a different bucket`
    Once we have a resized image, we can write it back to S3.

    `Deployment`
    Before you deploy an application, keep in mind that names of S3 buckets should be globally unique across all AWS users. If you don't give your S3 buckets unique names a deployment will fail. <br/>
    To ensure that your S3 buckets have unique names add a random string to the end of S3 bucket names in the `serverless.yml` file. Let's say you want to add a random string `ab4fe`.
        - run: `npm install && sls deploy -v`
        - note: Make sure that the serverless command is installed and configured to use correct IAM credentials.

    `Preparations to test your function`
    To test your function you should do the following:

    Create a group
    Create an image
    Upload an image
    You might do those steps using the React app provided with this exercise. Alternatively, you can use Postman or any other HTTP client.


    `Using React application`
    You need to configure and start the application. To configure your application, you need to go to src/config.ts file and change apiEndpoint to point to the API of your serverless application.
        - run: `npm install && npm start`
    ```

## Exercise Solution
- https://www.youtube.com/watch?v=mrlXuCwJKbE


### Resources:
- DynamoDB JSON: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.ResponseFormat
- Using AWS Lambda with Amazon Kinesis: https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-errors

