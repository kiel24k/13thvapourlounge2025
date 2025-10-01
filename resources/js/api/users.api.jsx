import axios from "axios";
import { cookieName } from "../cookies/GetCookies";

export const getAuthUser = async () => {
    try {
        const response = await axios.get("/api/user", {
            headers: {
                Authorization: `Bearer ${cookieName("usr_tkn")}`,
            },
        });
        return response.data;
    } catch (err) {
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
        await axios.get("/sanctum/csrf-cookie");
        const response = await axios.post("/api/user-login", userData, {
            withCredentials: true,
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

export const getUser = async (id) => {
    const response = await axios.get(`/api/get-user/${id}`);

    return response.data;
};

export const updateUser = async (userData) => {
    try {
        const response = await axios.post(
            `/api/update-user/${userData.id}`,
            userData,
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


