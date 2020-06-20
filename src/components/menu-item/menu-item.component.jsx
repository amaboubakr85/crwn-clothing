import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size}) => {
    const style = {
        background: `url("${imageUrl}")`
    }
    const imageSize = size ? size : '';
    return (
        <div className={`${imageSize}  menu-item`}>
            <div className="background-image" style={style}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default MenuItem;