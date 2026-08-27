/**
 * Luna Dresses - Storage Engine & Data Store Module
 * Manages browser localStorage operations and catalog seed data.
 */

const STORAGE_KEYS = {
  PRODUCTS: 'luna_products',
  USERS: 'luna_users',
  CURRENT_USER: 'luna_currentUser',
  CART: 'luna_cart',
  ORDERS: 'luna_orders'
};

// Initial Seed Product Catalog
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Emerald Silk Evening Gown',
    category: 'Evening',
    price: 289.00,
    originalPrice: 350.00,
    rating: 4.9,
    reviewsCount: 38,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'images/dress-1.jpg',
    description: 'An ethereal floor-length gown crafted from pure mulberry silk. Features a one-shoulder pleated bodice and a fluid A-line silhouette perfect for black-tie galas.',
    fabric: '100% Silk Satin',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 2,
    name: 'Floral Chiffon Summer Midi',
    category: 'Summer',
    price: 135.00,
    originalPrice: 165.00,
    rating: 4.8,
    reviewsCount: 45,
    sizes: ['S', 'M', 'L'],
    image: 'images/dress-2.jpg',
    description: 'Lightweight tiered chiffon dress featuring delicate watercolor botanical prints, smocked waist, and flutter sleeves for sunny garden soirees.',
    fabric: 'Polyester Chiffon Blend',
    badge: 'New',
    inStock: true
  },
  {
    id: 3,
    name: 'Velvet Burgundy Cocktail Dress',
    category: 'Cocktail',
    price: 195.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 29,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'images/dress-3.jpg',
    description: 'Rich deep burgundy off-the-shoulder midi dress tailored in plush Italian stretch velvet with a structured corseted waist.',
    fabric: 'Stretch Velvet',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 4,
    name: 'Rose Gold Satin Slip Maxi',
    category: 'Maxi',
    price: 175.00,
    originalPrice: 210.00,
    rating: 4.7,
    reviewsCount: 52,
    sizes: ['S', 'M', 'L'],
    image: 'images/dress-4.jpg',
    description: 'Minimalist bias-cut slip dress featuring a fluid cowl neckline, delicate spaghetti straps, and a soft metallic rose gold sheen.',
    fabric: 'Liquid Satin',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 5,
    name: 'Blush Lace Wrap Dress',
    category: 'Casual',
    price: 128.00,
    originalPrice: 150.00,
    rating: 4.6,
    reviewsCount: 19,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'images/dress-5.jpg',
    description: 'Feminine wrap dress rendered in soft blush floral lace with scalloped trims and a flattering adjustable waist tie.',
    fabric: 'Cotton Lace & Rayon Lining',
    badge: 'Sale',
    inStock: true
  },
  {
    id: 6,
    name: 'Bohemian White Linen Sundress',
    category: 'Summer',
    price: 142.00,
    originalPrice: 170.00,
    rating: 4.8,
    reviewsCount: 31,
    sizes: ['S', 'M', 'L'],
    image: 'images/dress-6.jpg',
    description: 'Airy tiered white dress fashioned from crisp organic linen with intricate broderie anglaise embroidery details.',
    fabric: '100% Organic Linen',
    badge: 'New',
    inStock: true
  },
  {
    id: 7,
    name: 'Midnight Navy Pleated Gown',
    category: 'Evening',
    price: 310.00,
    originalPrice: 380.00,
    rating: 5.0,
    reviewsCount: 42,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'images/dress-7.jpg',
    description: 'Dramatic floor-length gown featuring fine knife pleating, semi-sheer bell sleeves, and a crystal-embellished waistband.',
    fabric: 'Georgette Chiffon',
    badge: 'Exclusive',
    inStock: true
  },
  {
    id: 8,
    name: 'Champagne Sequin Mini Dress',
    category: 'Cocktail',
    price: 215.00,
    originalPrice: 260.00,
    rating: 4.9,
    reviewsCount: 64,
    sizes: ['S', 'M', 'L'],
    image: 'images/dress-8.jpg',
    description: 'Dazzling long-sleeve mini dress covered in thousands of micro champagne sequins with a draped front detail.',
    fabric: 'Sequin Mesh with Silk Lining',
    badge: 'Party',
    inStock: true
  }
];

const Storage = {
  /**
   * Helper to retrieve parsed data from localStorage
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(`Error reading key "${key}" from localStorage:`, e);
      return defaultValue;
    }
  },

  /**
   * Helper to save stringified data to localStorage
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Error setting key "${key}" in localStorage:`, e);
      return false;
    }
  },

  /**
   * Removes a key from localStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Error removing key "${key}":`, e);
    }
  },

  /**
   * Initializes default seed catalog if not present
   */
  initProducts() {
    const existing = this.get(STORAGE_KEYS.PRODUCTS);
    if (!existing || !Array.isArray(existing) || existing.length === 0) {
      this.set(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
      return DEFAULT_PRODUCTS;
    }
    return existing;
  },

  /**
   * Product operations
   */
  getProducts() {
    return this.initProducts();
  },

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === Number(id)) || null;
  },

  /**
   * User operations
   */
  getUsers() {
    return this.get(STORAGE_KEYS.USERS, []);
  },

  saveUsers(users) {
    return this.set(STORAGE_KEYS.USERS, users);
  },

  getCurrentUser() {
    return this.get(STORAGE_KEYS.CURRENT_USER, null);
  },

  setCurrentUser(user) {
    if (user) {
      return this.set(STORAGE_KEYS.CURRENT_USER, user);
    } else {
      this.remove(STORAGE_KEYS.CURRENT_USER);
      return true;
    }
  },

  /**
   * Cart operations
   */
  getCart() {
    return this.get(STORAGE_KEYS.CART, []);
  },

  saveCart(cartItems) {
    return this.set(STORAGE_KEYS.CART, cartItems);
  },

  clearCart() {
    return this.set(STORAGE_KEYS.CART, []);
  },

  /**
   * Orders operations
   */
  getOrders() {
    return this.get(STORAGE_KEYS.ORDERS, []);
  },

  saveOrder(order) {
    const orders = this.getOrders();
    orders.unshift(order); // place newest first
    this.set(STORAGE_KEYS.ORDERS, orders);
    return order;
  }
};

// Auto-initialize products on script load if window environment exists
if (typeof window !== 'undefined') {
  Storage.initProducts();
}

// Export for Node/ES environment compatibility if testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Storage, STORAGE_KEYS, DEFAULT_PRODUCTS };
}
