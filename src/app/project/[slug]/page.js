import Breadcrumb from "@/components/sections/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";

export default function Project() {
    const menus = [
        {
            label: 'Project',
            link: '/project'
        },
        {
            label: 'Project Details',
            link: ''
        },
    ];

    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Project Details" menus={menus}/>

            {/*-- Project Details  --*/}
            <ProjectDetailsSection />
        </>
    )
}