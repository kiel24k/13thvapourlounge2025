export const getCategories = async () => {
    const response = await axios.get("api/get-categories", {
        headers: { "content-type": "application/json" },
    });
    return response.data;
};

export const storeCategory = async (categoryData ) => {
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
