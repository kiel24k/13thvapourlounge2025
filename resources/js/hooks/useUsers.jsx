import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { userSignup, userLogin, getAdminList } from "../api/users.api";
import { useNavigate } from "react-router-dom";

export const useUserSignup = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: userSignup,
        onSuccess: () => {
            navigate("/login");
        },
    });
};

export const useUserLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: userLogin,
        onSuccess: (data) => {
            window.localStorage.setItem("user", JSON.stringify(data.role));
            if (data.role === "customer") {
                navigate("/");
            } else if (data.role === "admin") {
                navigate("/admin-dashboard");
            }
        },
    });
};

export const useGetAdminList = (page, sortOrder, sortName, search) => {
    return useQuery({
        queryFn: () => getAdminList(page,sortOrder, sortName, search),
        queryKey: ["fetchAdminList", page,sortOrder, sortName, search],
        placeholderData: keepPreviousData
    });
};
