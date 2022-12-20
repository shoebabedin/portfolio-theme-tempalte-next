import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Client = () => {
  const [client, setClient] = useState({});

  useEffect(() => {
    fetch("/assets/Data/client.json")
      .then((res) => res.json())
      .then((differnet) => setClient(differnet));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="trusted_client">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Trusted Clients</h5>
              <h2>Happy People</h2>

              <Slider {...settings} className="trusted_client_slider">
                {client.length > 0 &&
                  client?.map((item) => (
                    <div key={item.id} className="slider_item">
                      <Image
                        className="img-fluid"
                        src={`/assets/images/trusted-client/${item.img}.webp`}
                        alt=""
                        width={197}
                        height={47}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
