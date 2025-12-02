import React from "react";
import HistoryBackButton from "../components/HistoryBackButton";
import Slider from "@mui/material/Slider";
import { Outlet } from "react-router-dom";

const PosLayout = () => {
    return (
        <>
            <main>
                <nav>
                    <HistoryBackButton
                        title={"main"}
                        route={"/admin-dashboard"}
                    />
                </nav>

                <Outlet />
            </main>
        </>
    );
};

export default PosLayout;
