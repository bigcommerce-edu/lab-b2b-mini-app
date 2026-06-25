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

The lab exercises and their step-by-step diffs are documented in [docs/TUTORIAL.md](docs/TUTORIAL.md).
