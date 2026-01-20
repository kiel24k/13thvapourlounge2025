import React, { useState } from "react";
import ImageSlider from "../../components/ImageSlider";
import ItemCard from "./components/ItemCard";
import { Button } from "@mui/material";
import FadeInSection from "../../components/FadeInSection";
import { useShowProducts } from "../../hooks/useProducts";
import { useBestSeller, useTrendingProduct } from "../../hooks/useAnalytic";
import { Link } from "react-router-dom";

const SectionHeader = ({ label, title, description }) => (
    <div className="text-center grid gap-2 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            {label}
        </span>
        <h1 className="font-bold text-2xl sm:text-3xl tracking-wide">
            {title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">{description}</p>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full" />
    </div>
);

const Homepage = () => {
    const { data } = useShowProducts();
    const { data: trendingProducts } = useTrendingProduct();
    const { data: bestSeller } = useBestSeller();

    // Load More state for each section
    const [visibleTrending, setVisibleTrending] = useState(5);
    const [visibleNew, setVisibleNew] = useState(5);
    const [visibleBestSeller, setVisibleBestSeller] = useState(5);

    return (
        <div className="bg-white">
            {/* HERO */}
            <section>
                <ImageSlider />
            </section>

            {/* TRENDING */}
            <FadeInSection>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-12">
                    <SectionHeader
                        label="Hot right now"
                        title="Trending Products"
                        description="Discover what’s popular and selling fast right now."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                        {trendingProducts &&
                            trendingProducts.slice(0, visibleTrending).map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/view-item/${item.product_category}`}
                                    className="flex justify-center"
                                >
                                    <ItemCard
                                        productName={item.product_name}
                                        productPrice={item.product_price}
                                        image={JSON.parse(item.image)}
                                        quantity={item.product_quantity}
                                    />
                                </Link>
                            ))}
                    </div>

                    {trendingProducts && visibleTrending < trendingProducts.length && (
                        <div className="flex justify-center">
                            <Button
                                variant="outlined"
                                className="w-full sm:w-auto"
                                onClick={() => setVisibleTrending(prev => prev + 5)}
                            >
                                Load more
                            </Button>
                        </div>
                    )}
                </section>
            </FadeInSection>

            {/* NEW ARRIVALS */}
            <FadeInSection>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-12">
                    <SectionHeader
                        label="Just dropped"
                        title="New Arrivals"
                        description="Fresh products added recently — don’t miss out."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                        {data &&
                            data.slice(0, visibleNew).map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/view-item/${item.product_category}`}
                                    className="flex justify-center"
                                >
                                    <ItemCard
                                        productName={item.product_name}
                                        productPrice={item.product_price}
                                        image={JSON.parse(item.image)}
                                        quantity={item.product_quantity}
                                    />
                                </Link>
                            ))}
                    </div>

                    {data && visibleNew < data.length && (
                        <div className="flex justify-center">
                            <Button
                                variant="outlined"
                                className="w-full sm:w-auto"
                                onClick={() => setVisibleNew(prev => prev + 5)}
                            >
                                Load more
                            </Button>
                        </div>
                    )}
                </section>
            </FadeInSection>

            {/* BEST SELLERS */}
            <FadeInSection>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-12">
                    <SectionHeader
                        label="Customer favorites"
                        title="Best Sellers"
                        description="Our most loved and top-selling products."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                        {bestSeller &&
                            bestSeller.slice(0, visibleBestSeller).map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/view-item/${item.product_category}`}
                                    className="flex justify-center"
                                >
                                    <ItemCard
                                        productName={item.product_name}
                                        productPrice={item.product_price}
                                        image={JSON.parse(item.image)}
                                        quantity={item.product_quantity}
                                    />
                                </Link>
                            ))}
                    </div>

                    {bestSeller && visibleBestSeller < bestSeller.length && (
                        <div className="flex justify-center">
                            <Button
                                variant="outlined"
                                className="w-full sm:w-auto"
                                onClick={() => setVisibleBestSeller(prev => prev + 5)}
                            >
                                Load more
                            </Button>
                        </div>
                    )}
                </section>
            </FadeInSection>
        </div>
    );
};

export default Homepage;
