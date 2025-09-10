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
    getUser,
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

export const useGetUser = () => {
    return useQuery({
        queryFn: getUser,
        queryKey: ["getUser"],
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
            window.localStorage.setItem("user", JSON.stringify(data.role));
            window.localStorage.setItem("tkn", JSON.stringify(data.token));
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
