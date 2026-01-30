import type { Metadata } from 'next';
import AboutV1 from "@/components/about/AboutV1";
import BusinessHours from "@/components/hours/BusinessHours";
import LayoutV6 from "@/components/layouts/LayoutV6";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conocé la historia de PanZ Paysandú. Somos una pizzería y restaurante con tradición en la ciudad, ofreciendo calidad y sabor en cada plato.",
    openGraph: {
        title: 'Sobre Nosotros | PanZ Paysandú',
        description: 'Conocé la historia de PanZ Paysandú. Pizzería y restaurante con tradición en la ciudad.',
        url: '/about-us',
    },
    alternates: {
        canonical: '/about-us',
    },
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