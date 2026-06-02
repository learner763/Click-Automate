import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://click-automate.vercel.app"),

  title: {
    default: "Click Automate | Web Development, SEO & AI Automation",
    template: "%s | Click Automate",
  },

  description:
    "Click Automate provides professional web development, SEO, AI automation, payment integration and digital solutions for startups, founders and businesses.",

  keywords: [
    "web development",
    "SEO services",
    "AI automation",
    "Next.js development",
    "digital agency",
    "payment integration",
    "website development",
    "Pakistan web agency",
    "business automation",
    "software solutions",
  ],

  authors: [
    {
      name: "Click Automate",
    },
  ],

  creator: "Click Automate",
  publisher: "Click Automate",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://click-automate.vercel.app",
  },

  openGraph: {
    title: "Click Automate | Web Development & SEO Agency",
    description:
      "Professional web development, SEO, AI automation and digital solutions for modern businesses.",
    url: "https://click-automate.vercel.app",
    siteName: "Click Automate",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Click Automate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Click Automate",
    description:
      "Web development, SEO and AI automation services.",
    images: ["/og-image.png"],
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Click Automate",
              url: "https://click-automate.vercel.app",
              logo: "https://click-automate.vercel.app/og-image.png",
              description:
                "Web development, SEO, AI automation, payment integration and digital solutions.",
              email: "clickautomate2@gmail.com",

              sameAs: [],

              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },

              areaServed: "Worldwide",

              services: [
                "Web Development",
                "SEO",
                "AI Automation",
                "Payment Integrations",
                "Ads Management",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}