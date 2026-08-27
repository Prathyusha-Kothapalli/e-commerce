/**
 * Unit Tests: Authentication Module
 */

const assert = require('assert');
const { Storage } = require('../js/storage.js');
const { Auth } = require('../js/auth.js');

function runAuthTests() {
  console.log('--- Testing Auth Module ---');

  localStorage.clear();
  Storage.initProducts();

  // Test 1: User Registration
  const regResult = Auth.register('Sophia Laurent', 'sophia@example.com', 'secret123');
  assert.strictEqual(regResult.success, true, 'Registration with valid data should succeed');
  assert.strictEqual(Auth.isAuthenticated(), true, 'Newly registered user should be automatically logged in');
  console.log('✓ Test 1 Passed: User registration and automatic session login work');

  // Test 2: Duplicate Email Rejection
  const dupResult = Auth.register('Sophia Two', 'sophia@example.com', 'secret456');
  assert.strictEqual(dupResult.success, false, 'Registration with existing email should fail');
  console.log('✓ Test 2 Passed: Duplicate email registration is properly rejected');

  // Test 3: Logout
  Auth.logout();
  assert.strictEqual(Auth.isAuthenticated(), false, 'logout should clear current user session');
  assert.strictEqual(Auth.getCurrentUser(), null, 'getCurrentUser should return null after logout');
  console.log('✓ Test 3 Passed: User logout clears session');

  // Test 4: Successful Login
  const loginResult = Auth.login('sophia@example.com', 'secret123');
  assert.strictEqual(loginResult.success, true, 'Login with valid credentials should succeed');
  assert.strictEqual(Auth.getCurrentUser().name, 'Sophia Laurent', 'LoggedIn user name should match');
  console.log('✓ Test 4 Passed: Login with correct credentials succeeds');

  // Test 5: Invalid Password Login Rejection
  Auth.logout();
  const badLogin = Auth.login('sophia@example.com', 'wrongpassword');
  assert.strictEqual(badLogin.success, false, 'Login with incorrect password should fail');
  assert.strictEqual(Auth.isAuthenticated(), false, 'Failed login should not set session');
  console.log('✓ Test 5 Passed: Invalid password login is rejected');

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runAuthTests };
}
