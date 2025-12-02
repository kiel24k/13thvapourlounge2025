import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextField, Typography } from "@mui/material";

export default function BillingAddressTabs() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography variant="h5" color="black">
                        Billing Details
                    </Typography>
                    <div className="grid gap-3 mt-3">
                        <div className="flex gap-5">
                            <TextField
                                id=""
                                label="First name"
                                name="first_name"
                                value={formInput.first_name}
                                onChange={handleChange}
                                error={error?.errors?.first_name?.[0]}
                                helperText={error?.errors?.first_name?.[0]}
                            />

                            <TextField
                                label="Last name"
                                name="last_name"
                                value={formInput.last_name}
                                onChange={handleChange}
                                error={error?.errors?.last_name?.[0]}
                                helperText={error?.errors?.last_name?.[0]}
                            />
                        </div>

                        <div className="flex">
                            <TextField
                                fullWidth
                                label="Company name (optional)"
                                name="company_name"
                                value={formInput.company_name}
                                onChange={handleChange}
                                error={error?.errors?.company_name?.[0]}
                                helperText={error?.errors?.company_name?.[0]}
                            />
                        </div>

                        <div className="grid gap-3">
                            <TextField
                                fullWidth
                                label="House number and street name"
                                name="street_name"
                                value={formInput.street_name}
                                onChange={handleChange}
                                error={error?.errors?.street_name?.[0]}
                                helperText={error?.errors?.street_name?.[0]}
                            />
                            <TextField
                                fullWidth
                                label="Apartment, suit,unit, etc (optional)"
                                name="apartment"
                                value={formInput.apartment}
                                onChange={handleChange}
                                error={error?.errors?.apartment?.[0]}
                                helperText={error?.errors?.apartment?.[0]}
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

                            <TextField
                                fullWidth
                                label="Postcode / ZIP"
                                name="zip_code"
                                value={formInput.zip_code}
                                onChange={handleChange}
                                error={error?.errors?.zip_code?.[0]}
                                helperText={error?.errors?.zip_code?.[0]}
                            />

                            <TextField
                                fullWidth
                                label="Contact number"
                                name="contact_number"
                                value={formInput.contact_number}
                                onChange={handleChange}
                                error={error?.errors?.contact_number?.[0]}
                                helperText={error?.errors?.contact_number?.[0]}
                            />

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
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}
