# Requirements

- [node.js](https://nodejs.org/en/) v14 or newer
- an [AWS account](https://portal.aws.amazon.com/billing/signup) (It comes with a very generous [free tier](https://aws.amazon.com/free/))
- the [aws cli](https://aws.amazon.com/cli/) + [configure it](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- willingness to learn 💪

# Install

```
npm i
```

# Deploy

```bash
npx sls deploy
```

# Test the API

You can use the AWS console:

- Go to the AWS console
- Select the AWS AppSync service
- Select the deployed AppSync API
- Go to `Queries`

Or, you can use [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or your favourite GraphQL client.

Execute the below query.

```graphql
query MyQuery {
  getTodo(id: "2") {
    id
    title
    items {
      label
      done
    }
  }
}
```

# Tear it down!

Serverless resources are usually free when not used (they "scale down to zero"), but to avoid any charge, it is best to undo/destroy everything you have done.

```bash
npx sls remove
```
