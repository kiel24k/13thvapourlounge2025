import { Button } from "@mui/material";
import React from "react";
import { MdArrowBack } from "react-icons/md";

const HistoryBackButton = ({title}) => {

  const handleBack =() => {
     window.history.back()
  }
    return (
        <>
            <div className="flex gap-3 items-center">
                <Button
                    startIcon={<MdArrowBack />}
                    sx={{ fontSize: "13px", background: "none", color: "black", textTransform: 'none' }}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <span className="font-semibold text-2xl">{title}</span>
            </div>
        </>
    );
};

export default HistoryBackButton;
