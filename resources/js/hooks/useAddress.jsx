import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { showAddressById, storeAddress } from "../api/address.api";
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

export const useShowAddressById = (id) => {
    return useQuery({
        queryFn: () => showAddressById(id),
        queryKey: ["showAddressById", id],
        keepPreviousData: true,
    });
};

export const useStoreAddress = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: storeAddress,
        onSuccess: () => {
            alert("Address Added")
            queryClient.invalidateQueries(["showAddressById", id]);
        },
    });
};
