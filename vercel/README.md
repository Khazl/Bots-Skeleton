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
curl -d '{"name":"Bob"}' -H "Content-Type: application/json" -X POST http://localhost:3000/
```
.
