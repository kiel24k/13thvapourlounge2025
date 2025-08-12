import React, { useEffect, useState } from "react";
import { useFetchUsers, useUserSignup } from "../../hooks/useUsers";

const testing = () => {
    const { data, isLoading, isError } = useFetchUsers();
    const { mutate, isPending, isSuccess, error } = useUserSignup();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("admin");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            role: role,
            email: email,
            password: password,
            date_of_birth: dateOfBirth,
        });
    };
    useEffect(() => {
        if (isSuccess) {
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setRole("admin");
            setEmail("");
            setDateOfBirth("");
            setPassword("");
        }
    }, [isSuccess]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error?.errors?.first_name && (
                    <span>{error?.errors?.first_name[0]}</span>
                )}
                <input
                    type="text"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                {error?.errors?.last_name && (
                    <span>{error?.errors.last_name[0]}</span>
                )}
                <input
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                {error?.errors?.phone_number && (
                    <span>{error?.errors.phone_number[0]}</span>
                )}
                <input
                    type="text"
                    placeholder="phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                {error?.errors?.email && <span>{error?.errors.email[0]}</span>}
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error?.errors?.date_of_birth && (
                    <span>{error?.errors.date_of_birth[0]}</span>
                )}
                <input
                    type="text"
                    placeholder="date of birth"
                       value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />

                <br />
                {error?.errors?.password && (
                    <span>{error?.errors.password[0]}</span>
                )}
                <input
                    type="text"
                    placeholder="password"
                       value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {JSON.stringify(data)}
        </div>
    );
};

export default testing;
