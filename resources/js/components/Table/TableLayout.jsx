import { Button, Checkbox } from "@mui/material";
import React from "react";

const TableLayout = ({ thead, children }) => {
    return (
        <div className="overflow-x-auto">
            <table className="border-gray-300 divide-y divide-gray-200 min-w-full">
                <thead>
                    <tr>
                        <th>
                            <Checkbox />
                        </th>
                        {thead.map((data, key) => (
                            <th
                                className="p-2 text-left font-semibold text-gray-700"
                                key={key}
                            >
                                <div className="flex capitalize">
                                    <span>{data}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export default TableLayout;
