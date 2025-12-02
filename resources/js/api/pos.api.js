export const storeOrder = async (data) => {
    try {
        const response = await axios.post("/api/store-order", data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const showCustomerByStatus = async (status) => {
    try {
        const response = await axios.get(`/api/get-customer-by-status/${status}` );
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
