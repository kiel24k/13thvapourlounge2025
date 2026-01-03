import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
    QueryClient,
} from "@tanstack/react-query";
import {
    userSignup,
    userLogin,
    getUsersList,
    deleteUser,
    getAuthUser,
    getUser,
    updateUser,
    getCustomerList,
} from "../api/users.api";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../components/Alerts/SuccessAlert";
import Swal from "sweetalert2";

function toast(message, type) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    Toast.fire({
        icon: type,
        title: message,
    });
}



export const useGetAuthUser = () => {
    return useQuery({
        queryFn: getAuthUser,
        queryKey: ["getAuthUser"],
    });
};
export const useUserSignup = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: userSignup,
        onSuccess: () => {
            toast("Admin added successfully", "success");
        },
    });
};

export const useUserLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: userLogin,
        onSuccess: (data) => {
            document.cookie = `rl=${data.role}`;
            if (data.role === "customer") {
                navigate("/");
            } else if (data.role === "admin") {
                navigate("/admin-dashboard");
            }
        },
    });
};

export const useGetUsersList = (page, sortOrder, sortName, search) => {
    return useQuery({
        queryFn: () => getUsersList(page, sortOrder, sortName, search),
        queryKey: ["fetchUsersList", page, sortOrder, sortName, search],
        placeholderData: keepPreviousData,
    });
};

export const useGetStaffList = (page, sortOrder, sortName, search) => {
    return useQuery({
        queryFn: () => getStaffList(page, sortOrder, sortName, search),
        queryKey: ["staffList", page, sortOrder, sortName, search],
        placeholderData: keepPreviousData,
    });
};

export const useGetCustomerList = (page, sortOrder, sortName, search) => {
    return useQuery({
        queryFn: () => getCustomerList(page, sortOrder, sortName, search),
        queryKey: ["staffList", page, sortOrder, sortName, search],
        placeholderData: keepPreviousData,
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries(["fetchUsersList"]);
            toast("Deleted successfully", "success");
        },
    });
};

export const useGetUser = (id) => {
    return useQuery({
        queryFn: () => getUser(id),
        queryKey: ["fetchUserData", id],
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            queryClient.invalidateQueries(["fetchUserData"]);
            toast("User update successfully", "success");
        },
    });
};
