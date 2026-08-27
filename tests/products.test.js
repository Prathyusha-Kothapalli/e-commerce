/**
 * Unit Tests: Products Module
 */

const assert = require('assert');
const { Storage } = require('../js/storage.js');
const { Products } = require('../js/products.js');

function runProductsTests() {
  console.log('--- Testing Products Module ---');

  localStorage.clear();
  Storage.initProducts();

  // Test 1: GetAll returns full products catalog
  const all = Products.getAll();
  assert.strictEqual(all.length >= 8, true, 'Products.getAll should return initial catalog items');
  console.log('✓ Test 1 Passed: Products.getAll retrieves product catalog');

  // Test 2: Filter by Category
  const eveningDresses = Products.filter({ category: 'Evening' });
  assert.strictEqual(eveningDresses.every(p => p.category === 'Evening'), true, 'Category filter should only return Evening dresses');
  assert.strictEqual(eveningDresses.length > 0, true, 'Should find at least 1 Evening dress');
  console.log('✓ Test 2 Passed: Category filtering works');

  // Test 3: Filter by Size availability
  const xlDresses = Products.filter({ size: 'XL' });
  assert.strictEqual(xlDresses.every(p => p.sizes.includes('XL')), true, 'Size filter should only return dresses available in XL');
  console.log('✓ Test 3 Passed: Size availability filtering works');

  // Test 4: Search Keyword Filter
  const silkSearchResults = Products.filter({ search: 'silk' });
  assert.strictEqual(silkSearchResults.length > 0, true, 'Search for "silk" should return matching items');
  assert.strictEqual(silkSearchResults[0].name.toLowerCase().includes('silk') || silkSearchResults[0].description.toLowerCase().includes('silk'), true);
  console.log('✓ Test 4 Passed: Search keyword filter works');

  // Test 5: Sorting Price Low to High
  const sortedAsc = Products.filter({ sortBy: 'price-asc' });
  for (let i = 0; i < sortedAsc.length - 1; i++) {
    assert.strictEqual(sortedAsc[i].price <= sortedAsc[i + 1].price, true, 'Price should be sorted in ascending order');
  }
  console.log('✓ Test 5 Passed: Sorting by price low-to-high works');

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runProductsTests };
}
