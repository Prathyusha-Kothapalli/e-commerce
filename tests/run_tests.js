/**
 * Luna Dresses - CLI Test Suite Runner
 * Executes all 5 test files in Node environment using in-memory LocalStorage polyfill.
 */

// In-Memory LocalStorage Polyfill for Node environment
if (typeof localStorage === 'undefined' || !global.localStorage) {
  const store = {};
  global.localStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, val) => { store[key] = String(val); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); }
  };
  global.window = { localStorage: global.localStorage };
}

const { runStorageTests } = require('./storage.test.js');
const { runAuthTests } = require('./auth.test.js');
const { runProductsTests } = require('./products.test.js');
const { runCartTests } = require('./cart.test.js');
const { runCheckoutTests } = require('./checkout.test.js');

console.log('====================================================');
console.log('  LUNA DRESSES - EXECUTING FULL FRONTEND TEST SUITE ');
console.log('====================================================\n');

try {
  runStorageTests();
  console.log('');
  runAuthTests();
  console.log('');
  runProductsTests();
  console.log('');
  runCartTests();
  console.log('');
  runCheckoutTests();

  console.log('\n====================================================');
  console.log('  🎉 SUCCESS: ALL 5 TEST MODULES PASSED CLEANLY!   ');
  console.log('====================================================\n');
} catch (error) {
  console.error('\n❌ TEST SUITE FAILURE:', error.message);
  process.exit(1);
}
