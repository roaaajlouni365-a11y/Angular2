# ElectroShop – Task 3

Angular hands-on lab for reactive state with Signals and component communication using `@Input()` and `@Output()`.

## Run the project

```bash
npm install
npm start
```

Open `http://localhost:4200/` in your browser.

## Features

- Product quantity managed with an Angular Signal.
- Product details passed from `App` to `ProductDetails` using `@Input()`.
- Selected product name and quantity sent back with `@Output()` and `EventEmitter`.
- Shopping cart displays product, unit price, quantity, and total price.
- Product details can be changed from the parent component to demonstrate reusability.
