import React from "react";
import HorizontalBars from "../../components/Charts/HorizontalBars";
import Paper from "../../components/box/Paper";
import Pie from "../../components/Charts/Pie";
import GroupIcon from "@mui/icons-material/Group";
import FadeInSection from "../../components/FadeInSection";
const Index = () => {
    return (
        <>
            <div className="grid">
                <FadeInSection>
                    <section>
                        <div className="flex justify-center flex-wrap">
                            <Paper elevation={4}>
                                <div className="grid gap-5 p-5">
                                    <figure className="flex justify-start items-end gap-2 ">
                                        <i>
                                            <GroupIcon />
                                        </i>
                                        <figcaption>
                                            <span className="text-gray-500 text-sm">
                                                Total of customers
                                            </span>
                                        </figcaption>
                                    </figure>

                                    <div className="text-start">
                                        <b className="text-2xl">56,232</b>
                                    </div>
                                </div>
                            </Paper>

                            <Paper elevation={4}>
                                <div className="grid gap-5 p-5">
                                    <figure className="flex justify-start items-end gap-2 ">
                                        <i>
                                            <GroupIcon />
                                        </i>
                                        <figcaption>
                                            <span className="text-gray-500 text-sm">
                                                Total of customers
                                            </span>
                                        </figcaption>
                                    </figure>

                                    <div className="text-start">
                                        <b className="text-2xl">56,232</b>
                                    </div>
                                </div>
                            </Paper>

                            <Paper elevation={4}>
                                <div className="grid gap-5 p-5">
                                    <figure className="flex justify-start items-end gap-2 ">
                                        <i>
                                            <GroupIcon />
                                        </i>
                                        <figcaption>
                                            <span className="text-gray-500 text-sm">
                                                Total of customers
                                            </span>
                                        </figcaption>
                                    </figure>

                                    <div className="text-start">
                                        <b className="text-2xl">56,232</b>
                                    </div>
                                </div>
                            </Paper>

                            <Paper elevation={4}>
                                <div className="grid gap-5 p-5">
                                    <figure className="flex justify-start items-end gap-2 ">
                                        <i>
                                            <GroupIcon />
                                        </i>
                                        <figcaption>
                                            <span className="text-gray-500 text-sm">
                                                Total of customers
                                            </span>
                                        </figcaption>
                                    </figure>

                                    <div className="text-start">
                                        <b className="text-2xl">56,232</b>
                                    </div>
                                </div>
                            </Paper>
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
