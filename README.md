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

## 🛠️ Dependencies

This application requires standard web runtime tools:
- **Node.js** (v18.0.0 or higher) - For local execution and automated test runner.
- **npm** (v9.0.0 or higher) - Package manager.
- **Python** (v3.10 or higher) - Optional alternative static server.
- **Docker** - Optional containerized execution.

Manifests & Lockfiles:
- `package.json` & `package-lock.json`
- `requirements.txt`

---

## 📦 Installation

To install dependencies and prepare the project locally:

```bash
# Clone the repository
git clone https://github.com/Prathyusha-Kothapalli/e-commerce.git
cd e-commerce

# Install Node.js dependencies
npm install

# Optional: Initialize Python virtual environment
python -m venv venv
```

---

## 🏗️ Build

To build and verify the production bundle:

```bash
# Execute production build script
npm run build

# Or build container image using Docker
docker build -t luna-dresses .
```

---

## 🚀 Run

To launch the local web server:

```bash
# Run using Node server
npm start

# Or run using Python static server
python -m http.server 8000

# Or run using Docker container
docker run -p 8000:8000 luna-dresses
```

Then open your browser and navigate to:
- **Web App**: [http://localhost:8000](http://localhost:8000)
- **Browser Test Suite**: [http://localhost:8000/tests/index.html](http://localhost:8000/tests/index.html)

---

## 💡 Usage

1. Open `http://localhost:8000/index.html` to browse featured dresses and boutique categories.
2. Click **Register** to create an account or **Sign In** using demo credentials (`demo@lunadresses.com` / `password123`).
3. Navigate to **Shop Collection** to filter by dress size (S, M, L, XL), category, max price slider, or keyword search.
4. Select dress size and click **Add to Cart**.
5. Go to **Cart** to adjust quantities, apply promo code `LUNA10`, and proceed to **Checkout**.
6. Fill in shipping information and place order to receive your confirmation code and clear the cart.

---

## 🧪 Testing

To execute the automated unit test suite headlessly via CLI:

```bash
node tests/run_tests.js
```
