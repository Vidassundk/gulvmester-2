import Breadcrumb from "@/components/sections/Breadcrumb";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import ChooseUsSectionOne from "@/components/sections/ChooseUsSectionOne";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import ClientsSectionOne from "@/components/sections/ClientsSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";

export default function About() {
    const menus = [
        {
            label: 'About Us',
            link: ''
        }
    ];
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="About Us" menus={menus}/>

            {/*-- About Section --*/}
            <AboutSectionThree customClass='pt-180'/>

            {/*-- Counter Section --*/}
            <CounterSectionOne />

            {/*-- Choose Us Section --*/}
            <ChooseUsSectionOne />

            {/*-- Service Section  --*/}
            <ServiceSectionTwo />

            {/*-- Clients Section --*/}
            <ClientsSectionOne customClass='pt-60'/>

            {/*-- Team Section  --*/}
            <TeamSectionOne />
        </>
    )
}