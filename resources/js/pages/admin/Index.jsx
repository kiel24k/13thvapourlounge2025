import React from "react";
import HorizontalBars from "../../components/Charts/HorizontalBars";
import Paper from "../../components/box/Paper";
import Pie from "../../components/Charts/Pie";
import GroupIcon from "@mui/icons-material/Group";
import FadeInSection from "../../components/FadeInSection";
import TotalBox from "../../components/TotalBox";
const Index = () => {
    return (
        <>
            <div className="grid">
                <FadeInSection>
                    <section>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <TotalBox title={"total of customers"} total={"323,423"} />
                            <TotalBox title={"total of orders"} total={"32"} />
                            <TotalBox  title={"total of users"} total={"21"}/>
                            <TotalBox title={"total of success"} total={"32"}/>
                        </div>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className="">
                        <Paper elevation={3}>
                            <HorizontalBars />
                        </Paper>
                    </section>
                </FadeInSection>
                <FadeInSection>
                    <section className="md:flex ">
                        <Paper elevation={3}>
                            <Pie />
                        </Paper>
                        <div className="w-full">
                            <Paper elevation={3}>
                                <Pie />
                            </Paper>
                        </div>
                    </section>
                </FadeInSection>
            </div>
        </>
    );
};

export default Index;
