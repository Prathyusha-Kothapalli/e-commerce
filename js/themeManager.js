class ThemeManager {
    static init() {
        const theme = localStorage.getItem('theme') || 'light';
        this.applyTheme(theme);
    }
    static applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    static toggleTheme() {
        const current = localStorage.getItem('theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        this.applyTheme(next);
        return next;
    }
}
if (typeof module !== 'undefined') module.exports = ThemeManager;