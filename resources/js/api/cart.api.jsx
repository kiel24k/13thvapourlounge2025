export const storeCart = async (data) => {
    try {
        const response = await axios.post("/api/store-cart", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const showCartById = async (id) => {
    try {
        const response = await axios.get(`/api/show-cart/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCart = async (data) => {
    try {
        const response = await axios.post("/api/update-cart", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteCart = async (ids) => {
    try {
        const response = await axios.post("/api/delete-cart", ids);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};
