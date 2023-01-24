import React from "react";

function Card(props) {
  const { heading, headingClass, body, footer  } = props;
  const children = props.children;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className={"card-title " + headingClass}>{heading}</h5>
        {body}
        {children}
        {footer}
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  heading: "",
  headingClass: "",
  body: "",
  footer: "",
};
