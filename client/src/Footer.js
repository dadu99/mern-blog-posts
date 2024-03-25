import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">
            Home
          </a>

          <a href={"/"}>Blog</a>
        </p>

        <p>Darius Baciu &copy; 2024</p>
      </div>
    </footer>
  );
}
