import "./Header.css";
import Navbar from "./Navbar/Navbar";
export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-content">
        <div className="header-box">
          <div className="box-content">
            <p className="p-bold">New Arrival</p>
            <h1>Discover Our New Collection</h1>
            <p className="p-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </header>
  );
}
