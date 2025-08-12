import { ErrorOutline } from "@mui/icons-material";

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

export const fetchUsers = async () => {
    const response = await axios.get("/api/get-users", {
        headers: { "content-type": "application/json" },
    });
    return response.data;
};
