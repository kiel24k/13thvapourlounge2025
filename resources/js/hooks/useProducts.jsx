import {
    keepPreviousData,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    createOption,
    deleteCategory,
    deleteDescription,
    getCategories,
    getDescriptions,
    getOptionList,
    showOption,
    storeCategory,
    storeDescription,
    updateCategory,
    updateDescription,
    updateOption,
    viewDescription,
} from "../api/products.api";

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
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: storeCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["categoryList"]);
            toast("Category added successfully", "success");
        },
    });
};

export const useUpdateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["categoryList"]);
            toast("Category updated", "success");
        },
    });
};

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(["categoryList"]);
            toast("Category Deleted", "success");
        },
    });
};

export const useGetDescriptions = (search, page, orderName, orderSort) => {
    return useQuery({
        queryKey: ["descriptionsList", search, page, orderName, orderSort],
        queryFn: () => getDescriptions(search, page, orderName, orderSort),
        placeholderData: keepPreviousData,
    });
};

export const useStoreDescription = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: storeDescription,
        onSuccess: () => {
            queryClient.invalidateQueries(["descriptionList"]);
            toast("Description added successfully", "success");
        },
    });
};

export const useViewDescription = (descriptionBody) => {
    return useQuery({
        queryFn: () => viewDescription(descriptionBody),
        queryKey: ["product-description", descriptionBody],
    });
};

export const useDeleteDescription = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteDescription,
        onSuccess: () => {
            queryClient.invalidateQueries(["descriptionList"]);
            toast("Description Deleted", "success");
        },
    });
};

export const useUpdateDescription = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateDescription,
        onSuccess: () => {
            queryClient.invalidateQueries(["descriptionList"]);
            toast("Description updated", "success");
        },
    });
};

export const useGetOptionList = () => {
    return useQuery({
        queryKey: ["optionList"],
        queryFn: getOptionList,
    });
};

export const useStoreOption = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createOption,
        onSuccess: () => {
            queryClient.invalidateQueries(["optionList"])
            toast("Option added", "success")
        }
    }) 
}

export const useShowOption = (title) => {
    return useQuery({
        queryKey: ["showOption", title],
        queryFn: () => showOption(title)
    }) 
}

export const useUpdateOption = () => {
    return useMutation({
        mutationFn: updateOption,
        onSuccess: () => {
            return 
        }
    })
}
