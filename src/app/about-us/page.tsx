import AboutV1 from "@/components/about/AboutV1";
import BusinessHours from "@/components/hours/BusinessHours";
import LayoutV6 from "@/components/layouts/LayoutV6";

export const metadata = {
    title: "PANZ - Sobre Nosotros"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="Sobre Nosotros" title="Sobre Nosotros">
                <AboutV1 />
                <BusinessHours />
            </LayoutV6>
        </>
    );
};

export default AboutUsPage;