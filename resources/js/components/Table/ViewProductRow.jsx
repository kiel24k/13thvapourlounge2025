import React from "react";

const ViewProductRow = ({ data }) => {
  

    return (
        <div className="grid gap-5">
            <h1>{data.product_name}</h1>
            <h1>{data.product_category}</h1>
            <b>P{data.product_price}</b>
            <b>{JSON.parse(data.product_details).description_body}</b>
            {JSON.parse(data.product_details).description_content.map(
                (description) => (
                    <ul className="list-disc">
                        <li>{description}</li>
                    </ul>
                ),
            )}

            {JSON.parse(data.product_details).option.map((option) => (
                <div className="flex flex-wrap gap-3">
                    <b>{option.title}:</b>
                    <select name="" id="" className="border-1 rounded-lg p-1">
                        <option selected disabled>
                            view label
                        </option>
                        {option.labels.map((label) => (
                            <option value="" >{label}</option>
                        ))}
                    </select>
                </div>
            ))}
    
        </div>
    );
};

export default ViewProductRow;
