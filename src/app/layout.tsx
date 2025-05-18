import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "./components/header/header";
// import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
       
      <p>Environment: {process.env.ENVIRONMENT}</p>
      <hr/>
      </body>
      {process.env.ENVIRONMENT === "production" ? null : ( <PrismicPreview repositoryName={repositoryName} />)}
    </html>
  );
}
