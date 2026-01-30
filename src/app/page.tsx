import type { Metadata } from 'next';
import Home6 from "./home-6/page";

export const metadata: Metadata = {
  title: 'Inicio | Pizzería y Restaurante en Paysandú',
  description: 'Bienvenidos a PanZ Paysandú. Las mejores pizzas, chivitos, milanesas, pastas caseras y parrilla de la ciudad. Pedí por WhatsApp o PedidosYa.',
  openGraph: {
    title: 'PanZ Paysandú | Pizzería y Restaurante',
    description: 'Bienvenidos a PanZ Paysandú. Las mejores pizzas, chivitos, milanesas, pastas caseras y parrilla de la ciudad.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <Home6 />;
}
