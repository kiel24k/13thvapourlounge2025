export const createOrder = async (data) => {
    try {
        const response = await axios.post("api/store-order", data);
        console.log(response)
       return response.data
    } catch (error) {
        throw error.response.data;
    }
};
