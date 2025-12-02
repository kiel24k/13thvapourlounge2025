import React from "react";
import Section from "../SectionLayout/Section";
import HistoryBackButton from "../../components/HistoryBackButton";
import { useGetAuthUser } from "../../hooks/useUsers";
import { useShowAddressById, useStoreAddress } from "../../hooks/useAddress";
import { useCreateOrder } from "../../hooks/useOrder";
import {
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FadeInSection from "../../components/FadeInSection";

const CreateAddress = () => {
    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    const { data: user } = useGetAuthUser();
    const { mutate, error, isPending } = useStoreAddress();
    const initialForm = {
        user_id: user?.id,
        first_name: "",
        last_name: "",
        company_name: "",
        street_name: "",
        apartment: "",
        town: "",
        zip_code: "",
        contact_number: "",
        email: "",
        note: "",
    };
    const [formInput, setFormInput] = React.useState(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formInput, {
            onSuccess: () => {
                setFormInput(initialForm);
            },
        });
    };

    return (
        <FadeInSection>
            <Section>
                <HistoryBackButton title={"shopping cart"} />
                <div className="grid justify-center ">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white border border-gray-400 p-4 rounded-2xl"
                    >
                      <Typography variant="h5" color="black">New Address</Typography>
                        <div>
                            <div className="grid gap-3 mt-3">
                                <div className="flex gap-5">
                                    <TextField
                                        id=""
                                        label="First name"
                                        name="first_name"
                                        value={formInput.first_name}
                                        onChange={handleChange}
                                        error={error?.errors?.first_name?.[0]}
                                        fullWidth
                                        helperText={
                                            error?.errors?.first_name?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Last name"
                                        name="last_name"
                                        value={formInput.last_name}
                                        onChange={handleChange}
                                        error={error?.errors?.last_name?.[0]}
                                        helperText={
                                            error?.errors?.last_name?.[0]
                                        }
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <TextField
                                        fullWidth
                                        label="Company name (optional)"
                                        name="company_name"
                                        value={formInput.company_name}
                                        onChange={handleChange}
                                        error={error?.errors?.company_name?.[0]}
                                        helperText={
                                            error?.errors?.company_name?.[0]
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="House number and street name"
                                        name="street_name"
                                        value={formInput.street_name}
                                        onChange={handleChange}
                                        error={error?.errors?.street_name?.[0]}
                                        helperText={
                                            error?.errors?.street_name?.[0]
                                        }
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <TextField
                                        fullWidth
                                        label="Apartment, suit,unit, etc (optional)"
                                        name="apartment"
                                        value={formInput.apartment}
                                        onChange={handleChange}
                                        error={error?.errors?.apartment?.[0]}
                                        helperText={
                                            error?.errors?.apartment?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Town City"
                                        name="town"
                                        value={formInput.town}
                                        onChange={handleChange}
                                        error={error?.errors?.town?.[0]}
                                        helperText={error?.errors?.town?.[0]}
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <TextField
                                        fullWidth
                                        label="Postcode / ZIP"
                                        name="zip_code"
                                        value={formInput.zip_code}
                                        onChange={handleChange}
                                        error={error?.errors?.zip_code?.[0]}
                                        helperText={
                                            error?.errors?.zip_code?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Contact number"
                                        name="contact_number"
                                        value={formInput.contact_number}
                                        onChange={handleChange}
                                        error={
                                            error?.errors?.contact_number?.[0]
                                        }
                                        helperText={
                                            error?.errors?.contact_number?.[0]
                                        }
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <TextField
                                        fullWidth
                                        label="Email address"
                                        name="email"
                                        value={formInput.email}
                                        onChange={handleChange}
                                        error={error?.errors?.email?.[0]}
                                        helperText={error?.errors?.email?.[0]}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Order notes (optional)"
                                        name="note"
                                        value={formInput.note}
                                        onChange={handleChange}
                                        error={error?.errors?.note?.[0]}
                                        helperText={error?.errors?.note?.[0]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-end mt-3">
                            <Button type="submit" variant="contained" disabled={isPending}>
                             {isPending ? "Loading" : "Submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </Section>
        </FadeInSection>
    );
};

export default CreateAddress;
