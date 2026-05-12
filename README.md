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

The following command uses `degit` to scaffold your local project from `start`:

```shell
npm install -g degit
degit https://github.com/bigcommerce-edu/lab-b2b-mini-app.git#start <project-directory>
```

### Lab 1: Wait for B2B Utils

* [Step 1: Use React hook to wait for b2b.utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/hook-pre...hook-post?diff=split)

### Lab 2: Header Links

* [Step 1: Render `HeaderLinks` with DOM utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/links-01-pre...links-01-post?diff=split)
* [Step 2: Basic `HeaderLinks` implementation](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/links-02-pre...links-02-post?diff=split)
* [Step 3: Check user role](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/links-03-pre...links-03-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/links-pre...links-post?diff=split)

### Lab 3: Previously Ordered PDP Notification

* [Step 1: Render `PreviouslyOrdered` with DOM utils](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-order-01-pre...prev-order-01-post?diff=split)
* [Step 2: Basic `PreviouslyOrdered` implementation](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-order-02-pre...prev-order-02-post?diff=split)
* [Step 3: GraphQL query for ordered products](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-order-03-pre...prev-order-03-post?diff=split)
* [Step 4: Authenticate with user B2B token](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-order-04-pre...prev-order-04-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-b2b-mini-app/compare/prev-order-pre...prev-order-post?diff=split)
