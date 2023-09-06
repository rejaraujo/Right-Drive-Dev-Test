# FrontEnd React Crypto App

Welcome to the React Crypto App! This project was created using `Create React App`, incorporating the power of `Redux` and the convenience of `Redux Toolkit`. The user interface is enhanced with the `Material UI library`.

## GitHub Actions Status

![Node.js badge](https://github.com/rejaraujo/Right-Drive-Dev-Test/actions/workflows/node.js.yml/badge.svg)

![Delopy badge](https://github.com/rejaraujo/Right-Drive-Dev-Test/actions/workflows/preview.yaml/badge.svg)

![Delopy badge](https://github.com/rejaraujo/Right-Drive-Dev-Test/actions/workflows/production.yaml/badge.svg)

## Getting Started

To experience the app, you have two options:

a) Explore on Vercel (Production):

- Access the live app: [React Crypto App on Vercel](https://right-drive-dev-test-roan.vercel.app/)
- Inspect the GtiHub Repository: [Right-Drive-Dev-Test](https://github.com/rejaraujo/Right-Drive-Dev-Test)

b) To run the app locally, follow these steps:

- Install project depedencies: `npm install`
- Start the development server: `npm start`

This command launches the app in development mode and automatically opens it in your default web browser at [http://localhost:3000](http://localhost:3000).

## Testing

You can run tests using the following command: `npm test`

This command initiates the test runner in interactive watch mode, allowing you to continuously monitor and test your code.

## Building for Production

When you are ready to deploy the app, build it for production with: `npm run build`. This command bundles React in production mode and optimizes the build for optimal performance. The resulting production-ready files will be placed in the `build` folder.

## Ejecting

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you find yourself needing more control over the build tool and configuration, you can eject your project using the following command: `npm run eject`

## Screenshots

### Desktop:

`Card view`

![Desktop Design](/public/CardDesign.png)

`List view`

![Desktop Design](/public/ListDesign.png)

### Mobile:

`Card view`

![Mobile Design](/public/MobileCardDesign.png)

`List view`

![Mobile Design](/public/Mobile%20ListDesign.png)

## File Structure

```text

├── public
└── src
    ├── __test__
    ├── app
    ├── components
    ├── features
    │   ├── services
    │   └── slices
    │       ├── pagination
    │       └── switchView
    ├── mocks
    └── style
```

- `test`: Contains test suites written using RTL and Jest.
- `app`: Main application logic and setup.
- `components`: Reusable React component blocks.
- `features`: Organized feature-specific code.
- `mocks`: Mock data and utilities.
- `style`: Stylesheets for the project.
- `public`: Image assets and other publicly accessible files.
