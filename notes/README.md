# React AXIOS CRUD w/ JSON-server

> contact management app + reactjs + semantic-ui + context api + react-router-dom v6 + vercel.json + deploy to vercel

## Setting up JSON server API

1. create a new folder: server-api

2. go to server-api folder -> open in integrated terminal -> type `npm init --yes` to create the `package.json` file

2. Go here: [json-server](https://www.npmjs.com/package/json-server)

3. Follow the instructions:
- - Install JSON Server `npm install -g json-server` (for global), for under the server-api folder `npm install --save json-server`

4. Create a file called `db.json` under the server-api folder. Inside the `db.json` file, we create our resource which will be a JSON object.

```json
// db.js
{
    "contacts": [
        
    ]
}

// after pasting the local storage:
{
  "contacts": [
    {
      "id": "476a6332-7b79-4c55-bbef-9f5e8ed5b5bd",
      "name": "John",
      "email": "john@example.com"
    },
    {
      "id": "2c40e4f8-24bc-484d-8a39-483e210e1568",
      "name": "Jane",
      "email": "jane@example.com"
    }
  ]
}
```

5. Go to `package.json` file, under server-api folder -> go to `"scripts": {...}` -> remove the following: `"test": "echo \"Error: no test specified\" && exit 1"` -> update with this: `"start": "json-server -p 5000 -w db.json"`

```json
"start": "json-server -p 5000 -w db.json"
```

6. Open the intergrated terminal under server-api folder -> type: `npm start`

7. go to any of this:

```bash
Resources
http://localhost:3006/contacts

Home
http://localhost:3006
```

## api/contacts.js

```javascript
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/", // same as json server port
});
```