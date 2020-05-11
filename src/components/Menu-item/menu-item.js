import React from "react";
import { withRouter} from 'react-router-dom';
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}>    
    {/* {{ }}  reason the first pair of bracket is for you to write JS expression in JSX code 
        the second pair of bracket is JS object*/}
       {console.log(history)}
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
