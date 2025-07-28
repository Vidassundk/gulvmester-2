import Link from "next/link";
import bgImageDefault from "@/assets/img/bread-bg.jpg";
export default function Breadcrumb({ title, menus, bgImage }) {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage || bgImageDefault.src})`,
  };

  return (
    <div className="breadcrumb-area bread-bg" style={backgroundStyle}>
      <div className="overlay-3"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="breadcrumb-title">
              <h1>{title}</h1>
            </div>
            <div className="breadcrumb-nav mt-2">
              {menus.length > 0 && (
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mb-0">
                    {menus.map((menu, index) => (
                      <li
                        key={index}
                        className={`breadcrumb-item text-white ${
                          index === menus.length - 1 ? "active" : ""
                        }`}
                        aria-current={
                          index === menus.length - 1 ? "page" : undefined
                        }
                      ></li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
            <div className="breadcrumb-icon">
              <i className="las la-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
