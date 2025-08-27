export const userSignup = async (userData) => {
    try {
        const response = await axios.post("api/user-signup", userData, {
            headers: { "content-type": "application/json" },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        throw error;
    }
};

export const userLogin = async (userData) => {
    try {
        const response = await axios.post("/api/user-login", userData, {
            headers: { "content-type": "application/json" },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        throw error;
    }
};

export const getAdminList = async (page, sortOrder, sortName, search) => {
    const response = await axios.get(`/api/admin-list?page=${page}`, {
        headers: { "content-type": "application/json" },
        params: {
            sortOrder: sortOrder,
            sortName: sortName,
            search: search,
        },
    });
    return response.data;
};
