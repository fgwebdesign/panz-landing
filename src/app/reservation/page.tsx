import type { Metadata } from 'next';
import LayoutV6 from "@/components/layouts/LayoutV6";
import ReservationV2 from "@/components/reservation/ReservationV2";

export const metadata: Metadata = {
    title: "Reservas",
    description: "Hacé tu reserva online en PanZ Paysandú. Reservá tu mesa para disfrutar de las mejores pizzas, chivitos y parrilla de la ciudad.",
    openGraph: {
        title: 'Reservas | PanZ Paysandú',
        description: 'Hacé tu reserva online en PanZ Paysandú. Reservá tu mesa para disfrutar.',
        url: '/reservation',
    },
    alternates: {
        canonical: '/reservation',
    },
};

const ReservationPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="Reservas" title="Reservas Online">
                <ReservationV2 />
            </LayoutV6>
        </>
    );
};

export default ReservationPage;