import React from "react";

export default function Profile({name , job , major}) {
  return (
    <div className="title-block">
      <h1>{name}</h1>
      <div className="owl-carousel text-rotation">
        <div className="item">
          <div className="sp-subtitle">{job}</div>
        </div>
        <div className="item">
          <div className="sp-subtitle">{major}</div>
        </div>
      </div>
    </div>
  );
}
