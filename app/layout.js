import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProgress from "@/components/libraries/NextProgress";
import AuthConextProvider from "@/context/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthConextProvider>
          <NextProgress>
            <Header />
            {children}

            <Footer />
            <BootstrapClient />
            <Toastify />
          </NextProgress>
        </AuthConextProvider>
      </body>
    </html>
  );
}
