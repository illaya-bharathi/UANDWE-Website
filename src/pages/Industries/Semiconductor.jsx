import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import semiconductorData from '../../data/semiconductorData';
import semiconductorImg from '../../assets/images/semiconductor.png';

const Semiconductor = () => {
    return (
        <>
            <ServiceLayout
                hero={{
                    title: "Semiconductor Engineering",
                    description: "Powering the future of silicon with end-to-end SoC design, advanced ASIC verification, and physical implementation services.",
                    primaryButtonText: "Explore Silicon Solutions",
                    secondaryButtonText: "Consult Our Experts"
                }}
            />

            {/* Premium sticky-scroll Why Choose Us section */}
            <WhyChooseUs categories={semiconductorData.categories} />
        </>
    );
};

export default Semiconductor;
