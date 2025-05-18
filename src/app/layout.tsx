import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
// import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <p>Environment: {process.env.ENVIRONMEN}</p>
      <hr/>
      <body>{children}</body>
      {process.env.ENVIRONMENT === "production" ? null : ( <PrismicPreview repositoryName={repositoryName} />)}
    </html>
  );
}
