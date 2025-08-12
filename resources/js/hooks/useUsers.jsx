import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignup, fetchUsers } from "../api/users";

export const useUserSignup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userSignup,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fetchUsers"] });
            alert("Boom baby");
        },
    });
};
export const useFetchUsers = () => {
    return useQuery({
        queryKey: ["fetchUsers"],
        queryFn: fetchUsers,
    });
};
