# About
SPA(no full-page refresh when navigating between those routes) with 4 pages (routes): 
 1. [Landing page](http://localhost:3000/)
 1. [Show detail page](http://localhost:3000/shows/6771): a details page for the TV show "Powerpuff Girls" & "The Mandalorian"
 1. [Episode detail page](http://localhost:3000/episode/657308): an episode detail page with information about specific episodes.
 1. [404 page](http://localhost:3000/idontexist): in case route doesn't exist
 
## Tech Used 
**react**: to render UI

**redux**: latest version with RTK(Redux toolkit) for state management

**redux-saga**: middleware to manage application side effects.

**sass**: for styling the components, using mixins etc. (module based)

**material-ui**: to avoid reinventing the wheel

**prop-types**: to validate data 

**ES6**: extensively used.

**Jest, Enzyme**: for unit testing

**husky**: to add git hooks before a commit and push

## Static code quality

To maintain clean, well-structured, extendable I used

1. ES linter
1. Prettier
1. Sass linter

## Code quality checks

To avoid commiting undesirable code, I used husky for 2 git hooks:
1. pre-commit: it checks & automatically fix js lint errors.
1. pre-push: it checks & automatically fix js & style lint errors. In addition, it checks minimum test coverage threshold.

## Design
Show page and Episode page share common design. 

Design is responsive with two breakpoints defined in sass mixins and grid handling through materia ui.
 
## Goals
Show page should at least display the following information:
1. Show title
1. Show Description
1. Show cover image
1. Episode list: Every episode in the list should link to a details page for that specific episode

The episode detail page should contain at least: 
1. Episode title
1. Episode Summary
1. Episode cover image

## Deliverables
- [x] Check in all your source code into Git repository. 

- [x] Branching strategy used: feature based.

- [x] The end result has to be available in the master branch.

- [x] App should run from local web server (localhost). 

- [x] Documentation on running the app

- [x] Code comments in english provided wherever required.

## Getting started

To get the frontend running locally:

- Clone this repo
- run `yarn` to install all req'd dependencies
- use `yarn start` to run the project

## API Used
Data retrieved from the TV Maze API (http://www.tvmaze.com/api). 

API fails at times because of CORS issue to avoid this `https://cors-anywhere.herokuapp.com/` has been used.
There are still sample response available in case API doesn't respond.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

