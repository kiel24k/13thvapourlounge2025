export const trendingProducts = async () => {
    try {
        const response = await axios.get("api/product-trending");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const bestSellerProduct = async  () => {
    const response = await axios.get("/api/best-seller")
    return response.data
}
