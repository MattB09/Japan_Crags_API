This was created during my time as a student at Code Chrysalis.

This project is an API for rock climbing crags throughout Japan. It was built using a Postgres database, Knex query builder, GraphQL, Apollo server, and React with Apollo client for the front-end. 

## How to use this repo
1. clone the repo
2. run npm install
3. create your postgres database using psql
4. create an .env file and set the env variables specified in knexfile.js in your .env file
5. run knex migrations using the knex cli with 'knex migration:latest'
6. run knex seed files to seed the database with 'knex seed:run'
7. start up the backend server with 'npm run dev'
8. start up the front end server by cd-ing into the client/client folder of the repo and then using 'yarn start'

## GraphiQL Playground & API documentation
After starting the backend server you can navigate to localhost:4000/graphql to use the GraphiQL playground.
On the right hand side of the GraphiQL playground you can access the detailed documentation. 

## Upcoming features
* CRUD functionality from front-end interface
    1. for crags
    2. for prefectures
    3. for styles

