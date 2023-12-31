import "./Section1.css";
interface s1card {
  title: string;
  img: string;
}
export default function Section1Card({ title, img }: s1card) {
  return (
    <div className="section1-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
  );
}
