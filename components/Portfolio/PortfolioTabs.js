import Image from "next/image";
import React from "react";


const PortfolioTabs = (props) => {
  const { setShow, data } = props;

  const handleShow = (id) => {
    setShow(true);
    // props.getData(id);
  };

  return (
    <>
      {data.length > 0 && data?.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 mb-3">
          <div className="img">
            <Image
              className="img-fluid"
              src={`/assets/images/portfolio/${item.img}.webp`}
              alt=""
              width={500}
              height={500}
            />
            <div className="overlay" onClick={() => handleShow(item)}>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
};

export default PortfolioTabs;
