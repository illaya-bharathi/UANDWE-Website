import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import healthcareData from '../../data/healthcareData';

const Healthcare = () => {
    return (
        <>
            <ServiceLayout 
                hero={{
                    title: "Healthcare & MedTech",
                    description: "Engineering life-saving medical software, IEC 62304 compliant devices, biomedical AI diagnostics, and secure IoMT systems.",
                    primaryButtonText: "Explore MedTech Solutions",
                    secondaryButtonText: "Talk to Healthcare Engineers"
                }}
            />
            
            {/* Premium sticky-scroll Why Choose Us section */}
            <WhyChooseUs categories={healthcareData.categories} />
        </>
    );
};

export default Healthcare;
