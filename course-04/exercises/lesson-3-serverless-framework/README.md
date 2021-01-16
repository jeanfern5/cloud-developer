# Lesson 3

## Demo: Install Serverless Framework
- https://www.youtube.com/watch?v=DfJ65SXUYPA&feature=emb_logo

## Demo: Create Serverless Project
- https://www.youtube.com/watch?v=fup2msAcDS4
    - when created pay attention to access method option given
    -  NOTE: if you get a permissions error when you run deploy you may need to specify the user profile
        - `sls deploy -v --aws-profile serverless`

## Demo - Port Get All Groups API
- https://www.youtube.com/watch?v=6RnMNdF0U-4
- https://www.youtube.com/watch?v=phpNBWoIRd0
- https://www.youtube.com/watch?v=0HXC7yMvlHc
```
  {
    "id": "1",
    "name": "Dogs",
    "description": "Only dog images here!"
  },
    {
    "id": "2",
    "name": "Nature",
    "description": "What can be a better object for photography"
  },
  {
    "id": "3",
    "name": "Cities",
    "description": "Creative display of urban settings"
  }
```

## Demo - Port Create Group API
- https://www.youtube.com/watch?v=4NCRcXuFfoc
    - make sure to `npm i uuid`

## Demo - Validate Incoming Requests
- https://www.youtube.com/watch?v=mxOgm8ldJKU

## Demo - Get Images for a Group
- https://www.youtube.com/watch?v=qHq7G36BgD4
```
{
  "groupId": "1",
  "imageId": "1234",
  "timestamp": "2021-01-16 17:21:11",
  "title": "First image"
}
```

## Demo - Get an Image by ID
- https://www.youtube.com/watch?v=NuL_FT1DJH0

## Exercise - Create Image Record
- https://www.youtube.com/watch?v=yuHRPmLTqt8
    Implementation
    In this exercise, you will have to update a Lambda function that allows creating a new record about a shared image.
    In this lesson, we will only store metadata about an image, while in the next lesson, we will see how we can upload actual images.

    To implement this exercise, you need to do the following:
    - Replace a `TODO`: statement with code that stores an image item to a DynamoDB table. This should be done similarly to how we store new group items.
    - Add `dynamodb:PutItem` action to the IAM statement to allow a new Lambda function to add new items to the Images table.
    - Add a new model definition to validate a new image. The JSON schema for the new model is already defined in the `models/create-image-request.json` file
    - Add an event definition to the CreateImage function. This function should be called when a user sends a `POST` request to ``/groups/{groupId}/images`. It should also validate incoming request using the provided model

    Deploy:
    `serverless deploy -v`

    Make sure that the serverless command is installed and configured to use correct IAM credentials.

    After the deployment is finished, you need to create at least one group in the Groups-dev table. You can add the following item using the DynamoDB console:
    ```
    {
        "id": "1",
        "name": "Dogs",
        "description": "Only dog images here!"
    }
    ```

## Solution
- https://www.youtube.com/watch?v=KQn3S4U0cnM


### Resources:
- http://json2yaml.com
- Serverless Framework:
    - plugins
        - catalog: https://www.serverless.com/plugins
        - create your own: https://www.serverless.com/framework/docs/providers/aws/guide/plugins/#writing-plugins
    - events:
        - https://www.serverless.com/framework/docs/providers/aws/events/apigateway/
    - resources:
        - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html

- API Gateway request validation: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html
- JSON schema: http://json-schema.org

