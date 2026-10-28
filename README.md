# GlobalMart

GlobalMart is a responsive React shopping experience for discovering products across tech, home, travel, and fashion categories.

**Live demo:** [global-mart-opal.vercel.app](https://global-mart-opal.vercel.app)

## Features

- Browse a curated product catalog
- Filter products by category
- Search products by name or description
- Filter products by maximum price
- View detailed product pages
- Select product options such as color and size when available
- Add products to a shopping cart
- Update quantities or remove items from the cart
- Persist cart contents in the browser with `localStorage`
- View subtotal, shipping, tax, and total calculations
- Complete a front-end demo checkout flow with card or wallet selection
- Responsive navigation and layout for mobile and desktop screens

> Checkout is for demonstration purposes only. This project does not process real payments, create orders, or connect to a backend service.

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- PostCSS and Autoprefixer

## Getting started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/adidotio/global-mart.git
cd global-mart
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Application routes

| Route | Description |
| --- | --- |
| `/` | Home page with featured products and categories |
| `/products` | Product catalog with search and filtering |
| `/products/:id` | Product detail page |
| `/cart` | Shopping cart and order summary |
| `/checkout` | Demo checkout flow |

## Project structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── OrderSummary.jsx
    │   └── ProductCard.jsx
    ├── context
    │   └── CartContext.jsx
    ├── data
    │   └── products.js
    └── pages
        ├── Cart.jsx
        ├── Checkout.jsx
        ├── Home.jsx
        ├── ProductDetail.jsx
        └── Products.jsx
```

## Cart persistence

Cart data is stored in the browser's `localStorage` under the key `gm-cart`. Clearing browser storage will remove the saved cart.

## Contributing

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes locally.
4. Open a pull request with a clear description of the change.

## License

No license is currently specified for this repository.
