import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet, consecte, eget turpis. Proin a tortor consectetur eros faucibus blandit nec id sapien. ",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet, consecte, eget turpis. Proin a tortor consectetur eros faucibus blandit nec id sapien. ",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum dolor sit amet, consecte, eget turpis. Proin a tortor consectetur eros faucibus blandit nec id sapien. ",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum dolor sit amet, consecte, eget turpis. Proin a tortor consectetur eros faucibus blandit nec id sapien. ",
    },
  ];
  return (
    <div>
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {services.map((item, index) => {
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
    </div>
  );
}

export default Services;
