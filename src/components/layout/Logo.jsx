import React from "react";

import logoImg from "../../assets/avinyaa-logo-new.png";

const Logo = ({ className }) => {
    return (
        <img
            src={logoImg}
            alt="Avinyaa Logo"
            className={className}
        />
    );
};

export default Logo;
