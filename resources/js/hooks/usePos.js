import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showCustomerByStatus, storeOrder } from "../api/pos.api";
import Swal from "sweetalert2";

function alert(title) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: 1500,
    });
}

export const useStoreOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: storeOrder,
        onSuccess: () => {
            alert("Order Saved!");
            queryClient.invalidateQueries(['showcustomerbystatus'])
        },
    });
};

export const useShowCustomerByStatus = (status) => {
    return useQuery({
        queryFn: () => showCustomerByStatus(status),
        queryKey: ["showcustomerbystatus", status],
    });
};
