# Luna Dresses - Frontend-Only Women's Dresses E-Commerce Application

**Luna Dresses** is a premium, fully functional, frontend-only women's dresses e-commerce web application built with standard modern HTML5, CSS3, and Vanilla JavaScript.

---

## 🌟 Key Features

* **High-End Boutique Design**: Luxurious rose gold/burgundy aesthetic, custom Google typography (*Playfair Display* & *Plus Jakarta Sans*), micro-interactions, responsive grid layout, and AI-generated dress assets.
* **Frontend Only Architecture**: Zero external backend services, database, or API keys required. All data state (catalog, authentication, cart, orders) persists in browser `localStorage`.
* **User Authentication Flow**:
  * User Registration (`register.html`) with duplicate email checks and automatic session login.
  * User Sign In (`login.html`) with quick demo user pre-fill credentials option.
  * Session validation and dynamic header user profile dropdown.
* **Dresses Shop & Catalog (`shop.html`)**:
  * Responsive dress grid with size selector pills (S, M, L, XL), badges (*Bestseller*, *New*, *Sale*, *Exclusive*), and quick "Add to Cart".
  * Instant filter sidebar: Filter by Category (Evening Gowns, Summer Midis, Cocktail, Maxi Slips, Casual Wrap), Size availability, and Price range slider.
  * Instant search bar (searches name, fabric, and description) and sorting options (Price Low-High, Price High-Low, Highest Rated, New Arrivals).
* **Product Details (`product.html`)**:
  * Dynamic dress page rendering (`?id=X`), main image gallery, star ratings, fabric/care specifications, size options, quantity controls, "Add to Cart", "Buy Now", and related dress recommendations.
* **Shopping Cart (`cart.html`)**:
  * Complete item table displaying dress thumbnail, name, selected size, unit price, quantity modifier (`+`/`-`), item total, and remove item action.
  * Promo discount coupon simulation (e.g. `LUNA10` for 10% discount).
  * Order Summary computing Subtotal, Estimated Tax (5%), Shipping Fee (Free over $150), and Grand Total.
* **Checkout & Order Confirmation (`checkout.html`)**:
  * Shipping address & payment simulation form.
  * Form validation, order creation in `localStorage` under `luna_orders`, and **automatic clearing of the shopping cart**.
  * Order Confirmation Modal displaying unique order reference code, customer details, and estimated delivery date.
* **Automated Test Suite (`tests/`)**:
  * 5 comprehensive test files (`storage.test.js`, `auth.test.js`, `products.test.js`, `cart.test.js`, `checkout.test.js`).
  * Standalone interactive Browser Test Runner (`tests/index.html`).
  * Headless Node CLI Test Runner (`node tests/run_tests.js`).

---

## 📁 Project Folder Structure

```
e-commerce/
├── index.html              # Home Page
├── shop.html               # Dresses Shop Page with filters
├── product.html            # Product Details Page
├── cart.html               # Shopping Cart Page
├── checkout.html           # Checkout Page with Order Confirmation
├── login.html              # Login Page
├── register.html           # Registration Page
├── css/
│   ├── main.css            # Core Design Tokens, Typography & Layout
│   ├── components.css      # UI Components (Header, Badges, Buttons, Toasts, Cards)
│   └── pages.css           # Page-specific layout styles
├── js/
│   ├── storage.js          # LocalStorage data persistence layer & product seeds
│   ├── auth.js             # Registration & Authentication logic
│   ├── products.js         # Products filtering, search & sorting
│   ├── cart.js             # Shopping cart engine & pricing formulas
│   └── ui.js               # Dynamic Navbar/Footer injection & Toasts
├── images/
│   ├── hero-banner.jpg     # Luxury boutique hero banner
│   ├── dress-1.jpg         # Emerald Silk Evening Gown
│   ├── dress-2.jpg         # Floral Chiffon Summer Midi
│   ├── dress-3.jpg         # Velvet Burgundy Cocktail Dress
│   ├── dress-4.jpg         # Rose Gold Satin Slip Maxi
│   ├── dress-5.jpg         # Blush Lace Wrap Dress
│   ├── dress-6.jpg         # Bohemian White Linen Sundress
│   ├── dress-7.jpg         # Midnight Navy Pleated Gown
│   └── dress-8.jpg         # Champagne Sequin Mini Dress
├── tests/
│   ├── index.html          # Interactive Browser-based Test Runner UI
│   ├── run_tests.js        # Node.js CLI Test Runner
│   ├── storage.test.js     # Storage engine unit tests
│   ├── auth.test.js        # Authentication unit tests
│   ├── products.test.js    # Products query & filter unit tests
│   ├── cart.test.js        # Shopping cart unit tests
│   └── checkout.test.js    # Checkout & cart clearing unit tests
└── README.md               # Project documentation
```

---

## 🚀 How to Run the Application

### Method 1: Local HTTP Server (Recommended)
You can launch any static HTTP server. For example, using Python's built-in HTTP server:

```bash
# Start local server on port 8000
python -m http.server 8000
```
Then open your browser and navigate to:
* App: [http://localhost:8000](http://localhost:8000)
* Test Suite: [http://localhost:8000/tests/index.html](http://localhost:8000/tests/index.html)

### Method 2: Direct File Launch
Simply double-click `index.html` or open `index.html` directly in Google Chrome, Edge, Safari, or Firefox.

---

## 🧪 Running Automated Tests

### Interactive Browser Test Runner
1. Open `tests/index.html` in your browser.
2. Click **"Run All Frontend Tests"** to execute all 5 test suites with visual status reports.

### Command Line Interface (CLI)
To run tests headlessly via Node.js in the terminal:

```bash
node tests/run_tests.js
```

---

## 💡 Technical Notes & LocalStorage Keys

The application uses the following `localStorage` keys for complete offline state management:
* `luna_products`: Stores product catalog items.
* `luna_users`: Stores registered user user objects.
* `luna_currentUser`: Stores active user session details.
* `luna_cart`: Stores current shopping bag items with selected sizes and quantities.
* `luna_orders`: Stores historical completed orders.
"# e-commerce" 
