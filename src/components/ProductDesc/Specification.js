import React from "react";
import "./Specification.css";
import Display from "../../assets/display.svg";
import RAM from "../../assets/ram.svg";
import Battery from "../../assets/battery.svg";
import Backcamera from "../../assets/backcamera.svg";
import { useSelector } from "react-redux";

const Specification = () => {
  const { item: data, status } = useSelector((state) => state.singleproduct);
  
  return (
    <>
      <div className="AllServices">
        <div className="each-service">
          <div className="specs-img">
            <img width="100%" src={Display} alt="" />
          </div>

          <h3>{data.desc}</h3>
          <p>Display</p>
        </div>
        <div className="each-service">
          <div className="specs-img">
            <img width="100%" src={RAM} alt="" />
          </div>

          <h3>{data.ram}</h3>
          <p>RAM</p>
        </div>
        <div className="each-service">
          <div className="specs-img">
            <img width="100%" src={Battery} alt="" />
          </div>

          <h3>{data.battery}</h3>
          <p>Battery</p>
        </div>
        <div className="each-service">
          <div className="specs-img">
            <img width="100%" src={Backcamera} alt="" />
          </div>

          <h3>{data.camera}</h3>
          <p>Back Camera</p>
        </div>
      </div>
    </>
  );
};

export default Specification;
