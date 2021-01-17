This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

Configure environment

Write a file `.env` in the projects root directory.

```bash
YELP_API_KEY=[Yelp API key]
REACT_APP_GOOGLE_MAPS_API_KEY=[Google Map API]
```

Install dependencies

```shell
$ yarn install
```

Start the server and client

```shell
$ yarn server
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn server`

Runs the node server for development.<br />
It will run on http://localhost:5000/<br />

Open [http://localhost:5000/-/ping](http://localhost:5000/-/ping) to check if running in the browser.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Development Note

This note reflects on the coding process taken to complete the exercise. You are not required to read this development note in order to review the code, however it will take you through the process.

### Reorganise component

First, it was necessary to reorganise the code base, as all code structure was embedded in one `Main` component. Therefore I split it into separate components improving their reusability . The code is nested in a `MainPage` in case the application grows and a routing system needs to be implemented.

### Filter categories

One of the key points of this exercise was to choose a proper UI to filter a restaurant list by categories. With this in mind, I chose the Select component from Ant Design for 3 main reasons:

- It has a search bar. At the moment, it is not relevant but if the application grows and all Yelp categories are implemented, it will be a better experience for the user.
- It allows multiple selection. This is in case a future feature enables filtering on multiple categories.
- It has a light UI which integrates in a seamless way to the actual design.

### Fetch data

I reorganised data fetching into the custom hook `useFetchRestaurants`. This way restaurant’s data can be fetched from any component in the app. This hook also persists data in session storage to minimise API calls. Currently the session storage is used to prevent issues if data structure is updated. Local storage can be used too but a solution to clear it in case of data update needs to be implemented.

### State management

For the moment, the application domain model is not big enough to use a state manager. States are handled directly in the `MainPage` component. As a result, it will be useful to use a state manager, in case the application grows and the data updates in different components.

## Questions

If you have any question about this test don't hesitate to contact me directly: artium.wasse@gmail.com
