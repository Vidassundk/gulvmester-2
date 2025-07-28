// src/app/layout.js
// NO "use client"; directive here. This file is a Server Component.

// Line Awesome CSS
import "@/assets/css/line-awesome.min.css";
// Font Awesome CSS
import "@/assets/css/fontAwesomePro.css";
// Animate CSS
import "@/assets/css/animate.css";
// Bar Filler CSS
import "@/assets/css/barfiller.css";
// Flaticon CSS
import "@/assets/css/flaticon.css";
// backToTop CSS
import "@/assets/css/backToTop.css";
// Fancybox CSS
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// style.scss
import "@/assets/scss/style.scss";

import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

// Import your global providers. AppWrapper is also a Client Component, it will have "use client"; inside it.
import { AppWrapper } from "@/context"; // Use the direct path: src/context/AppContext.js

import Script from "next/script";
import WowProvider from "@/provider/WowProvider"; // This is a Server Component/Provider, it remains here.
import GlobalClientProviders from "@/provider/GlobalClientProviders";

// Metadata Export: This is allowed because layout.js is now a Server Component.
export const metadata = {
  title: "Gulvmestere AS - Professional Flooring Services",
  description: "Expert flooring solutions in Rogaland, Norway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        {/* WowProvider can stay here, it's a Server Component or its own client boundary */}
        <WowProvider />

        {/* AppWrapper (which provides AppContext) must be a client component itself,
                    so it needs its own "use client"; directive inside AppContext.js.
                    We wrap everything inside it. */}
        <AppWrapper>
          {/* GlobalClientProviders is a new client component that will contain
                        all other client-side components like Header, Footer, PreLoader, etc.,
                        and render the {children} prop. */}
          <GlobalClientProviders>{children}</GlobalClientProviders>
        </AppWrapper>

        {/* External scripts that don't need to be part of React rendering */}
        <Script src="/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
