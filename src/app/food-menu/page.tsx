import type { Metadata } from 'next';
import DeliveryV1 from "@/components/delivery/DeliveryV1";
import FoodMenuV4 from "@/components/food/FoodMenuV4";
import FoodMenuV5 from "@/components/food/FoodMenuV5";
import LayoutV6 from "@/components/layouts/LayoutV6";
import ReservationV1 from "@/components/reservation/ReservationV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

export const metadata: Metadata = {
    title: "Menú Completo",
    description: "Explorá nuestro menú completo: pizzas, chivitos, milanesas, hamburguesas, pastas caseras, parrilla, ensaladas y más. Precios actualizados. Delivery en Paysandú.",
    keywords: ['menu panz', 'carta panz', 'pizzas paysandu', 'precios pizzeria paysandu', 'menu restaurante paysandu'],
    openGraph: {
        title: 'Menú | PanZ Paysandú',
        description: 'Explorá nuestro menú completo: pizzas, chivitos, milanesas, hamburguesas, pastas caseras, parrilla y más.',
        url: '/food-menu',
    },
    alternates: {
        canonical: '/food-menu',
    },
};

const FoodMenuPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="Menú" title="Menú">
                <FoodMenuV4 />
                <DeliveryV1 />
                <FoodMenuV5 />
                <TestimonialV1 />
                <ReservationV1 sectionClass="mb-120 mb-xs-60" />
            </LayoutV6>
        </>
    );
};

export default FoodMenuPage;