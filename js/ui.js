/**
 * Luna Dresses - UI Utilities & Component Renderer Module
 * Provides common DOM components, Header/Footer injection, Toasts, and Modals.
 */

const UI = {
  /**
   * Formats a numeric value into USD currency format ($XX.XX)
   */
  formatCurrency(amount) {
    const num = Number(amount) || 0;
    return '$' + num.toFixed(2);
  },

  /**
   * Shows a temporary floating toast notification
   */
  showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span>${message}</span>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  /**
   * Renders standard top navigation bar across pages
   */
  renderHeader(activePage = 'home') {
    const headerEl = document.getElementById('main-header');
    if (!headerEl) return;

    const cartCount = window.Cart ? window.Cart.getCount() : 0;
    const currentUser = window.Auth ? window.Auth.getCurrentUser() : null;

    headerEl.className = 'header';
    headerEl.innerHTML = `
      <div class="container nav-container">
        <a href="index.html" class="brand-logo">
          Luna <span>Dresses</span>
        </a>
        <ul class="nav-menu">
          <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="shop.html" class="nav-link ${activePage === 'shop' ? 'active' : ''}">Shop Collection</a></li>
          <li><a href="cart.html" class="nav-link ${activePage === 'cart' ? 'active' : ''}">Cart</a></li>
        </ul>
        <div class="nav-actions">
          <a href="cart.html" class="cart-icon-btn" title="View Shopping Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span id="cart-badge-count" class="cart-badge">${cartCount}</span>
          </a>
          
          ${currentUser ? `
            <div class="user-menu" style="display:flex; align-items:center; gap:0.75rem;">
              <span class="user-menu-btn">
                👤 ${currentUser.name.split(' ')[0]}
              </span>
              <button id="logout-btn" class="btn btn-sm btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem;">Logout</button>
            </div>
          ` : `
            <a href="login.html" class="btn btn-sm btn-outline">Sign In</a>
            <a href="register.html" class="btn btn-sm btn-primary">Register</a>
          `}
        </div>
      </div>
    `;

    // Attach Logout Event Handler if logged in
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.Auth.logout();
        UI.showToast('You have logged out.', 'info');
        setTimeout(() => {
          window.location.reload();
        }, 600);
      });
    }
  },

  /**
   * Updates cart counter badge in navigation
   */
  updateCartBadge() {
    const badge = document.getElementById('cart-badge-count');
    if (badge && window.Cart) {
      badge.textContent = window.Cart.getCount();
    }
  },

  /**
   * Renders standard footer across pages
   */
  renderFooter() {
    const footerEl = document.getElementById('main-footer');
    if (!footerEl) return;

    footerEl.className = 'footer';
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Luna Dresses</h3>
            <p>Curated luxury dresses for the modern woman. Designed for timeless elegance, unforgettable evenings, and effortless style.</p>
          </div>
          <div>
            <h4 class="footer-title">Explore</h4>
            <ul class="footer-links">
              <li><a href="shop.html?category=Evening">Evening Gowns</a></li>
              <li><a href="shop.html?category=Summer">Summer Collection</a></li>
              <li><a href="shop.html?category=Cocktail">Cocktail Dresses</a></li>
              <li><a href="shop.html?category=Maxi">Maxi Slips</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">FAQ & Support</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Boutique Guarantee</h4>
            <p style="font-size:0.88rem; color:#a0a0b5;">✨ Free Express Delivery on orders over $150.<br>✨ 30-Day Hassle-Free Exchange & Return Policy.</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Luna Dresses Boutique. All rights reserved. Frontend-Only Web Application.</p>
        </div>
      </div>
    `;
  },

  /**
   * Generates single Dress Card HTML string for product grids
   */
  createDressCardHTML(dress) {
    const defaultSize = (dress.sizes && dress.sizes.length > 0) ? dress.sizes[0] : 'M';

    return `
      <div class="dress-card" data-id="${dress.id}">
        <div class="dress-image-wrapper">
          ${dress.badge ? `<span class="dress-badge ${dress.badge.toLowerCase()}">${dress.badge}</span>` : ''}
          <a href="product.html?id=${dress.id}">
            <img src="${dress.image}" alt="${dress.name}" class="dress-image" loading="lazy">
          </a>
        </div>
        <div class="dress-card-body">
          <span class="dress-category">${dress.category}</span>
          <h3 class="dress-title">
            <a href="product.html?id=${dress.id}">${dress.name}</a>
          </h3>
          <div class="dress-price-row">
            <div>
              <span class="dress-price">${UI.formatCurrency(dress.price)}</span>
              ${dress.originalPrice ? `<span class="dress-original-price">${UI.formatCurrency(dress.originalPrice)}</span>` : ''}
            </div>
            <div class="rating-badge" style="font-size:0.85rem; color:#d4af37; font-weight:700;">
              ★ ${dress.rating}
            </div>
          </div>

          <div class="form-group" style="margin-bottom:0.75rem;">
            <label style="font-size:0.78rem; font-weight:600; color:var(--text-muted);">SELECT SIZE:</label>
            <div class="size-selector-mini" data-dress-id="${dress.id}">
              ${(dress.sizes || ['S','M','L','XL']).map((size, idx) => `
                <button type="button" class="size-pill ${size === defaultSize ? 'selected' : ''}" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          <button class="btn btn-primary btn-block add-to-cart-btn" data-id="${dress.id}">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    `;
  },

  /**
   * Attaches interactive size selection pill listener to product grids
   */
  bindCardEvents(containerElement) {
    if (!containerElement) return;

    // Size pill selection clicks
    containerElement.querySelectorAll('.size-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const parent = e.target.closest('.size-selector-mini');
        parent.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
        e.target.classList.add('selected');
      });
    });

    // Add to cart button clicks
    containerElement.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dressId = Number(btn.getAttribute('data-id'));
        const card = btn.closest('.dress-card');
        const selectedPill = card.querySelector('.size-pill.selected');
        const selectedSize = selectedPill ? selectedPill.getAttribute('data-size') : 'M';

        const result = window.Cart.addItem(dressId, selectedSize, 1);
        if (result.success) {
          UI.showToast(result.message, 'success');
          UI.updateCartBadge();
        } else {
          UI.showToast(result.message, 'danger');
        }
      });
    });
  }
};

// Global export
if (typeof window !== 'undefined') {
  window.UI = UI;
}
