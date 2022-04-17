# simple rest

### PLEASE COMPLETELY READ THESE INFORMATION FIRST!!

## Main Tech stacks

    * MySql as main database engine
    * NodeJS as server runner
    * Express as server framework
    * Sequelize as database ORM
    * Json Web Token aka JWT as authentication

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1.  Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
    Required version:
    ```
    "node": ">= 9.0.0"
    ```
2.  Install your dependencies

    ```
    npm install
    ```

3.  Configure things

    > Create .env file in root directory of the project

    Write this in `.env` file

    #### .env

    ```
        SERVER_DOMAIN=localhost
        SERVER_PORT=8000
        DEV_HOST=127.0.0.1
        DEV_USER={your_mysql_username}
        DEV_PASS={your_mysql_password}
        DEV_DATABASE=
    ```

4.  Migrate database using sequelize
    Run these commands in order

    ### If you have sequelize installed global

    ```
    sequelize db:create
    ```

    ```
    sequelize db:migrate
    ```

    ### If you have been not installing sequelize global

    ```
    node_modules/.bin/sequelize db:create
    ```

    ```
    node_modules/.bin/sequelize db:migrate
    ```

5.  OPTIONAL: You can run seeder to have dummy data in the table needed, for detailed information about the data like username password, etc. Look at src/database/seeders file. Just then run the command.

    ### If you have sequelize installed global

    ```
    sequelize db:seed:all
    ```

    ### If you have been not installing sequelize global

    ```
    node_modules/.bin/sequelize db:seed:all
    ```

    ### Alternative way, you can use bash seed.sh

6.  Start your app

    ```
    npm start
    ```

7.  Document api

    ```
    https://documenter.getpostman.com/view/9245591/Uyr5oeZu
    ```

## License

Copyright (c) 2022
