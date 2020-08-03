import React from "react";
// withRouter bring the router and link history for routing components
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";
// match and history belong to withRouter from react-router-dom
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  console.log(history);
  //console.log(match);
  const style = {
    background: `url("${imageUrl}")`,
  };
  const imageSize = size ? size : "";
  return (
    <div
      className={`${imageSize}  menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="background-image" style={style}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
