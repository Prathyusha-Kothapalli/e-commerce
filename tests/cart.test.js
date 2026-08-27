/**
 * Unit Tests: Shopping Cart Module
 */

const assert = require('assert');
const { Storage } = require('../js/storage.js');
const { Products } = require('../js/products.js');
const { Cart } = require('../js/cart.js');

function runCartTests() {
  console.log('--- Testing Cart Module ---');

  localStorage.clear();
  Storage.initProducts();

  // Test 1: Add Item to Cart
  const firstProd = Products.getAll()[0];
  const addRes = Cart.addItem(firstProd.id, 'M', 2);
  assert.strictEqual(addRes.success, true, 'addItem should return success');
  assert.strictEqual(Cart.getCount(), 2, 'Cart count should equal 2');
  console.log('✓ Test 1 Passed: Adding item to cart updates quantity');

  // Test 2: Add same item with different size creates separate entry
  Cart.addItem(firstProd.id, 'L', 1);
  const items = Cart.getItems();
  assert.strictEqual(items.length, 2, 'Different sizes of same product should be separate line items');
  assert.strictEqual(Cart.getCount(), 3, 'Total item count should equal 3');
  console.log('✓ Test 2 Passed: Size selector distinguishes cart line items');

  // Test 3: Update Quantity
  Cart.updateQuantity(firstProd.id, 'M', 5);
  const updatedItem = Cart.getItems().find(i => i.productId === firstProd.id && i.size === 'M');
  assert.strictEqual(updatedItem.quantity, 5, 'Quantity should be updated to 5');
  console.log('✓ Test 3 Passed: Updating cart item quantity works');

  // Test 4: Remove Item from Cart
  Cart.removeItem(firstProd.id, 'L');
  const itemsAfterRemove = Cart.getItems();
  assert.strictEqual(itemsAfterRemove.length, 1, 'Removed size L item should be deleted');
  console.log('✓ Test 4 Passed: Item removal works');

  // Test 5: Calculate Totals & Subtotal
  const totals = Cart.getTotals();
  const expectedSubtotal = Number((firstProd.price * 5).toFixed(2));
  assert.strictEqual(totals.subtotal, expectedSubtotal, 'Subtotal should equal price * qty');
  assert.strictEqual(totals.tax, Number((expectedSubtotal * 0.05).toFixed(2)), 'Tax should equal 5% of subtotal');
  console.log('✓ Test 5 Passed: Cart totals and tax formulas are accurate');

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runCartTests };
}
