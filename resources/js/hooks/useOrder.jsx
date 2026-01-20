import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createOrder,
    showOrderById,
    showOrders,
    updateStatus,
} from "../api/order.api";
import Swal from "sweetalert2";

function success(title) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: 1500,
    });
}

export const useCreateOrder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries(["showcartbyid"]);
            success("Order placed!");
        },
    });
};

export const useShowOrders = () => {
    return useQuery({
        queryFn: showOrders,
        queryKey: ["showOrders"],
    });
};

export const useUpdateStatus = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateStatus,
        onSuccess: () => {
            queryClient.invalidateQueries(["showOrders"]);
        },
    });
};

export const useShowOrderById = (id) => {
    return useQuery({
        queryFn: () => showOrderById(id),

        queryKey: ["show-order-by-id"],
    });
};
