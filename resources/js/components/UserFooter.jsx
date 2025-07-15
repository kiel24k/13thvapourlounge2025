import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import FadeInSection from "./FadeInSection";

const UserFooter = () => {
    return (
        <footer className="mt-5">
            <FadeInSection>
                <div className="flex flex-wrap justify-evenly gap-10 items-end content-center p-5 bg-black  text-white">
                    <div className="grid">
                        <h1 className="font-bold">NEWSLETTER</h1>
                        <span className="text-sm">
                            Get special offers and find out what's new in the
                            store. Sign up for the 13VS newsletter
                        </span>
                    </div>
                    <div className="flex">
                        <span>
                            <FormControl variant="standard">
                                <Input
                                    id="input-with-icon-adornment"
                                    placeholder="Enter email address"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailIcon
                                                style={{ color: "white" }}
                                            />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <SendIcon
                                                style={{ color: "white" }}
                                            />
                                        </InputAdornment>
                                    }
                                    sx={{
                                        color: "white", // input text
                                        "& input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                        "&:before": {
                                            borderBottom: "1px solid white",
                                        },
                                        "&:hover:not(.Mui-disabled):before": {
                                            borderBottom: "1px solid white",
                                        },
                                        "&:after": {
                                            borderBottom: "2px solid white",
                                        },
                                    }}
                                />
                            </FormControl>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-4 ml-5 mr-5 items-start uppercase text-gray-450 mt-10">
                    <div className="grid gap-5">
                        <b className="font-semibold">Follow us</b>
                        <div className="flex gap-3">
                            <FacebookIcon />
                            <AlternateEmailIcon />
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <b className="font-semibold">need help?</b>
                        <div className="grid gap-3 text-sm">
                            <span>contact us</span>
                            <span>check order status</span>
                            <span>do we shipt to you - zip code check</span>
                            <span>shipping & exchange</span>
                            <span>returns & exchange</span>
                            <span>payment options</span>
                            <span>help center</span>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <b className="font-semibold">info</b>
                        <div className="grid gap-3 text-sm">
                            <span>about us</span>
                            <span>blog</span>
                            <span>reviews</span>
                            <span>coupons</span>
                            <span>reward programs</span>
                            <span>age policy</span>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <b className="font-semibold">resources</b>
                        <div className="grid gap-3 text-sm">
                            <span>best vapes of 2025 so far</span>
                            <span>2025 Top 10 Nicotine Pouches</span>
                            <span>Shop Vape Clearance</span>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <section className="mt-10 border-b-1 border-gray-500">
                    <p className="p-4 text-sm text-gray-500">
                        The products available on this website are strictly not
                        for sale to minors. You must be at least 18 years old or
                        of legal smoking age in your area to purchase any item
                        from this site. Our products may contain nicotine, a
                        substance known to be highly addictive and potentially
                        harmful to your health. Please be advised that the
                        e-juices and vape products sold here may contain
                        Propylene Glycol (PG), Vegetable Glycerin (VG),
                        nicotine, and flavorings. These ingredients may cause
                        irritation or adverse reactions in some individuals. Our
                        products are intended only for adult smokers or vapers
                        and should not be used by individuals who are pregnant,
                        nursing, or have health conditions without first
                        consulting a licensed physician. While we strive to
                        provide accurate product information, the statements
                        made regarding these products have not been evaluated by
                        the Philippine Food and Drug Administration (FDA). These
                        products are not intended to diagnose, treat, cure, or
                        prevent any disease. Any health-related content on this
                        site is for informational purposes only and should not
                        be considered a substitute for professional medical
                        advice. Furthermore, our products are not meant for oral
                        ingestion, and doing so may be toxic or fatal. Keep all
                        vape products out of reach of children and pets. The use
                        of any product purchased from this site is at your own
                        risk, and we assume no responsibility for misuse,
                        adverse effects, or health outcomes resulting from
                        improper use.
                    </p>
                </section>
            </FadeInSection>
           <FadeInSection>
            <section>
             <div className="text-center pt-2 pb-5">
                  <span className="text-gray-500"> Copyright © 2025 Element Vape. All Rights Reserved.</span>
             </div>
            </section>
           </FadeInSection>
        </footer>
    );
};

export default UserFooter;
