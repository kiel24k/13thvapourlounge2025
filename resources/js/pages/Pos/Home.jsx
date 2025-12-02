import React from "react";
import ProcessProduct from "./Sections/ProcessProduct";
import { useShowProducts } from "../../hooks/useProducts";

const Home = () => {
   const {data: products, isFetching} = useShowProducts()
    return (
        <>
            <section>
                <ProcessProduct products={products} isFetching={isFetching} />
            </section>
        </>
    );
};

export default Home;
