import React, { useEffect, useState } from "react";
import InputWithIcon from "../../components/inputs/InputWithIcons";
import { Button, TextField } from "@mui/material";
import BoxPaper from "../../components/box/Paper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FadeInSection from "../../components/FadeInSection";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useUserSignup } from "../../hooks/useUsers";
import dayjs from "dayjs";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Signup = () => {
  const { mutate, isPending, isSuccess, isError, error } = useUserSignup();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    date_of_birth: "",
    role: "customer",
    password: "",
    password_confirmation: "",
  });

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      date_of_birth: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // limit contact_number to 10 digits
    if (name === "contact_number") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.slice(0, 10),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        date_of_birth: "",
        role: "admin",
        password: "",
        password_confirmation: "",
      });
    }
  }, [isSuccess]);

  return (
    <FadeInSection>
      <div className="grid md:w-150 m-auto">
        <BoxPaper elevation={5}>
          <section className="grid gap-10 p-3 ">
            <div className="text-center">
              <h1 className="font-semibold text-3xl">Create an account</h1>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              {/* First Name */}
              <InputWithIcon>
                <AccountCircle />
                <TextField
                  type="text"
                  label="First Name"
                  variant="standard"
                  name="first_name"
                  fullWidth
                  value={formData.first_name}
                  onChange={handleChange}
                  error={!!error?.errors?.first_name}
                  helperText={error?.errors?.first_name?.[0]}
                />
              </InputWithIcon>

              {/* Last Name */}
              <InputWithIcon>
                <AccountCircle />
                <TextField
                  type="text"
                  label="Last Name"
                  variant="standard"
                  name="last_name"
                  fullWidth
                  value={formData.last_name}
                  onChange={handleChange}
                  error={!!error?.errors?.last_name}
                  helperText={error?.errors?.last_name?.[0]}
                />
              </InputWithIcon>

              {/* Contact Number */}
              <InputWithIcon>
                <LocalPhoneIcon />
                <TextField
                  type="tel"
                  label="Contact Number"
                  variant="standard"
                  name="contact_number"
                  fullWidth
                  value={formData.contact_number}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                  error={!!error?.errors?.contact_number}
                  helperText={error?.errors?.contact_number?.[0]}
                />
              </InputWithIcon>

              {/* Email */}
              <InputWithIcon>
                <AlternateEmailIcon />
                <TextField
                  type="email"
                  label="Email"
                  variant="standard"
                  name="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  error={!!error?.errors?.email}
                  helperText={error?.errors?.email?.[0]}
                />
              </InputWithIcon>

              {/* Password */}
              <InputWithIcon>
                <LockIcon />
                <TextField
                  type="password"
                  label="Create Password"
                  variant="standard"
                  name="password"
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                  error={!!error?.errors?.password}
                  helperText={error?.errors?.password?.[0]}
                />
              </InputWithIcon>

              {/* Confirm Password */}
              <InputWithIcon>
                <LockIcon />
                <TextField
                  type="password"
                  label="Confirm Password"
                  variant="standard"
                  name="password_confirmation"
                  fullWidth
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  error={!!error?.errors?.password_confirmation}
                  helperText={error?.errors?.password_confirmation?.[0]}
                />
              </InputWithIcon>

              {/* Date of Birth */}
              <InputWithIcon>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={
                      formData.date_of_birth
                        ? dayjs(formData.date_of_birth)
                        : null
                    }
                    onChange={handleDateChange}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        error: !!error?.errors?.date_of_birth,
                        helperText: error?.errors?.date_of_birth?.[0],
                      },
                    }}
                  />
                </LocalizationProvider>
              </InputWithIcon>
              <p className="ml-3 text-gray-500 italic">
                You need to be 18 and over to use this website in the Philippines.
              </p>

              {/* Submit */}
              <div className="grid justify-center text-center items-center gap-5">
                <Button type="submit" variant="contained" sx={{ background: "black" }}>
                  Signup
                </Button>
                <Link to={"/login"} className="text-blue-600">
                  Already have an account?
                </Link>
              </div>
            </form>
          </section>
        </BoxPaper>
      </div>
    </FadeInSection>
  );
};

export default Signup;
