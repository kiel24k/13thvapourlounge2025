import axios from "axios";

export const getUser = async () => {
    try {
        const token = JSON.parse(window.localStorage.getItem("tkn"));
        const response = await axios.get("/api/user", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const userSignup = async (userData) => {
    try {
        const response = await axios.post("api/user-signup", userData, {
            headers: { "Content-Type": "multipart/form-data" },
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
        console.log(response.data);
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
