export const createOrder = async (data) => {
    try {
        const response = await axios.post("api/store-order", data);
        console.log(response.data);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const showOrders = async () => {
    try {
        const response = await axios.get("api/show-orders");
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const updateStatus = async (data) => {
    try {
        const response = await axios.post("api/update-status", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const showOrderById = async (id) => {
    const response = await axios.get(`/api/show-order-by-id/${id}`)
    return response.data
    
}
