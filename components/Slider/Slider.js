import Image from "next/image";
import React, { useState, useEffect } from "react";

function Slider({ slides }) {
  const [size, setSize] = useState(null);

  if (!slides.length) return false;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div
        id="propertyslider"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides &&
            slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#propertyslider"
                className={index == 0 ? "active" : ""}
                data-bs-slide-to={index}
                aria-current="true"
                aria-label={"Slide " + index}
              ></button>
            ))}
        </div>
        <div className="carousel-inner">
          {slides &&
            slides.map((slide, index) => (
              <div key={slide.uid} className="carousel-item active">
                <Image
                  src={slide.url}
                  className="d-block w-100"
                  alt={slide.title}
                  width="900"
                  height={(size != null && size < 950) ? "250" : "400"}
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#propertyslider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#propertyslider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
