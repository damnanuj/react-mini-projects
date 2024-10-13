import React, { useState } from "react";
import { accordionData } from "./accordionData";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="accordionContainer">
      <h1>Accordion with ReactJs</h1>
      {accordionData.map((item, i) => (
        <div className="accordion" key={i}>
          <div
            className={`title ${selected === i ? "active" : ""}`}
            onClick={() => toggleAccordion(i)}
          >
            <h2>{item.title}</h2>
            <h2>{selected === i ? "-" : "+"}</h2>
          </div>

          <div className={`content ${selected === i ? "active" : ""}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
