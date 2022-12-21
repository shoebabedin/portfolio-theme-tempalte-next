import Image from "next/image";
import React from "react";
import { Carousel } from "react-configurable-carousel";

const RecentProejct = () => {
  return (
    <>
      <section className="recent_project">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Recent Project</h5>
              <h2>Explore My Latest Project</h2>
            </div>
            <div className="col-12">
              <Carousel
                arrows={false}
                dotsNavigation={false}
                dotsNavigationInside={false}
                carouselStyle={"3d"}
              >
                <Image
                  src="/assets/images/recent-project/item1.webp"
                  alt=""
                  width={600}
                  height={450}
                  
                />
                <Image
                  src="/assets/images/recent-project/item2.webp"
                  alt=""
                  width={600}
                  height={450}
                />
                <Image
                  src="/assets/images/recent-project/item3.webp"
                  alt=""
                  width={600}
                  height={450}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProejct;
