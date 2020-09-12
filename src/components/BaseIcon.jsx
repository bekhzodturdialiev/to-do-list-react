import React from "react";

function BaseIcon(props) {
    return(
        <svg height={props.height} width={props.width}>
            <use xlinkHref={props.path} />
        </svg>
    );
}

export default BaseIcon;