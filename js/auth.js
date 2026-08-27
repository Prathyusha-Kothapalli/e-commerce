/**
 * Luna Dresses - Authentication Module
 * Manages user registration, login, session persistence via Storage.
 */

// Import dependency in Node or fallback to window global in browser
let StorageRef = typeof window !== 'undefined' ? window.Storage : null;
if (typeof require !== 'undefined' && !StorageRef) {
  StorageRef = require('./storage.js').Storage;
}

const Auth = {
  /**
   * Registers a new user account
   */
  register(name, email, password) {
    if (!name || !email || !password) {
      return { success: false, message: 'All fields are required.' };
    }

    const cleanEmail = email.trim().toLowerCase();

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }

    const users = StorageRef.getUsers();
    const existingUser = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (existingUser) {
      return { success: false, message: 'An account with this email address already exists.' };
    }

    const newUser = {
      id: 'user_' + Date.now(),
      name: name.trim(),
      email: cleanEmail,
      password: password, // Note: Frontend simulation only
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    StorageRef.saveUsers(users);

    // Auto log in newly registered user
    const sessionUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    StorageRef.setCurrentUser(sessionUser);

    return { success: true, message: 'Registration successful! Welcome to Luna Dresses.', user: sessionUser };
  },

  /**
   * Authenticates user credentials
   */
  login(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Please enter both email address and password.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = StorageRef.getUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email address or password.' };
    }

    const sessionUser = { id: user.id, name: user.name, email: user.email };
    StorageRef.setCurrentUser(sessionUser);

    return { success: true, message: `Welcome back, ${user.name}!`, user: sessionUser };
  },

  /**
   * Logs out current user session
   */
  logout() {
    StorageRef.setCurrentUser(null);
    return { success: true, message: 'You have been logged out successfully.' };
  },

  /**
   * Retrieves active logged-in user
   */
  getCurrentUser() {
    return StorageRef.getCurrentUser();
  },

  /**
   * Checks if user is authenticated
   */
  isAuthenticated() {
    return !!StorageRef.getCurrentUser();
  }
};

// Global export for browser
if (typeof window !== 'undefined') {
  window.Auth = Auth;
}

// Module export for Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Auth };
}
