import React from "react";
import ImageSlider from "../../components/ImageSlider";
import ItemCard from "./components/ItemCard";
import { Button, Fade } from "@mui/material";
import FadeInSection from "../../components/FadeInSection";
import { useShowProducts } from "../../hooks/useProducts";
import { useTrendingProduct } from "../../hooks/useAnalytic";
import { Link } from "react-router-dom";

const Homepage = () => {
    const { data } = useShowProducts();
    const { data: trendingProducts } = useTrendingProduct();
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
                        {trendingProducts &&
                            trendingProducts.slice(0, 5).map((item) => (
                                //i want to item with display only quantity have less than 20
                                <Link to={`/view-item/${item.id}`}>
                                    <ItemCard
                                        productName={item.product_name}
                                        productPrice={item.product_price}
                                        image={JSON.parse(item.image)}
                                        quantity={item.product_quantity}
                                    />
                                </Link>
                            ))}
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
                        {data &&
                            data.slice(0, 5).map((item) => (
                                <Link to={`view-item/${item.id}`}>
                                  
                                    <ItemCard
                                        productName={item.product_name}
                                        productPrice={item.product_price}
                                        image={JSON.parse(item.image)}
                                        quantity={item.product_quantity}
                                    />
                                </Link>
                            ))}
                    </div>

                    <div className="text-center">
                        <Button variant="outlined" color="black">
                            View all
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
