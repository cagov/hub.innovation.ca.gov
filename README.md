# ODI Innovation Hub README  

## About the ODI Innovation Hub

### Status
This project is currently in early beta status. It’s used in production on a few sites while we learn and continuously improve.

## Development instructions

This project is a collection of components. This means the individual widgets are easy to iterate on in isolation, upgrade individually, or exclude from a project.

To run this project locally, checkout this repo and run these commands:
- `npm install`
- `npm run dev`

This will start up a local server running the site you see at <a href="https://designsystem.webstandards.ca.gov">designsystem.webstandards.ca.gov</a>.

### End to end testing

Playwright is used to run end to end and accessibility tests against local site urls using axe.

This set of tests is configured to be run against any open PR in our git actions: <a href="tree/main/.github/workflows/validate.yml">validate.yml</a>.

They can be run locally with:

```
npm run test:site
```

If you run into test failures due to an axe detected accessibility violation the offending node will be part of the test failure output. You can get more information on this type of failure by using the axe chrome plugin and letting it evaluate the page locally during development.

The playwright test setup uses `http-server' instead of 11ty because axe-playwright flags the browser-sync element that is injected into 11ty's default local serve mode as an accessibility violation for not being included in a landmark element. 

### Unit tests

Each component contains its own unit tests. The tests for all components are run in sequence when any commit is made in this repo via a husky pre-commit hook. When a package is published its own unit tests are run via an npm prepublish hook configured in the component's package.json

You can run any components tests individually during development with the ```npm test``` command inside its directory.

These component unit tests were created following <a href="https://open-wc.org/">Open Web Components</a> recommendations.

### Directory structure

The site content is in ```/docs```
- ```/docs/pages```: markdown for additional pages 
- ```/docs/site```: templates for site layouts
- ```/docs/src/css/sass/index.scss```: site CSS dependencies
- ```/docs/src/js/index.js```: site JS dependencies
