# Backend Cluezzy Ticket for Movie

## About
It's backend app for Cluezzy project that contain CRUD and also integrate to PostgreSQL.

## Built With
[![My Skills](https://skills.thijs.gg/icons?i=express,nodejs,postgres,supabase,postman&theme=light)](https://skills.thijs.gg)

## Contents
- About
- Packages
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

