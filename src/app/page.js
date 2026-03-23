import HeroSectionOne from "@/components/sections/HeroSectionOne";
import FeatureSectionOne from "@/components/sections/FeatureSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ScrollingTextSectionOne from "@/components/sections/ScrollingTextSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import ChooseUsSectionOne from "@/components/sections/ChooseUsSectionOne";
import ProcessSectionOne from "@/components/sections/ProcessSectionOne";
import VideoSectionOne from "@/components/sections/VideoSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import FaqSectionOne from "@/components/sections/FaqSectionOne";
import ClientsSectionOne from "@/components/sections/ClientsSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";
import StartbankSectionOne from "@/components/sections/StartbankSectionOne";
import FeatureSectionTwo from "@/components/sections/FeatureSectionTwo";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/*-- Hero Area --*/}
      <HeroSectionOne />
      <ContactSection dark />
      <StartbankSectionOne />
      {/* <FeatureSectionTwo /> */}

      {/* <FeatureSectionOne /> */}


      <ScrollingTextSectionOne />
      <ServiceSectionThree />


      <ProjectSectionOne />

      <AboutSectionOne />

      {/* <ServiceSectionOne /> */}

      {/* <ChooseUsSectionOne /> */}

      {/* <ProcessSectionOne /> */}

      {/* <VideoSectionOne /> */}

      {/* <TestimonialSectionOne /> */}

      <FaqSectionOne />

      {/* <ClientsSectionOne /> */}

      {/* <TeamSectionOne /> */}

      {/* <BlogSectionOne /> */}
    </>
  );
}
