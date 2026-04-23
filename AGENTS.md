# B2B Mini-App Example Lab Project

This is an example developer project demonstrating a decoupled "mini-app" approach to the BigCommerce B2B Buyer Portal. The Buyer Portal is a React app enabling B2B functionality on BigCommerce storefronts. This example approach uses a separate React app to hook into the available Buyer Portal utilities in the browser and make storefront UI enhancements based on B2B data without customizing the Buyer Portal code.

## Lab Steps and Commit History

The commit history of the repository is important and represents the steps of the developer labs. Each commit starting with the `start` tag demonstrates the code changes in a lab step.

## Framework Install Command

The base framework is Vite with the `react-ts` template. Use `npm create`:

```
npm create vite@<version> vite-project-dir -- --template react-ts --no-interactive
```

It is not crucial for the user to specify a version for a re-install of the base project. If no version is given, use `vite@latest` in the CLI command.

After re-installing the framework, use `npm install` to install dependencies.

## Rebuilding Lab History

After finishing rebuilding lab commit history, do not do a test build. Review and testing will be a separate task.
