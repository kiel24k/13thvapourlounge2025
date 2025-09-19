export const cookieName = (name) => {
   const cookies = document.cookie.split(";"); // Split all cookies
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split("="); // Separate key and value
        if (key === name) return decodeURIComponent(value); // Return value if key matches
    }
    return null; // Return null if cookie not found
}