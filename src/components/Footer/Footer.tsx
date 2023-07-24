import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="infos">
            <div className="info">
              <h4>Funiro.</h4>
              <p className="description">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className="info">
              <p className="title">Links</p>
              <p>Home</p>
              <p>Shop</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className="info">
              <p className="title">Help</p>
              <p>Payment Options</p>
              <p>Returns</p>
              <p>Privacy Policies</p>
            </div>
            <div className="info">
              <p className="title">Newsletter</p>
              <label>
                <input type="text" placeholder="Enter Your Email Address" />
                <input type="submit" value="SUBSCRIBE" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
