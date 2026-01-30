import type { Metadata } from 'next';
import ContactPageContent from "@/components/contact/ContactPageContent";
import LayoutV6 from "@/components/layouts/LayoutV6";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Contactanos en PanZ Paysandú. Hacé tu pedido por WhatsApp, consultá nuestros horarios o visitanos. Estamos para atenderte.",
    openGraph: {
        title: 'Contacto | PanZ Paysandú',
        description: 'Contactanos en PanZ Paysandú. Hacé tu pedido por WhatsApp o visitanos.',
        url: '/contact',
    },
    alternates: {
        canonical: '/contact',
    },
};

const ContactPage = () => {
    return (
        <>
            <LayoutV6 title="Contacto" breadCrumb="Contacto">
                <ContactPageContent />
            </LayoutV6>
        </>
    );
};

export default ContactPage;