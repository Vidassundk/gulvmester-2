import Breadcrumb from "@/components/sections/Breadcrumb";
import BlogSectionThree from "@/components/sections/BlogSectionThree";

export default function Blog() {
    const menus = [
        {
            label: 'Blog',
            link: ''
        },
    ];

    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Blog" menus={menus}/>

            {/*-- Blog Section  --*/}
            <BlogSectionThree />
        </>
    )
}