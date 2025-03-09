import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProgress from "@/components/libraries/NextProgress";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextProgress>
          <Header />
          {children}

          <Footer />
          <BootstrapClient />
          <Toastify />
        </NextProgress>
      </body>
    </html>
  );
}
