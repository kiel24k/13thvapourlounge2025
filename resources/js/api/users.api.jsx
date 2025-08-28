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

export const getUsersList = async (page, sortOrder, sortName, search) => {
    const response = await axios.get(`/api/users-list?page=${page}`, {
        headers: { "content-type": "application/json" },
        params: {
            sortOrder: sortOrder,
            sortName: sortName,
            search: search,
        },
    });
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`/api/delete-user/${id}`, {
        headers: { "content-type": "application/json" },
    });
    return response.data;
};
