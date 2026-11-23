import "./globals.css";
import { Orbitron, JetBrains_Mono, Inter } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-orbitron" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Pasindu Fernando — Software Engineer",
  description:
    "Software Engineer at Choreo Labs building the Ballerina Language Server. Systems researcher in live VM migration.",
  openGraph: {
    title: "Pasindu Fernando — Software Engineer",
    description: "Developer tooling, language servers and systems research.",
    type: "website",
  },
};

export const viewport = { themeColor: "#04050E" };

// Runs before paint: enables reveal animations and skips the boot screen on repeat visits.
const preload = `(function(){var d=document.documentElement;d.classList.add("js");try{if(sessionStorage.getItem("pf-booted")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("no-boot")}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${mono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preload }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
