import "./Section3.css";
import Section3Leftside from "./Section3Context/Section3Leftside";
import Section3Middleside from "./Section3Context/Section3Middleside";
import Section3Rightisde from "./Section3Context/Section3Rightisde";
export default function Section3() {
  return (
    <section className="section3">
      <div className="container">
        <div className="section3-main">
          <Section3Leftside />
          <Section3Middleside />
          <Section3Rightisde />
        </div>
      </div>
    </section>
  );
}
