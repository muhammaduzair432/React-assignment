

export default function Footer() {
  return (
    <footer>
      {/* Top Call to Action */}
      <div className="footer-cta">
        <p>Shop Now</p>
        <button>BUY PRODUCTS FOR $29</button>
      </div>

      {/* Bottom Footer */}
      <div className="footer-main">
        <div className="footer-column">
          <h4>Connix</h4>
          <p>Home</p>
          <p>Coverage</p>
          <p>Pricing</p>
          <p>Buy</p>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <p>Help Center</p>
          <p>Get Started</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Connix, Inc.</p>
      </div>
    </footer>
  );
}
