import chooseUsImg from "@/assets/img/choose-us.jpg";

export default function ChooseUsSectionOne() {
  return (
    <div className="choose-us-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>Why Choose Us</h6>
              <div className="heading-animation">
                <h2>
                  Custom Wood Works <br /> for Your Custom Tastes
                </h2>
              </div>
            </div>
            <div className="choose-item-wrap mt-60">
              <div
                className="single-choose-item wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="choose-icon">
                  <i className="las la-adjust"></i>
                </div>
                <div className="choose-content">
                  <h5>Years Experiences</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
              <div
                className="single-choose-item wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="choose-icon">
                  <i className="las la-user-check"></i>
                </div>
                <div className="choose-content">
                  <h5>Professional Staffs</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
              <div
                className="single-choose-item wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="choose-icon">
                  <i className="las la-crop-alt"></i>
                </div>
                <div className="choose-content">
                  <h5>Affordable Price</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="choose-us-img-wrap wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img src={chooseUsImg.src} alt="" />
              <div className="info-founder">
                <i className="flaticon-carpenter-5"></i>
                <p>Since 1995</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
