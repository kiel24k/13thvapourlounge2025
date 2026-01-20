import React from "react";
import { FormControl, Input, InputAdornment, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import FadeInSection from "./FadeInSection";

const UserFooter = () => {
  return (
    <footer className="mt-5 bg-black text-white">
      <FadeInSection>
        {/* Brand Info */}
        <div className="flex flex-col items-center justify-center py-8 px-5 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            13thvapourlounge
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Welcome to 13thvapourlounge — your ultimate destination for premium vaping products. 
            Explore our curated selection of e-liquids, disposable vapes, and accessories crafted 
            for the best vaping experience. We are committed to quality, safety, and delivering 
            the ultimate satisfaction for our adult customers.
          </p>

          {/* Newsletter Signup */}
          {/* <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
            <FormControl variant="standard" className="w-full sm:w-64">
              <Input
                placeholder="Enter your email to subscribe"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: "white" }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <SendIcon style={{ color: "white" }} />
                  </InputAdornment>
                }
                sx={{
                  color: "white",
                  "& input::placeholder": { color: "white", opacity: 1 },
                  "&:before": { borderBottom: "1px solid white" },
                  "&:hover:not(.Mui-disabled):before": { borderBottom: "1px solid white" },
                  "&:after": { borderBottom: "2px solid white" },
                }}
                fullWidth
              />
            </FormControl>
            <Button
              variant="contained"
              className="bg-purple-500 hover:bg-purple-600 text-white normal-case mt-2 sm:mt-0"
            >
              Subscribe
            </Button>
          </div> */}

          {/* Age Restriction Note */}
          <p className="text-gray-500 text-xs sm:text-sm mt-6 max-w-md">
            The products sold on 13thvapourlounge are strictly intended for adults aged 18 or older. 
            By subscribing, you confirm that you meet the legal smoking age in your area. Please vape responsibly.
          </p>
        </div>
      </FadeInSection>
    </footer>
  );
};

export default UserFooter;
