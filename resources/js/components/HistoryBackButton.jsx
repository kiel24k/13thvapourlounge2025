import { Button } from "@mui/material";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HistoryBackButton = ({ title, route }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (!route) {
           return window.history.back();
        }
        navigate(route);
    };
    return (
        <>
            <div className="flex gap-3 items-center">
                <Button
                    startIcon={<MdArrowBack />}
                    sx={{
                        fontSize: "13px",
                        background: "none",
                        color: "black",
                        textTransform: "none",
                    }}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <span className="font-semibold text-2xl capitalize">
                    {title}
                </span>
            </div>
        </>
    );
};

export default HistoryBackButton;
