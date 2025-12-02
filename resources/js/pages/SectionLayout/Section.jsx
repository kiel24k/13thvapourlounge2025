import React from "react";

const Section = ({children, sectionName}) => {
    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">{sectionName}</span>
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;
