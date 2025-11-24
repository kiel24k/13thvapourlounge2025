export const trendingProducts = async () => {
    try {
        const response = await axios.get("api/product-trending");
        return response.data;
    } catch (error) {
        throw error;
    }
};
