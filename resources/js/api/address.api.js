export const showAddressById = async (id) => {
    try {
        const response = await axios.get(`api/show-address/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const storeAddress = async (data) => {
    try {
        const response = await axios.post("api/store-address", data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
