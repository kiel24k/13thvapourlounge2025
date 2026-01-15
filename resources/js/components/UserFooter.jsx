import { FormControl, Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import FadeInSection from "./FadeInSection";

const UserFooter = () => {
    return (
        <footer className="mt-5 bg-black text-white">
            <FadeInSection>
                {/* Newsletter */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-evenly gap-6 sm:gap-10 items-start sm:items-end p-5">
                    <div className="grid text-center sm:text-left flex-1">
                        <h1 className="font-bold text-lg">NEWSLETTER</h1>
                        <span className="text-sm mt-1 block">
                            Get special offers and find out what's new in the
                            store. Sign up for the 13VS newsletter
                        </span>
                    </div>

                    <div className="flex justify-center sm:justify-start flex-1">
                        <FormControl variant="standard" className="w-full sm:w-auto">
                            <Input
                                placeholder="Enter email address"
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
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 py-8 uppercase text-gray-300 text-sm">
                    {/* Follow us */}
                    <div className="grid gap-3">
                        <b className="font-semibold text-white">Follow us</b>
                        <div className="flex gap-3">
                            <FacebookIcon className="cursor-pointer hover:text-blue-500" />
                            <AlternateEmailIcon className="cursor-pointer hover:text-blue-400" />
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="grid gap-2">
                        <b className="font-semibold text-white">Need Help?</b>
                        <div className="grid gap-1">
                            <span>Contact us</span>
                            <span>Check order status</span>
                            <span>Do we ship to you - zip code check</span>
                            <span>Shipping & exchange</span>
                            <span>Returns & exchange</span>
                            <span>Payment options</span>
                            <span>Help center</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="grid gap-2">
                        <b className="font-semibold text-white">Info</b>
                        <div className="grid gap-1">
                            <span>About us</span>
                            <span>Blog</span>
                            <span>Reviews</span>
                            <span>Coupons</span>
                            <span>Reward programs</span>
                            <span>Age policy</span>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="grid gap-2">
                        <b className="font-semibold text-white">Resources</b>
                        <div className="grid gap-1">
                            <span>Best vapes of 2025 so far</span>
                            <span>2025 Top 10 Nicotine Pouches</span>
                            <span>Shop Vape Clearance</span>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Legal Notice */}
            <FadeInSection>
                <section className="px-5 py-4 border-t border-gray-700 text-gray-400 text-xs sm:text-sm">
                    <p>
                        The products available on this website are strictly not for sale to minors.
                        You must be at least 18 years old or of legal smoking age in your area to
                        purchase any item from this site. Our products may contain nicotine, a
                        substance known to be highly addictive and potentially harmful to your
                        health. Please be advised that the e-juices and vape products sold here may
                        contain Propylene Glycol (PG), Vegetable Glycerin (VG), nicotine, and
                        flavorings. These ingredients may cause irritation or adverse reactions in
                        some individuals. Our products are intended only for adult smokers or
                        vapers and should not be used by individuals who are pregnant, nursing, or
                        have health conditions without first consulting a licensed physician.
                        While we strive to provide accurate product information, the statements made
                        regarding these products have not been evaluated by the Philippine Food and
                        Drug Administration (FDA). These products are not intended to diagnose, treat,
                        cure, or prevent any disease. Any health-related content on this site is for
                        informational purposes only and should not be considered a substitute for
                        professional medical advice. Furthermore, our products are not meant for
                        oral ingestion, and doing so may be toxic or fatal. Keep all vape products
                        out of reach of children and pets. The use of any product purchased from this
                        site is at your own risk, and we assume no responsibility for misuse,
                        adverse effects, or health outcomes resulting from improper use.
                    </p>
                </section>
            </FadeInSection>

            {/* Copyright */}
            <FadeInSection>
                <section className="mt-4 text-center p-4 text-gray-500 text-sm sm:text-base">
                    © 2025 Element Vape. All Rights Reserved.
                </section>
            </FadeInSection>
        </footer>
    );
};

export default UserFooter;
