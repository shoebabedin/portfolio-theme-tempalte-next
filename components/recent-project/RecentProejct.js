import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";

const RecentProejct = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item1.webp"
          alt="1"
          width={500}
          height={300}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item2.webp"
          alt="2"
          width={500}
          height={300}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item3.webp"
          alt="3"
          width={500}
          height={300}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item1.webp"
          alt="1"
          width={500}
          height={300}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item2.webp"
          alt="1"
          width={500}
          height={300}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Image
          src="https://shoebabedin.github.io/portfolio-theme-tempalte/assets/images/recent-project/item3.webp"
          alt="1"
          width={500}
          height={300}
        />
      )
    }
  ];



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
              <Carroussel
                cards={cards}
                height="500px"
                width="100%"
                margin="0 auto"
                showArrows={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProejct;
