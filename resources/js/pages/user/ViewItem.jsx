import React from "react";
import FadeInSection from "../../components/FadeInSection";
import ProductImageGallery from "../../components/ProductImageGallery";

const ViewItem = () => {
    return (
        <>
            <FadeInSection>
                <section className="w-300 m-auto">
                    <div className="grid grid-cols-2 items-start content-start">
                        <div className="">
                            <ProductImageGallery />
                        </div>
                        <div className="grid">
                            <div className="grid gap-5 ">
                                <span className="text-3xl">
                                    STRAWBERRY POM - NKD 100 SALT E-LIQUID -
                                    30ML
                                </span>
                                <b className="font-bold text-2xl">P210.00</b>
                                <hr />
                            </div>
                            <div className="pt-4 pb-4 border-b-1">
                                <p>Strawberry Pom by Naked 100 Salt (formerly Brain Freeze) is a special nicotine salt formulation of sweet strawberries, slight tartness of Kiwi, and exotic ruby red pomegranates for a mouth-quenching sensation with an uplifting menthol. **Warning: Not For Sub-Ohm Use</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>
        </>
    );
};

export default ViewItem;
