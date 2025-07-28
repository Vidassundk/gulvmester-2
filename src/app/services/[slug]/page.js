import Breadcrumb from "@/components/sections/Breadcrumb";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";

export default function ServiceSlug() {
    const menus = [
        {
            label: 'Services',
            link: '/services'
        },
        {
            label: 'Service Details',
            link: ''
        },
    ];

    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Service Details" menus={menus}/>

            {/*-- Service Details  --*/}
            <ServiceDetailsSection />
        </>
    )
}