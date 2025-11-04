# BigCommerce B2B Mini App

This project demonstrates a decoupled approach to interacting with the B2B Buyer Portal in a BigCommerce storefront.

This standalone React app is designed to hook into the Buyer Portal using the global b2b.utils functions, and to 
be injected in the storefront via a script rather than editing theme code directly.

This approach, mimicking how the Buyer Portal itself interacts with the storefront, provides a viable developer experience
for Stencil theme with Buyer Portal specific behavior, since the Buyer Portal is not compatible with the Stencil CLI
dev environment.

A standalone app like this is an option for small UI enhancements outside the Buyer Portal pages themselves, when
forking and customizing the Buyer Portal is not necessary.

## Labs

### Getting Started

Use the `start` Git tag to walk through code exercises step by step.

The following commnad uses `degit` to scaffold your local project from `start`:

```shell
npm install -g degit
degit https://github.com/bigcommerce-edu/lab-b2b-mini-app.git#start <project-directory>
```

### Lab 1: Wait for B2B Utils

* [Step 1: Use React hook to wait for b2b.utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/utils-hook-start...utils-hook-01?diff=split)

### Lab 2: Header Links

* [Step 1: Render `HeaderLinks` with DOM utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/header-links-start...header-links-01?diff=split)
* [Step 2: Basic `HeaderLinks` implementation](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/header-links-01...header-links-02?diff=split)
* [Step 3: Check user role](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/header-links-02...header-links-03?diff=split)

### Lab 3: Previously Ordered PDP Notification

* [Step 1: Render `PreviouslyOrdered` with DOM utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-ordered-start...prev-ordered-01?diff=split)
* [Step 2: Basic `PreviouslyOrdered` implementation](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-ordered-01...prev-ordered-02?diff=split)
* [Step 3: GraphQL query for ordered products](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-ordered-02...prev-ordered-03?diff=split)
* [Step 4: Authenticate with user B2B token](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-ordered-03...prev-ordered-04?diff=split)
