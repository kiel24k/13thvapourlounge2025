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

export const getDescriptions = async () => {
    try {
        const response = await axios.get(`api/get-descriptions`);
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

        console.log(response);
        // return response.data
    } catch (error) {
        throw error.response.data;
    }
};

export const viewDescription = async (descriptionBody) => {
    const response = await axios.get(`api/view-product-description/${descriptionBody}`);
    return response.data;
};

export const deleteDescription = async (id) => {
    const response = await axios.delete(`api/destroy-description/${id}`)
    console.log(response.data);
    
    return response.data
}
