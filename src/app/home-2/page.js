import HeroSectionTwo from "@/components/sections/HeroSectionTwo";
import BannerSection from "@/components/sections/BannerSection";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import FeatureSectionTwo from "@/components/sections/FeatureSectionTwo";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";
import ClientsSectionOne from "@/components/sections/ClientsSectionOne";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProjectSectionTwo from "@/components/sections/ProjectSectionTwo";
import FaqSectionTwo from "@/components/sections/FaqSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";
import ContactSection from "@/components/sections/ContactSection";

export default function HomeTwo() {
    return (
        <>
            {/*-- Hero Area --*/}
            <HeroSectionTwo />

            {/*-- Banner Section --*/}
            <BannerSection />

            {/*-- Counter Section --*/}
            <CounterSectionOne />

            {/*-- Feature Section --*/}
            <FeatureSectionTwo />

            {/*-- Service Section  --*/}
            <ServiceSectionTwo />

            {/*-- Testimonial Section --*/}
            <TestimonialSectionTwo />

            {/*-- Clients Section --*/}
            <ClientsSectionOne customClass='pt-0'/>

            {/*-- About Section  --*/}
            <AboutSectionTwo />

            {/*-- Why Choose Us Section  --*/}
            <WhyChooseUsSection />

            {/*-- Project Section  --*/}
            <ProjectSectionTwo />

            {/*-- Faq Section  --*/}
            <FaqSectionTwo />

            {/*-- Blog Section --*/}
            <BlogSectionTwo />

            {/*-- Contact Section --*/}
            <ContactSection />
        </>
    )
}