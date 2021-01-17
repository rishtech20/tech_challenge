# API Server

## Tech Stack / Dependencies

- GraphQL
- Apollo Server Lambda
- AWS SDK

## How to run the applcation?

### 0. Pre-requisites:

1. Docker
2. SAM CLI
3. Add the JSON file to a S3 bucket
4. Add the AWS credentials to src/graphql/schema.js

### 1. Build the App

```Bash
$ sam build
```

### 2. Start the Application locally

```Bash
$ sam local startup-api
```

### 3. Goto http://localhost:3000/graphql

## Improvements / TODO

- Create separate modules for Schema and Resolvers
- Create an .env file to take all the essential environment variables out
- Introduce Typescript for safer code
