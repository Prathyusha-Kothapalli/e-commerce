/**
 * Luna Dresses - Shopping Cart Module
 * Handles adding items with size choices, quantity updates, removal, and order total calculations.
 */

let StorageRefCart = typeof window !== 'undefined' ? window.Storage : null;
let ProductsRefCart = typeof window !== 'undefined' ? window.Products : null;

if (typeof require !== 'undefined') {
  if (!StorageRefCart) StorageRefCart = require('./storage.js').Storage;
  if (!ProductsRefCart) ProductsRefCart = require('./products.js').Products;
}

const Cart = {
  /**
   * Gets current cart item array from storage
   */
  getItems() {
    return StorageRefCart.getCart();
  },

  /**
   * Adds product with specific size & quantity to cart
   */
  addItem(productId, size = 'M', quantity = 1) {
    const product = ProductsRefCart.getById(productId);
    if (!product) {
      return { success: false, message: 'Product not found.' };
    }

    const selectedSize = (size || 'M').toUpperCase();
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    const cart = this.getItems();

    // Look for existing item with exact same ID and Size
    const existingIndex = cart.findIndex(item => item.productId === product.id && item.size === selectedSize);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        category: product.category,
        price: Number(product.price),
        image: product.image,
        size: selectedSize,
        quantity: qty
      });
    }

    StorageRefCart.saveCart(cart);
    return { 
      success: true, 
      message: `Added ${product.name} (Size: ${selectedSize}) to cart!`, 
      cartCount: this.getCount() 
    };
  },

  /**
   * Updates quantity of specific item in cart
   */
  updateQuantity(productId, size, newQuantity) {
    const qty = parseInt(newQuantity, 10);
    const cart = this.getItems();
    const index = cart.findIndex(item => item.productId === Number(productId) && item.size === size);

    if (index === -1) {
      return { success: false, message: 'Item not found in cart.' };
    }

    if (isNaN(qty) || qty <= 0) {
      return this.removeItem(productId, size);
    }

    cart[index].quantity = qty;
    StorageRefCart.saveCart(cart);
    return { success: true, message: 'Cart quantity updated.', totals: this.getTotals() };
  },

  /**
   * Removes specific item from cart by Product ID and Size
   */
  removeItem(productId, size) {
    let cart = this.getItems();
    const initialLength = cart.length;
    
    cart = cart.filter(item => !(item.productId === Number(productId) && item.size === size));

    if (cart.length === initialLength) {
      return { success: false, message: 'Item not found in cart.' };
    }

    StorageRefCart.saveCart(cart);
    return { success: true, message: 'Item removed from cart.', totals: this.getTotals(), cartCount: this.getCount() };
  },

  /**
   * Clears all items in cart
   */
  clear() {
    StorageRefCart.clearCart();
    return { success: true, message: 'Cart cleared.' };
  },

  /**
   * Calculates total count of items in cart
   */
  getCount() {
    const cart = this.getItems();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  /**
   * Computes financial breakdown (subtotal, tax, shipping, discount, total)
   */
  getTotals(discountPercentage = 0) {
    const cart = this.getItems();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const taxRate = 0.05; // 5% Estimated Tax
    const tax = subtotal * taxRate;
    
    // Free shipping for orders over $150, else $15 flat rate
    const shipping = (subtotal > 150 || subtotal === 0) ? 0.00 : 15.00;
    
    const discount = subtotal * (discountPercentage / 100);
    const grandTotal = Math.max(0, subtotal + tax + shipping - discount);

    return {
      subtotal: Number(subtotal.toFixed(2)),
      tax: Number(tax.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      discount: Number(discount.toFixed(2)),
      total: Number(grandTotal.toFixed(2)),
      itemCount: this.getCount()
    };
  }
};

// Global export for browser
if (typeof window !== 'undefined') {
  window.Cart = Cart;
}

// Module export for Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Cart };
}
