import "./Products.css";
import share from "../../assets/icons/share.png";
import whiteHeart from "../../assets/icons/white-heart.png";
import compare from "../../assets/icons/compare.png";

interface product {
  title: string;
  subText: string;
  newPrice: string;
  oldPrice: string | undefined;
  image: string;
}
export default function Product({
  title,
  subText,
  newPrice,
  oldPrice,
  image,
}: product) {
  return (
    <div className="product">
      <img className="product-image" src={image} alt="" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{subText}</p>
        <div className="prices">
          <h4>Rp {newPrice}</h4>
          {oldPrice ? <p>Rp {oldPrice}</p> : ""}
        </div>
      </div>

      <div className="after-hover">
        <button>Add to cart</button>
        <div className="other-fnc">
          <div className="fnc">
            <img src={share} alt="share" />
            <p>Share</p>
          </div>
          <div className="fnc">
            <img src={compare} alt="share" />
            <p>Compare</p>
          </div>
          <div className="fnc">
            <img src={whiteHeart} alt="share" />
            <p>Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
