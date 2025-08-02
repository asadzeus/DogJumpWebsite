import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./global.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="min-h-[100vh] w-full overflow-x-hidden">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
