import React from "react";
import "../../css/boxloader.css";

const BoxLoader = () => {
    return (
        <div className="fixed grid justify-center items-center  h-full w-full top-0 bg-white z-999">
            <div className="loader"></div>
        </div>
    );
};

export default BoxLoader;
