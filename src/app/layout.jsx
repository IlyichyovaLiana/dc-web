"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "@icon/icofont/icofont.css";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import { RouterPaths } from "@/utils";
import { GlobalProvider } from "@/contexts";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));
const AuthGuard = dynamic(() => import("@/components/AuthGuard"), {
  ssr: false,
});
const DashboardLayout = dynamic(() => import("@/components/DashboardLayout"), {
  ssr: false,
});

function RootLayout({ children }) {
  const route = usePathname();

  const isNoLayoutRoute =
    route.includes(RouterPaths.LOGIN) || route.includes(RouterPaths.ADMIN);
  const isAdminRoute = route.includes(RouterPaths.ADMIN);

  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        {isNoLayoutRoute ? (
          <AuthGuard>
            {isAdminRoute ? (
              <main>
                <DashboardLayout>{children}</DashboardLayout>
              </main>
            ) : (
              <main>{children}</main>
            )}
          </AuthGuard>
        ) : (
          <GlobalProvider>
            <Header />
            {children}
            <Footer />
          </GlobalProvider>
        )}
      </body>
    </html>
  );
}

export default RootLayout;
