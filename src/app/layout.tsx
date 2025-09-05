import "./globals.css";

export const metadata = {
  title: "Christopher Bedis",
  description: "Portfolio of Your Name",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="preload"
          href="/fonts/TuskerGrotesk-2500Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NeueMontreal-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/migra-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/maelstrom-sans-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/FontsFree-Net-MaelstromBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="h-full bg-transparent">
        {children}
      </body>
    </html>
  );
}
