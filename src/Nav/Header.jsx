import React from "react";

const Header = () => {

  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://www.excelptp.com/wp-content/uploads/2023/05/full-stack-banner-img.jpg"

              className="d-block w-100 " style={{height:'560px'}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://digital-dividend.se/wp-content/uploads/2023/06/MEAN-Stack.png
"
              className="d-block w-100" style={{height:'560px'}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Second slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ameerpetitstorage.blob.core.windows.net/amitroot/Demos_Hero%5CIndia.png
"
              className="d-block w-100" style={{height:'560px'}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Third slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            
            aria-hidden="true"
          ></span>
          <span className="visually-hidden" >Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
