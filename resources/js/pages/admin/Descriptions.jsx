import { Button, Checkbox, FormControl, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { useGetDescriptions } from "../../hooks/useProducts";

import NewDescriptionDialog from "../../components/Overlays/NewDescriptionDialog";
import DeleteDescriptionDialog from "../../components/Overlays/DeleteDescriptionDialog";
import UpdateDescriptionDialog from "../../components/Overlays/UpdateDescriptionDialog";
import ViewDescriptionModal from "../../components/Overlays/ViewDescriptionModal";

const Descriptions = () => {
    const { data, isPending } = useGetDescriptions();
    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Descriptions</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                        />
                    </FormControl>
                    <NewDescriptionDialog />
                </div>

                <div>
                    <table className="border-gray-300 divide-y divide-gray-200 min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>
                                    <Checkbox />
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Description Title
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Description Content
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
                            {data?.data?.map((description) => (
                                <tr key={description.id}>
                                    <td className="text-center">
                                        <Checkbox />
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        {description.description_body}
                                    </td>
                                    <td className="text-sm p-2 text-center text-gray-800">
                                        <div className="flex gap-2   items-center">
                                            {description.description_content ? (
                                                <ViewDescriptionModal title={"Description Content"} descriptionBody={description.description_body} />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </td>
                                    <td className="flex gap-2">
                                        <UpdateDescriptionDialog />
                                        <DeleteDescriptionDialog />
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

export default Descriptions;
