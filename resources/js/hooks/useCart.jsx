import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    deleteCart,
    showCartById,
    storeCart,
    updateCart,
} from "../api/cart.api";
import Swal from "sweetalert2";

const alert = (title) => {
    Swal.fire({
        title: title,
        icon: "success",
        draggable: true,
    });
};

export const useStoreCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: storeCart,
        onSuccess: () => {
            queryClient.invalidateQueries("showcartbyid");
            alert("Item added to cart");
        },
    });
};

export const useShowCartById = (id) => {
    return useQuery({
        queryFn: () => showCartById(id),
        queryKey: ["showcartbyid", id],
        enabled: !!id,
    });
};

export const useUpdateCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            queryClient.invalidateQueries("showcartbyid");
        },
    });
};

export const useDeleteCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCart,
        onSuccess: () => {
            queryClient.invalidateQueries("showcartbyid");
        },
    });
};
