import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
    Button,
    FormControl,
    Icon,
    IconButton,
    Input,
    OutlinedInput,
    TextField,
    Tooltip,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDeleteUser, useGetStaffList, useGetUsersList } from "../../hooks/useUsers";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AiOutlineSortAscending } from "react-icons/ai";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import DeleteUserDialog from "../../components/Overlays/Dialogs/DeleteUser";
import ViewUserModal from "../../components/Overlays/Modals/ViewUserModal";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import { Link } from "react-router-dom";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const StaffList = () => {
    const [page, setPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("ASC");
    const [sortName, setSortName] = useState("id");
    const [search, setSearch] = useState("");
    const [checkBox, setCheckBox] = useState([]);
    const [allCheckBox, setAllCheckbox] = useState(false);

    const { data, isPending, isError, isFetching } = useGetStaffList(
        page,
        sortOrder,
        sortName,
        search,
    );

    const backPaginate = () => {
        if (data.current_page > data.last_page) {
            setPage(data.last_page - 1);
        }
    };

    const nextPaginate = () => {
        if (data.current_page < data.last_page) {
            setPage(data.current_page + 1);
        }
    };

    const sort = (headName) => {
        setSortName(headName);
        if (sortOrder === "DESC") {
            setSortOrder("ASC");
        } else {
            setSortOrder("DESC");
        }
    };

    const handleCheckBox = (users) => {
        let updatedCheckBox;

        if (checkBox.includes(users.id)) {
            updatedCheckBox = checkBox.filter((el) => el !== users.id);
        } else {
            updatedCheckBox = [...checkBox, users.id];
        }

        setCheckBox(updatedCheckBox);
    };

    const handleAllCheckBox = () => {
        let checkBoxes;
        if (allCheckBox === true) {
            setAllCheckbox(false);
            checkBoxes = [];
        } else {
            setAllCheckbox(true);
            checkBoxes = data.data.map((el) => el.id);
        }
        setCheckBox(checkBoxes);
    };

    if (isPending) {
        return <h1>Data is Loading</h1>;
    }
    if (isError) {
        return <h1>Data is error</h1>;
    }

    return (
        <section>
            <div className="p-2 overflow-x-auto grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Staff List</span>
                    {data.total <= 1 ? (
                        <span>({data.total} staff)</span>
                    ) : (
                        <span>({data.total} staffs)</span>
                    )}
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </FormControl>
                    <Link to={"/admin-create-admin"}>
                        <Button
                            variant="contained"
                            endIcon={<PersonAddOutlinedIcon />}
                            color="success"
                        >
                            New User
                        </Button>
                    </Link>
                    {checkBox.length > 0 && (
                        <Button
                            endIcon={<DeleteOutlineOutlinedIcon />}
                            variant="contained"
                            color="error"
                        >
                            Delete selected
                        </Button>
                    )}
                </div>
                {data.total <= 0 ? (
                    <h1 className="text-center font-semibold text-2xl">
                        No user available
                    </h1>
                ) : (
                    <table className="min-w-full border  border-gray-300 divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>
                                    <Checkbox
                                        checked={allCheckBox}
                                        onChange={handleAllCheckBox}
                                    />
                                </th>
                                <th
                                    className="text-sm p-2 text-left font-semibold text-gray-700"
                                    onClick={() => sort("first_name")}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>Name</span>
                                        <AiOutlineSortAscending />
                                    </div>
                                </th>
                                <th
                                    className="text-sm p-1 text-left font-semibold text-gray-700"
                                    onClick={() => sort("contact_number")}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>Contact number</span>
                                        <AiOutlineSortAscending />
                                    </div>
                                </th>
                                <th
                                    className="text-sm p-2 text-left font-semibold text-gray-700"
                                    onClick={() => sort("email")}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>Email</span>
                                        <AiOutlineSortAscending />
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex justify-between items-center">
                                        <span>Role</span>
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <span>Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((users) => (
                                <tr
                                    key={users.id}
                                    className="border-b-1 border-gray-300 bg-white"
                                >
                                    <td className="text-center">
                                        <Checkbox
                                            checked={checkBox.includes(
                                                users.id,
                                            )}
                                            onChange={() =>
                                                handleCheckBox(users)
                                            }
                                        />
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        <span>
                                            {users.first_name} {users.last_name}
                                        </span>
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        <span>{users.contact_number}</span>
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        <span>{users.email}</span>
                                    </td>
                                    <td className="text-sm p-2 text-left text-gray-800">
                                        <span>{users.role}</span>
                                    </td>
                                    <td>
                                        <div className="flex">
                                            <Tooltip title="View" arrow>
                                                <Link
                                                    to={`/admin-edit-user/${users.id}`}
                                                >
                                                    <IconButton>
                                                        <ModeEditOutlineOutlinedIcon className="text-gray-500" />
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>
                                            <ViewUserModal data={users}>
                                                <ul className="grid gap-3">
                                                    <li className="flex gap-2">
                                                        <EmailOutlinedIcon />
                                                        {users.email}
                                                    </li>
                                                    <li className="flex gap-2">
                                                        <CallOutlinedIcon />
                                                        {users.contact_number}
                                                    </li>
                                                    <li className="flex gap-2">
                                                        <CelebrationOutlinedIcon />
                                                        {users.date_of_birth}
                                                    </li>
                                                    <li className="flex gap-2">
                                                        <QuestionMarkOutlinedIcon />
                                                        {users.role}
                                                    </li>
                                                </ul>
                                            </ViewUserModal>
                                            <DeleteUserDialog
                                                title={"admin"}
                                                id={users.id}
                                            >
                                                <DeleteOutlineOutlinedIcon className="text-gray-500" />
                                            </DeleteUserDialog>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <div className="flex items-center justify-center">
                    <IconButton onClick={backPaginate}>
                        <NavigateBeforeOutlinedIcon />
                    </IconButton>
                    <span>
                        {data.current_page} of {data.last_page}
                    </span>

                    <IconButton onClick={nextPaginate}>
                        <NavigateNextOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </section>
    );
};

export default StaffList;
