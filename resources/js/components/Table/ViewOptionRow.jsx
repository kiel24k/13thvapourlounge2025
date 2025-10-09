import React from "react";

const ViewOptionRow = ({ data }) => {
    console.log(data);

    return (
        <>
            
            {data &&
                data.map((option) => (
                    <ul key={option.id}>
                        <li>
                            <span className="font-semibold text-gray-700 m-2">
                                {option.option_label}
                                <hr />
                            </span>
                        </li>
                    </ul>
                ))}
        </>
    );
};

export default ViewOptionRow;
