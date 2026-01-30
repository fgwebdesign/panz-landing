import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import "react-datepicker/dist/react-datepicker.css";

import '@/assets/css/font-awesome.css';
import '@/assets/css/animate.css';
import '@/assets/css/flaticon-set.css';
import '@/assets/css/shop.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css';

import Dependency from "@/components/utilities/Dependency";
import type { Metadata, Viewport } from "next";
import ReduxWrapper from '@/components/utilities/ReduxWrapper';
import FloatingActionButton from '@/components/utilities/FloatingActionButton';

const siteUrl = 'https://panz.com.uy';
const siteName = 'PanZ Paysandú';
const siteDescription = 'Pizzería y restaurante en Paysandú, Uruguay. Las mejores pizzas, chivitos, milanesas, pastas caseras y parrilla. Pedí por WhatsApp o PedidosYa. Delivery y takeaway.';

export const metadata: Metadata = {
  // Metadatos básicos
  title: {
    default: 'PanZ Paysandú | Pizzería y Restaurante',
    template: '%s | PanZ Paysandú',
  },
  description: siteDescription,
  keywords: [
    'pizzeria paysandu',
    'restaurante paysandu',
    'pizza paysandu',
    'chivitos paysandu',
    'milanesas paysandu',
    'delivery paysandu',
    'comida paysandu',
    'parrilla paysandu',
    'pastas caseras paysandu',
    'panz',
    'pan z',
    'restaurante uruguay',
    'pizzeria uruguay',
    'pedidosya paysandu',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  
  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical y alternates
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'es-UY': '/',
    },
  },

  // Open Graph (Facebook, WhatsApp, etc.)
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: siteUrl,
    siteName: siteName,
    title: 'PanZ Paysandú | Pizzería y Restaurante',
    description: siteDescription,
    images: [
      {
        url: '/assets/img/banner/panzhero.jpg',
        width: 1200,
        height: 630,
        alt: 'PanZ Paysandú - Pizzería y Restaurante',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'PanZ Paysandú | Pizzería y Restaurante',
    description: siteDescription,
    images: ['/assets/img/banner/panzhero.jpg'],
  },

  // Icons
  icons: {
    icon: [
      { url: '/assets/img/favicon.ico' },
      { url: '/assets/img/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/img/panzred.png' },
    ],
  },

  // Verificación (agregar IDs reales cuando estén disponibles)
  // verification: {
  //   google: 'tu-google-verification-id',
  // },

  // Categoría
  category: 'restaurant',

  // Otros
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#BE0814' },
    { media: '(prefers-color-scheme: dark)', color: '#BE0814' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD Structured Data para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'PanZ Paysandú',
              image: `${siteUrl}/assets/img/banner/panzhero.jpg`,
              '@id': siteUrl,
              url: siteUrl,
              telephone: '+598 91 285 003',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Paysandú',
                addressLocality: 'Paysandú',
                addressRegion: 'Paysandú',
                postalCode: '60000',
                addressCountry: 'UY',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -32.3103,
                longitude: -58.0756,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00',
                },
              ],
              servesCuisine: ['Pizza', 'Uruguayan', 'Grill', 'Pasta'],
              priceRange: '$$',
              acceptsReservations: 'True',
              menu: `${siteUrl}/food-menu`,
              hasMenu: {
                '@type': 'Menu',
                url: `${siteUrl}/food-menu`,
              },
              sameAs: [
                'https://www.instagram.com/panzpaysandu',
                'https://www.pedidosya.com.uy/restaurantes/paysandu/pan-z-menu',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ReduxWrapper>
          <Dependency />
          {children}
          <FloatingActionButton />
        </ReduxWrapper>
      </body>
    </html>
  );
}
