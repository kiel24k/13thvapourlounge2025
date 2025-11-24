export const getCategories = async () => {
    const response = await axios.get("api/get-categories", {
        headers: { "content-type": "application/json" },
    });
    return response.data;
};

export const storeCategory = async (categoryData) => {
    try {
        const response = await axios.post("api/store-category", {
            category_name: categoryData.categoryName,
            category_description: categoryData.categoryDescription,
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        throw error;
    }
};

export const updateCategory = async (categoryData) => {
    try {
        const response = await axios.post("api/update-category", {
            id: categoryData.id,
            category_name: categoryData.categoryName,
            category_description: categoryData.categoryDescription,
        });
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`api/destroy-category/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getDescriptions = async (search, page, orderName, orderSort) => {
    try {
        const response = await axios.get(`api/get-descriptions?page=${page}`, {
            params: {
                search: search,
                orderName: orderName,
                orderSort: orderSort,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const storeDescription = async (descriptionData) => {
    try {
        const response = await axios.post("api/store-description", {
            description_body: descriptionData.descriptionBody,
            description_content: descriptionData.descriptionContent,
        });

        // return response.data
    } catch (error) {
        throw error.response.data;
    }
};

export const viewDescription = async (descriptionBody) => {
    const response = await axios.get(
        `api/view-product-description/${descriptionBody}`,
    );
    return response.data;
};

export const deleteDescription = async (id) => {
    const response = await axios.delete(`api/destroy-description/${id}`);

    return response.data;
};

export const updateDescription = async (data) => {
    try {
        const response = await axios.post("api/update-description", {
            description_body: data.description_body, //recovery key
            description_content: data.description_content, //recovery key for updating content []
            description_body_input: data.description_body_input,
            description_content_input: data.description_content_input,
        });

        return response;
    } catch (error) {
        throw error.response.data;
    }
};

export const getOptionList = async () => {
    const response = await axios.get("api/option-list");
    return response.data;
};

export const createOption = async (optionData) => {
    try {
        const response = await axios.post("api/store-option", {
            option_title: optionData.optionTitle,
            option_label: optionData.optionLabel,
        });
    } catch (error) {
        throw error.response.data;
    }
};

export const showOption = async (title) => {
    const response = await axios.get(`api/show-option/${title}`);
    return response.data;
};

export const updateOption = async (data) => {
    const response = await axios.post("api/update-option", {
        option_title: data.option_title, //recovery key
        option_label: data.option_label, //recovery key for updating content []
        option_title_input: data.option_title_input,
        option_label_input: data.option_label_input,
    });
};

export const deleteOption = async (title) => {
    const response = await axios.delete(`api/destroy-option/${title}`);
    return response.data;
};

export const storeProduct = async (data) => {
    try {
        const response = await axios.post(
            "api/store-product",
            {
                image: data.image,
                product_category: data.product_category,
                product_name: data.product_name,
                product_price: data.price,
                product_quantity: data.quantity,
                product_description: data.product_details.description_body,
                product_option:
                    data.product_details.option_title.length === 0
                        ? null
                        : JSON.stringify(data.product_details.option_title),
                product_details: JSON.stringify(data.product_details), //json obj
            },
            {
                headers: { "Content-Type": "multipart/form-data" },
            },
        );
        console.log(response.data);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const showProducts = async () => {
    try {
        const response = await axios.get("api/show-products");
        return response.data.data;
    } catch (error) {
        throw error.response;
    }
};

export const showProduct = async (id) => {
    try {
        const response = await axios.get(`/api/show-product/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
