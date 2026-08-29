class ReviewSystem {
    constructor() {
        this.reviews = [];
    }
    addReview(productId, rating, comment) {
        const review = { productId, rating: Math.min(5, Math.max(1, rating)), comment, date: new Date().toISOString() };
        this.reviews.push(review);
        return review;
    }
    getAverageRating(productId) {
        const productReviews = this.reviews.filter(r => r.productId === productId);
        if (productReviews.length === 0) return 0;
        const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
        return (sum / productReviews.length).toFixed(1);
    }
}
if (typeof module !== 'undefined') module.exports = ReviewSystem;