import { useRouter } from "next/router";
import React from "react";
import Style from "./Banner.module.scss";

function Banner({ bannerdata }) {
  const { pathname } = useRouter();
  return (
    <>
      <section
        className={Style.homeBanner + " bg-img-cover"}
        style={{
          backgroundImage:
            "url(" + bannerdata.banner?.banner_background?.url + ")",
        }}
      >
        <div className="page-header-ui-content py-5 position-relative text-white">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8 col-lg-10 text-center">
                <h1 className="page-header-ui-title">
                  {bannerdata.banner?.heading}
                </h1>
                <p className="page-header-ui-text mb-5">
                  {bannerdata.banner?.description}
                </p>
              </div>
            </div>
            {pathname == "/" && (
              <div className="row gx-5 justify-content-center">
                <div className="col-xl-6 col-lg-8 text-center">
                  <form className="row row-cols-1 row-cols-md-auto g-3 align-items-center">
                    <div className="col flex-grow-1">
                      <label className="sr-only" htmlFor="inputEmail">
                        Enter and address, city, state, or ZIP
                      </label>
                      <input
                        className="form-control form-control-solid"
                        id="inputEmail"
                        type="text"
                        placeholder="Search properties near you..."
                      />
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-warning btn-teal fw-500 "
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
