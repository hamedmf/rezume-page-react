import React from "react";

const Email = ({ mail }) => {
  return <a href={`mailto:${mail}`}> {mail}</a>;
};

const data = [
  [
    { tag: "span", className: "title", text: "Age",id:1000 },
    { tag: "span", className: "value", text: 29,id:1001 },
  ],
  [
    { tag: "span", className: "title", text: "Residence",id:1002 },
    { tag: "span", className: "value", text: "USA" ,id:1003},
  ],
  [
    { tag: "span", className: "title", text: "Address",id:1004 },
    { tag: "span", className: "value", text: "Los Angeles, USA" ,id:1005},
  ],
  [
    { tag: "span", className: "title", text: "e-mail",id:1006 },
    {tag: "span",className: "value",text: <Email mail="majdabadi@gmail.com"/>  ,id:1007},
  ],
  [
    { tag: "span", className: "title", text: "e-Phone",id:1008 },
    { tag: "span", className: "value", text: "+0123 123 456 789",id:1009 },
  ],
  [
    { tag: "span", className: "title", text: "Freelance",  id:1010},
    { tag: "span", className: "value available", text: "Available",id:1011  },
  ],
];

export default function Information() {
  return (
    <div className="col-sm-6 col-md-6 col-lg-6">
      <ul className="info-list">
        {data.map((v,i) => {
            return(
          <li key={i*2000}>
            {v.map(({ tag, className, text,id } ) => {
              return (React.createElement(tag, { className, children:text, key:id }))
            })}
          </li>

            )
        })}
      </ul>
    </div>
  );
}
