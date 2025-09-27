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
