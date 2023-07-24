import { useState } from "react";
import "./Section3Context.css";
import { Section3API } from "../../../API/Section3API";
import arrowRight from "../../../assets/icons/yellow-arrow-right.png";

export default function Section3Rightisde() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const filterImage = () => {
    return (
      <>
        <img src={Section3API[currentImage].image} alt="" />
        {currentImage !== Section3API.length - 1 ? (
          <img src={Section3API[currentImage + 1].image} alt="" />
        ) : null}
      </>
    );
  };
  const nextImage = () => {
    setCurrentImage(
      currentImage === Section3API.length - 1 ? 0 : currentImage + 1
    );
  };

  return (
    <div className="s3-component section3-rightside">
      <div className="images">{filterImage()}</div>
      <div className="dots">
        {Section3API.map((e) => (
          <div
            className={`dot-main ${currentImage === e.id ? "active" : ""}`}
            onClick={() => {
              setCurrentImage(e.id);
            }}
          >
            <div className="dot"></div>
          </div>
        ))}
        <div className="arrow-right" onClick={nextImage}>
          <img src={arrowRight} alt="" />
        </div>
      </div>
    </div>
  );
}
