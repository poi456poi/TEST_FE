import AppFooter from "@/components/home/app.footer";
import AppHeader from "@/components/home/app.header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter/>
      </body>
    </html>
  );
}
