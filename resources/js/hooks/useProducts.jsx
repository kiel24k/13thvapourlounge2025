import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories, storeCategory } from "../api/products.api";

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


export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categoryList"],
        queryFn: getCategories,
    });
};

export const useStoreCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:storeCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["categoryList"]) 
            toast("Category added successfully", "success")
        }

    })
}
