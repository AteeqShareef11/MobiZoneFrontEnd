import React from "react";
import "./ReasonToBuy.css";
import Openparcel from "../../assets/open_parcel.svg";
import Bank from "../../assets/easy_instalment.svg"
import Price from "../../assets/price_match.svg"
import Trust from "../../assets/trusted.svg"




const reasonCardData = [
  {
    id: 1,
    image: Openparcel,
    title: "Open Parcel",
    desc: "(ISB - LHR - KHI)",
  },
  {
    id: 2,
    image: Bank,
    title: "Easy",
    desc: "Installments",
  },
  {
    id: 3,
    image: Price,
    title: "Price Match",
    desc: "Policy",
  },
  {
    id: 4,
    image: Trust,
    title: "Trusted By",
    desc: "YOU",
  },
];

const ReasonToBuy = () => {
  return (
    <>
      <h3 className="Reason-To-Buy">Reason To Buy </h3>
      <div className="card-row">


        {
            reasonCardData.map((item)=>(
                <div className="Reasoncard" key={item.id}>
              <div className="Reasoncard-info">
            <img className="reasonImg" width="30%" src={item.image} alt="" />

            <div className="reasonData">
              <h3>{item.title}</h3>
              <h3>{item.desc}</h3>
              <button>Know More</button>
            </div>
          </div>
        </div>
            ))
        }


      </div>
    </>
  );
};

export default ReasonToBuy;
