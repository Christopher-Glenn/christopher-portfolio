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
      <body className="h-full bg-transparent">
        {children}
      </body>
    </html>
  );
}
