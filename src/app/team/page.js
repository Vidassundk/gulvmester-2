import Breadcrumb from "@/components/sections/Breadcrumb";
import SkillSection from "@/components/sections/SkillSection";
import TeamSectionThree from "@/components/sections/TeamSectionThree";

export default function Team() {
    const menus = [
        {
            label: 'Team',
            link: ''
        }
    ];

    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Team" menus={menus}/>

            {/*-- Skill Area  --*/}
            <SkillSection />

            {/*-- Team Section  --*/}
            <TeamSectionThree />
        </>
    )
}