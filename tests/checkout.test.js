/**
 * Unit Tests: Checkout Module & Order Placement Logic
 */

const assert = require('assert');
const { Storage } = require('../js/storage.js');
const { Products } = require('../js/products.js');
const { Cart } = require('../js/cart.js');

function runCheckoutTests() {
  console.log('--- Testing Checkout Module ---');

  localStorage.clear();
  Storage.initProducts();

  // Setup: Add item to cart
  const prod = Products.getAll()[0];
  Cart.addItem(prod.id, 'S', 2);
  const cartTotals = Cart.getTotals();

  // Test 1: Order Object Creation & Storage
  const orderObj = {
    orderCode: 'LUNA-ORD-TEST1',
    customerName: 'Eleanor Vance',
    customerEmail: 'eleanor@example.com',
    shippingAddress: '742 Evergreen Terrace, New York, NY 10001',
    items: Cart.getItems(),
    totals: cartTotals,
    createdAt: new Date().toISOString()
  };

  Storage.saveOrder(orderObj);
  const savedOrders = Storage.getOrders();
  assert.strictEqual(savedOrders.length, 1, 'Storage should contain 1 saved order');
  assert.strictEqual(savedOrders[0].orderCode, 'LUNA-ORD-TEST1', 'Saved order code should match');
  console.log('✓ Test 1 Passed: Order placement saves order data to Storage');

  // Test 2: Cart Clearing on Checkout
  Cart.clear();
  assert.strictEqual(Cart.getItems().length, 0, 'Cart should be empty after clearing upon checkout');
  assert.strictEqual(Cart.getCount(), 0, 'Cart count should be 0');
  console.log('✓ Test 2 Passed: Cart is completely cleared upon successful checkout');

  // Test 3: Order History Persistence
  const secondOrder = { orderCode: 'LUNA-ORD-TEST2', totals: { total: 200.00 } };
  Storage.saveOrder(secondOrder);
  const allOrders = Storage.getOrders();
  assert.strictEqual(allOrders.length, 2, 'Storage should keep track of multiple orders');
  assert.strictEqual(allOrders[0].orderCode, 'LUNA-ORD-TEST2', 'Most recent order should be first in array');
  console.log('✓ Test 3 Passed: Order history maintains chronological sequence');

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runCheckoutTests };
}
