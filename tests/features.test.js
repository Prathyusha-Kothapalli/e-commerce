const CouponEngine = require('../js/couponEngine');
const ReviewSystem = require('../js/reviewSystem');

describe('E-Commerce Feature Unit Tests', () => {
    test('CouponEngine applies percentage discount', () => {
        const engine = new CouponEngine();
        const res = engine.applyCoupon('SAVE10', 100);
        expect(res.valid).toBe(true);
        expect(res.discount).toBe(10);
        expect(res.finalTotal).toBe(90);
    });

    test('ReviewSystem calculates average rating correctly', () => {
        const sys = new ReviewSystem();
        sys.addReview('p1', 5, 'Great');
        sys.addReview('p1', 3, 'Average');
        expect(sys.getAverageRating('p1')).toBe('4.0');
    });
});