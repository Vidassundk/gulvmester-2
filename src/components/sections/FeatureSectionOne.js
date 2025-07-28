import featureImg1 from "@/assets/img/feature/1.png";
import featureImg2 from "@/assets/img/feature/2.png";
import featureImg3 from "@/assets/img/feature/3.png";

export default function FeatureSectionOne() {
  return (
    <div className="feature-area section-padding pb-0">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-feature-item">
              <div className="feature-icon">
                <img src={featureImg1.src} alt="" />
              </div>
              <div className="feature-content">
                <h5>Years Experiences</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-feature-item">
              <div className="feature-icon">
                <img src={featureImg2.src} alt="" />
              </div>
              <div className="feature-content">
                <h5>Premium Woods</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-feature-item">
              <div className="feature-icon">
                <img src={featureImg3.src} alt="" />
              </div>
              <div className="feature-content">
                <h5>Modern Equipment</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
