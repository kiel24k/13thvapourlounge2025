import React from "react";
import ImageSlider from "../../components/ImageSlider";
import ItemCard from "../../components/ItemCard";
import { Button, Fade } from "@mui/material";
import FadeInSection from "../../components/FadeInSection";

const Homepage = () => {
    return (
        <div className="grid gap-5 bg-white">
            <section>
                <ImageSlider />
            </section>
            <FadeInSection>
                <section className="grid gap-10">
                    <div className="title text-center">
                        <h1 className="font-bold text-2xl">TRENDING</h1>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>

                    <div className="text-center">
                        <Button variant="outlined" color="black">
                            Load more
                        </Button>
                    </div>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section className="grid gap-10">
                    <div className="title text-center">
                        <h1 className="font-bold text-2xl">NEW ARRIVALS</h1>
                    </div>

                    <div className="flex justify-center flex-wrap gap-10">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>

                    <div className="text-center">
                        <Button variant="outlined" color="black">
                            LOAD MORE
                        </Button>
                    </div>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section className="grid gap-10">
                    <div className="title text-center">
                        <h1 className="font-bold text-2xl">BEST SELLERS</h1>
                    </div>

                    <FadeInSection>
                        <div className="flex justify-center flex-wrap gap-10">
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                    </FadeInSection>

                    <div className="text-center">
                        <Button variant="outlined" color="black">
                            LOAD MORE
                        </Button>
                    </div>
                </section>
            </FadeInSection>
        </div>
    );
};

export default Homepage;
