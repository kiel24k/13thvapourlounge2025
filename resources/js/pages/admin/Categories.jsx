import { Button, Checkbox, FormControl, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import React from "react";
import { Link } from "react-router-dom";
import UpdateCategory from "../../components/Overlays/UpdateCategoryModal";
import DeleteUserDialog from "../../components/Overlays/DeleteUserDialog";
import DeleteCategoryDialog from "../../components/Overlays/DeleteCategoryDialog";

const Categories = () => {
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
                    <Link to={"/admin-create-admin"}>
                        <Button
                            variant="contained"
                            endIcon={<PersonAddOutlinedIcon />}
                            color="success"
                        >
                            New admin
                        </Button>
                    </Link>
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
                            <tr>
                                <td className="text-center">
                                    <Checkbox />
                                </td>
                                <td className="text-sm p-2 text-left text-gray-800">
                                    Test1
                                </td>
                                <td className="text-sm p-2 text-left text-gray-800">
                                    Test1
                                </td>
                                <td>
                                   <div className="flex">
                                     <UpdateCategory />
                                    <DeleteCategoryDialog/>
                                   </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Categories;
