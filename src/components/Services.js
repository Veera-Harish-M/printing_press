import React, { Component } from "react";
import { GoPackage } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import { GiAlliedStar } from "react-icons/gi";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiAlliedStar />,
        title: "REFUND POLICIES",
        info:
          "If you are not 100% satisfied, with your purchase ,we will refund you money.",
      },
      {
        icon: <GoPackage />,
        title: "PREMIUM PACKAGING",
        info: "We provide premium packaging services in a presentable form.",
      },
      {
        icon: <FaMedal />,
        title: "SUPERIOR QUALITY",
        info: "We provide high quality products to fulfil your satisfaction.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
