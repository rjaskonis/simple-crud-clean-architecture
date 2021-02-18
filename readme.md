# Simple CRUD Clean Architecture

This project is intended to be a model for developing CRUD solutions with _Typescript_ following Clean Architecture principles
#
## Technologies
* [Node.JS](https://nodejs.org/)
* [React.JS](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Sass](https://sass-lang.com/)
* [Sequelize](https://sequelize.org/)
#
## Getting started
1. Install the latest Node.JS LTS / NPM verson
2. Navigate to project folder
3. Run `npm install`
4. Edit `.env` file to set your preffered port numbers for the UI (web) server & API server
5. Run `npm run dev` for development OR run `npm run build` then `npm run start` for simple run
6. Access the http://`127.0.0.1`:`3333` for development OR http://`127.0.0.1`:`3080` for simple run
#
## Server configuration
In order to easily change the Web UI development server port number, the API server port number or the encryption key, edit the enviroment variables in `.env` file.
# 
## Database settings
Once the database is created, you can set the database connection parameters such as _hostname_, _username_, _password_, _database or schema name_ or the chosen [sequelize](https://sequelize.org/v5/manual/dialects.html) dialect in `src/infrastructure/database/settings.ts` file.

## Database structure
An example code for building the database structure is in `src/infrastructure/instances/postgres/build.ts` file. In order to execute this code to create the database structure (considering database settings defined) you can run `npm run dev:database`.
#