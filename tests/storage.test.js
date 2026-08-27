/**
 * Unit Tests: Storage Engine Module
 */

const assert = require('assert');
const { Storage, STORAGE_KEYS, DEFAULT_PRODUCTS } = require('../js/storage.js');

function runStorageTests() {
  console.log('--- Testing Storage Module ---');
  
  // Clear test keys before testing
  localStorage.clear();

  // Test 1: initProducts populates DEFAULT_PRODUCTS when empty
  const products = Storage.initProducts();
  assert.strictEqual(Array.isArray(products), true, 'initProducts should return an array');
  assert.strictEqual(products.length, DEFAULT_PRODUCTS.length, 'initProducts should seed default products');
  console.log('✓ Test 1 Passed: Storage initProducts seeds default catalog');

  // Test 2: set and get operations
  const testData = { key: 'value', num: 42 };
  Storage.set('test_key', testData);
  const retrieved = Storage.get('test_key');
  assert.deepStrictEqual(retrieved, testData, 'Storage get should return parsed JSON identical to set value');
  console.log('✓ Test 2 Passed: Storage get/set serializes and deserializes objects correctly');

  // Test 3: get non-existent key returns default value
  const defaultVal = Storage.get('non_existent_key', { default: true });
  assert.deepStrictEqual(defaultVal, { default: true }, 'Storage get should return fallback defaultValue when key does not exist');
  console.log('✓ Test 3 Passed: Storage get fallback value works');

  // Test 4: getProductById
  const firstProd = DEFAULT_PRODUCTS[0];
  const foundProd = Storage.getProductById(firstProd.id);
  assert.strictEqual(foundProd.name, firstProd.name, 'getProductById should return matching product');
  console.log('✓ Test 4 Passed: Storage getProductById finds product by numerical ID');

  // Test 5: saveOrder and getOrders
  const sampleOrder = { orderCode: 'TEST-123', total: 150.00 };
  Storage.saveOrder(sampleOrder);
  const orders = Storage.getOrders();
  assert.strictEqual(orders.length, 1, 'getOrders should return saved orders');
  assert.strictEqual(orders[0].orderCode, 'TEST-123', 'Saved order should match');
  console.log('✓ Test 5 Passed: Storage saveOrder and getOrders function as expected');

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runStorageTests };
}
