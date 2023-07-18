import Section1Card from "./Section1Card";
import card1Img from "../../assets/section1/card1.png";
import card2Img from "../../assets/section1/card2.png";
import card3Img from "../../assets/section1/card3.png";
import "./Section1.css";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1-header-text">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="section1-cards container">
        <Section1Card title={"Dining"} img={card1Img} />
        <Section1Card title={"Living"} img={card2Img} />
        <Section1Card title={"Bedroom"} img={card3Img} />
      </div>
    </section>
  );
}
