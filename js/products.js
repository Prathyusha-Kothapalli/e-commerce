/**
 * Luna Dresses - Products Module
 * Manages product query, filtering by size/category/price, searching, and sorting.
 */

let StorageRefProd = typeof window !== 'undefined' ? window.Storage : null;
if (typeof require !== 'undefined' && !StorageRefProd) {
  StorageRefProd = require('./storage.js').Storage;
}

const Products = {
  /**
   * Retrieves full list of dress products
   */
  getAll() {
    return StorageRefProd.getProducts();
  },

  /**
   * Retrieves single dress product details by ID
   */
  getById(id) {
    return StorageRefProd.getProductById(id);
  },

  /**
   * Filters and sorts products based on search criteria object:
   * { category, size, minPrice, maxPrice, search, sortBy }
   */
  filter(options = {}) {
    let result = this.getAll();

    // Category filter
    if (options.category && options.category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === options.category.toLowerCase());
    }

    // Size availability filter
    if (options.size && options.size !== 'all') {
      result = result.filter(p => Array.isArray(p.sizes) && p.sizes.includes(options.size.toUpperCase()));
    }

    // Maximum price filter
    if (options.maxPrice && !isNaN(options.maxPrice)) {
      result = result.filter(p => p.price <= Number(options.maxPrice));
    }

    // Minimum price filter
    if (options.minPrice && !isNaN(options.minPrice)) {
      result = result.filter(p => p.price >= Number(options.minPrice));
    }

    // Search query keyword filter (name & description)
    if (options.search && options.search.trim() !== '') {
      const q = options.search.trim().toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Sorting logic
    if (options.sortBy) {
      switch (options.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          result.sort((a, b) => b.id - a.id);
          break;
        default: // 'featured' or default
          result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
          break;
      }
    }

    return result;
  },

  /**
   * Gets distinct list of categories from products
   */
  getCategories() {
    const products = this.getAll();
    const categories = new Set(products.map(p => p.category));
    return ['all', ...Array.from(categories)];
  }
};

// Global export for browser
if (typeof window !== 'undefined') {
  window.Products = Products;
}

// Module export for Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Products };
}
