import HeroSectionThree from "@/components/sections/HeroSectionThree";
import FeatureSectionThree from "@/components/sections/FeatureSectionThree";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import ProjectSectionThree from "@/components/sections/ProjectSectionThree";
import SkillSection from "@/components/sections/SkillSection";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import CounterSectionTwo from "@/components/sections/CounterSectionTwo";
import PricingSectionOne from "@/components/sections/PricingSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";

export default function HomeThree() {
    return (
        <>
            {/*-- Hero Area --*/}
            <HeroSectionThree />

            {/*-- Feature Section --*/}
            <FeatureSectionThree />

            {/*-- About Section --*/}
            <AboutSectionThree customClass='pt-30'/>

            {/*-- Service Section --*/}
            <ServiceSectionThree />

            {/*-- Project Section  --*/}
            <ProjectSectionThree />

            {/*-- Skill Section  --*/}
            <SkillSection />

            {/*-- Team Section --*/}
            <TeamSectionTwo />

            {/*-- Testimonial Section  --*/}
            <TestimonialSectionThree />

            {/*-- Counter Section --*/}
            <CounterSectionTwo />

            {/*-- Pricing Section  --*/}
            <PricingSectionOne />

            {/*-- Blog Section  --*/}
            <BlogSectionOne />

        </>
    )
}