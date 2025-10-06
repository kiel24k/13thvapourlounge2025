import {
    Button,
    Checkbox,
    FormControl,
    IconButton,
    OutlinedInput,
    Tooltip,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import React, { useEffect, useState } from "react";

import {
    useGetDescriptions,
    useViewDescription,
} from "../../../hooks/useProducts";
import NewDescriptionDialog from "../../../components/Overlays/Dialogs/NewDescription";
import DeleteDescriptionDialog from "../../../components/Overlays/Dialogs/DeleteDescription";
import UpdateDescriptionDialog from "../../../components/Overlays/Dialogs/UpdateDescription";
import ViewModal from "../../../components/Overlays/Modals/ViewModal";
import { ViewDescriptionRow } from "../../../components/Table/ViewDescriptionRow";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { AiOutlineSortAscending } from "react-icons/ai";

const Descriptions = () => {
    const [search, setSearch] = useState("");
    const [descriptionContent, setDescriptionContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [page, setPage] = useState(1);
    const [orderName, setOrderName] = useState("id")
    const [orderSort, setOrderSort] = useState("DESC")

    const { data: descriptionsData, isPending } = useGetDescriptions(
        search,
        page,
        orderName,
        orderSort
    );
    const { data: viewDescriptionData, isLoading } =
        useViewDescription(descriptionContent);

    const handleViewButton = (text) => {
        setDescriptionContent(text);
        setIsModalOpen(true);
    };

    const handlePaginateBack = () => {
        if (descriptionsData.last_page >= descriptionsData.current_page) {
            setPage((prev) => prev - 1);
        }
    };

    const handlePaginateNext = () => {
        if (descriptionsData.current_page < descriptionsData.last_page) {
            setPage((prev) => prev + 1);
        }
    };

    const handleSort = (name) => {
       
        if(orderSort === "DESC"){
            setOrderSort("ASC")
            
        }else{
            setOrderSort("DESC")
        }
      
    }
    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Descriptions</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            type="text"
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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

                                <th className="text-sm p-2 text-left font-semibold text-gray-700" onClick={() => handleSort("description_body")}>
                                    <div className="flex items-center">
                                        <span>Description Body</span>
                                        <i className="ml-2">
                                            <AiOutlineSortAscending />
                                        </i>
                                    </div>
                                </th>

                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex items-center">
                                        <span>Description Content</span>
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
                            {descriptionsData?.data?.map((description) => (
                                <tr key={description.id}>
                                    <td className="text-center">
                                        <Checkbox />
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        {description.description_body}
                                    </td>
                                    <td className="text-sm p-2 text-center text-gray-800">
                                        <div className="flex gap-2   items-center">
                                            <Tooltip
                                                title="View details"
                                                arrow
                                                placement="right-start"
                                                sx={{ zIndex: 999 }}
                                            >
                                                <Button
                                                    size="small"
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={() =>
                                                        handleViewButton(
                                                            description.description_body,
                                                        )
                                                    }
                                                >
                                                    details
                                                </Button>
                                            </Tooltip>

                                            {isModalOpen && (
                                                <ViewModal
                                                    header="Description Content"
                                                    modalOpen={isModalOpen}
                                                    isLoading={isLoading}
                                                    modalContent={
                                                        viewDescriptionData
                                                    }
                                                    onClose={() =>
                                                        setIsModalOpen(false)
                                                    }
                                                >
                                                    {/* this is children of ViewModal(Component) */}
                                                    <ViewDescriptionRow
                                                        data={
                                                            viewDescriptionData
                                                        }
                                                    />
                                                </ViewModal>
                                            )}
                                        </div>
                                    </td>
                                    <td className="flex gap-2">
                                        <UpdateDescriptionDialog
                                            description={description}
                                        />
                                        <DeleteDescriptionDialog
                                            id={description.id}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex gap-2 justify-center items-center">
                        <IconButton onClick={handlePaginateBack}>
                            <NavigateBeforeOutlinedIcon />
                        </IconButton>
                        <span>
                            {descriptionsData?.current_page} of{" "}
                            {descriptionsData?.last_page}
                        </span>
                        <IconButton onClick={handlePaginateNext}>
                            <NavigateNextOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Descriptions;
