# agenda-app-backend
Simple Express backend for [Agenda-app](https://github.com/awysocka/agenda-app.git). 

The main goal of this project was to quickly serve test data via HTTP to the front-end app.

Useful links I based on during building the app: 
* [Building an api with express](https://egghead.io/courses/building-an-api-with-express-f1ea)
* [Express.js documentation](https://expressjs.com/en/api.html#app)
* [Node (Express) API: Authorization](https://auth0.com/docs/quickstart/backend/nodejs)

## technologies
* This app was created with [Express.js](https://expressjs.com/).
* Endpoints authorized with [Auth0](https://auth0.com/).
* Deployed on [Heroku](https://devcenter.heroku.com/).

## frontend
https://github.com/awysocka/agenda-app.git

## local setup
1. Clone this repository
    ```bash
    $ git clone https://github.com/awysocka/agenda-app-backend.git
    ```
2. Go into the repository
    ```bash
    $ cd agenda-app-backend
    ```
3. Instal dependencies
    ```bash
    $ npm install
    ```
4. Create account in [www.auth0.com](https://auth0.com/) or if you've already done it go to next step.
5. Create .env file in project root directory, paste the code below and set your Auth0 data.
    ```bash
    PORT=3003
    AUTH0_AUDIENCE='ENTER YOUT AUDIENCE'
    AUTH0_DOMAIN='ENTER YOUR DOMAIN'
    ```
6. Run a local development environment
    ```bash
    $ npm run dev
    ```

## status
- in progress
