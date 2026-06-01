import Link from "next/link";
import services from "../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">CA</div>
              <span className="footer-logo-name">ClickAutomate</span>
            </Link>
            <p className="footer-desc">
              The complete digital agency for service businesses. Web, SEO, payments, ads, and AI — all in one team.
            </p>
            <Link href="/contact" className="footer-start-btn">
              Start free →
            </Link>
          </div>
          <div>
            <p className="footer-col-title">Products</p>
            <div className="footer-col-links">
              {services.map((s) => (
                <Link key={s.slug} href={`/products/${s.slug}`}>{s.title}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-col-title">Company</p>
            <div className="footer-col-links">
              <Link href="/">Home</Link>
              <Link href="/accomplishments">Accomplishments</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="footer-col-title">Legal</p>
            <div className="footer-col-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ClickAutomate. All rights reserved.</p>
          <span>clickautomate2@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}