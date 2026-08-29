class CouponEngine {
    constructor() {
        this.coupons = {
            'SAVE10': { type: 'PERCENT', value: 10 },
            'FLAT20': { type: 'FLAT', value: 20 }
        };
    }
    applyCoupon(code, totalAmount) {
        const coupon = this.coupons[code.toUpperCase()];
        if (!coupon) return { valid: false, discount: 0, finalTotal: totalAmount };
        let discount = coupon.type === 'PERCENT' ? (totalAmount * coupon.value) / 100 : coupon.value;
        discount = Math.min(discount, totalAmount);
        return { valid: true, discount, finalTotal: totalAmount - discount };
    }
}
if (typeof module !== 'undefined') module.exports = CouponEngine;