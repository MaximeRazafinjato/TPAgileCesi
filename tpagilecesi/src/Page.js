import React from "react";

const Page = ({ inputList }) => {
  return (
    <div>
      <div className="fieldContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {inputList.map((item) => (
            <p className="test">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
