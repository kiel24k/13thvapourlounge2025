import React from "react";
import FadeInSection from "../../components/FadeInSection";
import ItemCard from "../../components/ItemCard";

const Items = () => {
    return (
       <>
        <FadeInSection>
            <section className="md:w-300  m-auto">
                <div className="grid">
                    <figure className="w-full ">
                        <div className="grid justify-center">
                            <img
                                src="/image/eliquids-cover.webp"
                                alt="eliquids-cover"
                            />
                        </div>
                        <figcaption className=" h-10 w-auto m-auto md:h-50 overflow-hidden">
                            <p>
                                Nicotine Salts E-Liquids are complex compounds
                                containing salt-based nicotine, typically less
                                harsh to vape which allows for better tolerance
                                of higher nic salt e-juice. Keep in-mind that
                                Nic Salt eJuice is typically different than
                                traditional Free-Based Nicotine, the
                                conventional eLiquid you see in bigger vape
                                devices. For the most part, both types consists
                                of the same nicotine found within the natural
                                tobacco leaf, with the exception of benzoic acid
                                composition in nicotine salts. As a shortcut
                                guide, benzoic acid lowers the pH level and
                                reduces alkalinity that allows for a smoother
                                vaping experience at higher nicotine strength --
                                optimized for lower-power devices such as pod
                                systems and certain vape pens.
                            </p>
                        </figcaption>
                    </figure>
                </div>
                 
            </section>
             </FadeInSection>
            

          <FadeInSection>
              <section className="grid gap-5 md:w-310 m-auto mt-5 ">
                <div className="flex justify-evenly md:justify-between">
                    <div className="flex">
                        <span>Filter:</span>
                        <span>Availability</span>
                        <span>Price</span>
                    </div>
                    <div className="flex">
                        <span>Sort by:</span>
                        <span>Alphabetically</span>
                        <span>3</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-5 justify-center">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </section>
          </FadeInSection>
       </>
       
      
    );
};

export default Items;
