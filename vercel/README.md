## Setup

First you need to install all dependencies:
```shell
npm install
```

To start the dev server, you need to run:
```shell
npm run dev
```
The server should be available via: `http://localhost:3000/`

Now check, if the predefined route is working. You should get `Hello Bob` as response:
```shell
curl -d '{"name":"Bob"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api
```

### Team Secret

Open the `.env` file and add your `TEAM_SECRET`.  
Your team secret is sent with every response via the header and is important to verify you with the server.

### Testing

For testing, `jest` and `supertest` are used.

- Supertest: https://github.com/ladjs/supertest#readme
- Jest: https://jestjs.io/docs/getting-started

To execute your tests, run:
```shell
npm run test
```

## Vercel

https://vercel.com/docs/concepts/deployments/overview

Deploy your application to Vercel and share with the game leader the URL where your bot will reply.
E.g. `https://team-r0cket.vercel.app/api`

### Environment Variables

You need to set your environment variables via the UI: https://vercel.com/docs/concepts/projects/environment-variables  
You may need to re-deploy after setting your environment variables!

### Functions

To optimize the response time of your functions, change the functions region in your project settings.
