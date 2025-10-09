import { Button, Checkbox, FormControl, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useGetOptionList, useShowOption } from "../../../hooks/useProducts";
import NewOption from "../../../components/Overlays/Dialogs/NewOption";
import ViewModal from "../../../components/Overlays/Modals/ViewModal";
import { useState } from "react";
import ViewOptionRow from "../../../components/Table/ViewOptionRow";
import UpdateOption from "../../../components/Overlays/Dialogs/UpdateOption";

const Options = () => {
    const [optionData, setOptionData] = useState("");

    const { data: optionList } = useGetOptionList();
    const { data: showOption, isLoading } = useShowOption(optionData);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewButton = (optionTitle) => {
        setOptionData(optionTitle);
        setIsModalOpen(true);
    };
    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Options</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                        />
                    </FormControl>
                    <NewOption />
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
                                        Option Title
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Option Label
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
                            {optionList &&
                                optionList.map((data) => (
                                    <tr>
                                        <td className="text-center">
                                            <Checkbox />
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>{data.option_title}</span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                onClick={() =>
                                                    handleViewButton(
                                                        data.option_title,
                                                    )
                                                }
                                            >
                                                Details
                                            </Button>
                                            {isModalOpen && (
                                                <ViewModal
                                                    header="Option details"
                                                    modalOpen={isModalOpen}
                                                    isLoading={isLoading}
                                                    modalContent={optionList}
                                                    onClose={() =>
                                                        setIsModalOpen(false)
                                                    }
                                                >
                                                    <ViewOptionRow
                                                        data={showOption}
                                                    />
                                                </ViewModal>
                                            )}
                                        </td>
                                        <td>
                                            <div className="flex">
                                                <UpdateOption option={data}/>
                                            </div>
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

export default Options;
