<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Description

Anylist is a simple application built with NestJS, PostgreSQL and GraphQL.

## Installation

1. Clone the repository
2. Install dependencies with `yarn install`
3. Create a `.env` file in the root directory  copied from `.env.example`
4. Up the database with `docker compose up -d`
5. Run the migrations with `yarn typeorm migration:run`
6. Run the application with `yarn start:dev`
7. Open the GraphQL at `http://localhost:3000/graphql`
