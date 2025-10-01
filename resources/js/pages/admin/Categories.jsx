import { Button, Checkbox, FormControl, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import React from "react";
import { Link } from "react-router-dom";

import DeleteCategoryDialog from "../../components/Overlays/DeleteCategoryDialog";
import { useGetCategories } from "../../hooks/useProducts";


import NewCategoryDialog from "../../components/Overlays/NewCategoryDialog";
import UpdateCategoryDialog from "../../components/Overlays/UpdateCategoryDialog";

const Categories = () => {
    const { data } = useGetCategories();

    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Categories</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                        />
                    </FormControl>
                    <NewCategoryDialog/>
                    
                </div>

                <div className="overflow-x-auto">
                    <table className="border-gray-300 divide-y divide-gray-200 min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>
                                    <Checkbox />
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Category Name
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Category Description
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((category) => (
                                <tr key={category.id}>
                                    <td className="text-center">
                                        <Checkbox />
                                    </td>
                                    <td className="text-sm text-left p-2 text-gray-800">
                                        {category.category_name}
                                    </td>
                                    <td className="text-sm text-left p-2 text-gray-800">
                                        {category.category_description}
                                    </td>
                                    <td className="flex gap-2 p-2">
                                        <UpdateCategoryDialog category={category}/>
                                        
                                        <DeleteCategoryDialog id={category.id}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Categories;
