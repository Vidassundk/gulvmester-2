import Breadcrumb from "@/components/sections/Breadcrumb";
import PricingSectionOne from "@/components/sections/PricingSectionOne";

export default function Pricing() {
    const menus = [
        {
            label: 'Pricing',
            link: ''
        },
    ];

    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Pricing" menus={menus}/>

            {/*-- Pricing Section  --*/}
            <PricingSectionOne />
        </>
    )
}