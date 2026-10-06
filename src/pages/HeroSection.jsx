import "./heroSection.css";
import pasta from "../assets/pasta.png";
import burger from "../assets/burger.png";

function HeroSection() {
  return (
    <section className="hero border-bottom shadow-lg">
      <div className="container p-4">
        <div className="align-items-center d-flex gap-5">
          <div className="col-lg-6 col-sm-10">
            <p className="hero-tagline">Discover. Cook. Enjoy.</p>
            <h1 className="hero-title">
              Find the best recipes
              <br />
              for every moment
            </h1>
            <p className="hero-description">
              Explore delicious recipes, cook your favorite meals, and make
              every moment flavorful.
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block gap-2">
            <div className="d-flex justify-content-start">
              <img
                src={burger}
                loading="lazy"
                className="border border-danger rounded-5 shadow-lg"
                alt=""
                width="350px"
              />
            </div>
            <div className="d-flex justify-content-end">
              <img
                src={pasta}
                className="border border-danger rounded-5 shadow-lg"
                loading="lazy"
                alt=""
                width="350px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
