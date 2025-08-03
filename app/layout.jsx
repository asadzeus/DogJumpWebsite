import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./global.css";

export const metadata = {
  title: {
    default: 'Barber_Shop_Simulator',
    template: '%s | Barber_Shop_Simulator',
  },
  description: 'Learn more about my game and wishlist it now to support the launch!',
  keywords: ['Pc Games', 'BarberShopSimulator', 'Simulation Games', 'Game Dev', 'Indie game dev', 'Vixy Games'],
  openGraph: {
    description: 'Learn more about my game and wishlist it now to support the launch!',
  },
  alternates: {
    canonical: 'https://barbershopsimulator.vercel.app',
  },
};


export default function RootLayout({ children }) {

    const schema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "Barber Shop Simulator",
    "description": "A simulation game about managing a barber shop.",
    "url": "https://barbershopsimulator.vercel.app",
    "publisher": {
      "@type": "Organization",
      "name": "Vixy Games"
    }
  };

  return (
    
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key="jsonld-schema"
        />
      </head>
      <body className="min-h-[100vh] w-full overflow-x-hidden">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
