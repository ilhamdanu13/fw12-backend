# Backend Cluezzy Ticket for Movie

## About
It's backend app for Cluezzy project that contain CRUD and also integrate to PostgreSQL.

## Built With
[![My Skills](https://skills.thijs.gg/icons?i=express,nodejs,postgres,supabase,postman&theme=light)](https://skills.thijs.gg)

## Contents
- About
- Packages
- Run App
- ENV
- Endpoint

## Packages
- [Cloudinary](https://cloudinary.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [fs](https://www.npmjs.com/package/fs-react)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [morgan](https://www.npmjs.com/package/morgan)
- [multer](https://expressjs.com/en/resources/middleware/multer.html)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Run App
Clone this repo
```bash
  https://github.com/ilhamdanu13/fw12-backend.git
```
Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Postman
- Go to [collection](https://www.postman.com/crimson-meteor-607305/workspace/cluezzy/globals)
- Create a fork
- Setting enviroment globals to [https://fw12-backend-shr6.vercel.app/](https://fw12-backend-shr6.vercel.app/)

## ENV
- DATABASE URL
- PORT 
- CLOUD_NAME
- API_KEY
- API_SECRET

# Endpoint
|                              URL                         | Method | Description |
| -------------------------------------------------------- |:------:| --------------------------------------------:|
| /auth/login                                              | POST  |                                    LOGIN USER |
| /auth/register                                           | POST  |                                 REGISTER USER |
| /auth/forgotPassword                                     | POST  |                          FORGOT PASSWORD USER |
| /auth/resetPassword                                      | POST  |                          RESET PASSWORD USER  |
| /profile/:id/:update                                     | POST  |                           UPDATE PROFILEUSER  |
| /transactions/orderTransaction                           | POST  |                            ORDER TRANSACTIONS |
| /transactions                                            | GET   |                             READ TRANSACTIONS |
| /transactions/:id                                        | GET   |                      READ DETAIL TRANSACTIONS |
| /transactions/history/:id                                | GET   |                     READ HISTORY TRANSACTIONS |
| /transactions/ticket/:id                                 | GET   |                      READ TICKET TRANSACTIONS |

