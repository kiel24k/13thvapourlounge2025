import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../api/order.api";
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
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries(['showcartbyid'])
           success("Order placed!")
        },
    });
};
